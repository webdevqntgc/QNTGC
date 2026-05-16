'use client';

import { useEffect } from 'react';

/**
 * Site-wide soft content protection.
 *
 * Disables:
 *   - right-click context menu
 *   - text selection (CSS `user-select: none` on <body>)
 *   - drag-and-drop of images / videos
 *   - common copy / save / view-source / devtools keyboard shortcuts
 *
 * This is a deterrent only — anyone with browser developer tools can still
 * extract content. It blocks casual copying, not determined scraping.
 */
export function ContentProtection() {
  useEffect(() => {
    const block = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const blockKeys = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;

      // F12 — devtools
      if (e.key === 'F12') {
        e.preventDefault();
        return;
      }
      // Ctrl/Cmd+U — view source
      // Ctrl/Cmd+S — save page
      // Ctrl/Cmd+P — print
      // Ctrl/Cmd+A — select all
      // Ctrl/Cmd+C — copy
      // Ctrl/Cmd+X — cut
      if (ctrl && ['u', 's', 'p', 'a', 'c', 'x'].includes(key)) {
        e.preventDefault();
        return;
      }
      // Ctrl/Cmd+Shift+I / J / C — devtools
      // Ctrl/Cmd+Shift+S — screenshot in some browsers
      if (ctrl && e.shiftKey && ['i', 'j', 'c', 's'].includes(key)) {
        e.preventDefault();
        return;
      }
    };

    document.addEventListener('contextmenu', block);
    document.addEventListener('selectstart', block);
    document.addEventListener('dragstart', block);
    document.addEventListener('copy', block);
    document.addEventListener('cut', block);
    document.addEventListener('keydown', blockKeys);

    // Lock CSS-level selection for everything inside the document
    const previousUserSelect = document.body.style.userSelect;
    const previousWebkitUserSelect = (document.body.style as CSSStyleDeclaration & { webkitUserSelect?: string })
      .webkitUserSelect;
    document.body.style.userSelect = 'none';
    (document.body.style as CSSStyleDeclaration & { webkitUserSelect?: string }).webkitUserSelect = 'none';

    return () => {
      document.removeEventListener('contextmenu', block);
      document.removeEventListener('selectstart', block);
      document.removeEventListener('dragstart', block);
      document.removeEventListener('copy', block);
      document.removeEventListener('cut', block);
      document.removeEventListener('keydown', blockKeys);
      document.body.style.userSelect = previousUserSelect;
      (document.body.style as CSSStyleDeclaration & { webkitUserSelect?: string }).webkitUserSelect =
        previousWebkitUserSelect;
    };
  }, []);

  return null;
}
