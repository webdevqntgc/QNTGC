'use client';

import { useEffect, useRef } from 'react';

/**
 * Hero — brand intro video.
 *
 * On desktop/tablet it fills the viewport below the fixed navbar (h-screen,
 * `object-cover`). On mobile the section auto-sizes to the video's natural
 * aspect ratio so nothing is cropped or stretched.
 *
 * Plays ONCE when the section scrolls into view, then freezes on the final
 * frame. Right-click, drag, and download are all disabled.
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let triggered = false;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          triggered = true;
          video.currentTime = 0;
          video.play().catch(() => {
            /* autoplay blocked — user interaction will start it */
          });
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="
        relative w-full overflow-hidden bg-black
        pt-20
        md:flex md:h-screen md:flex-col md:pt-24
        lg:pt-32
      "
    >
      {/* Video container.
          Mobile: auto height (video stays at its natural aspect ratio).
          Tablet/desktop: fills remaining viewport space below the navbar. */}
      <div className="relative w-full bg-black md:flex-1">
        <video
          ref={videoRef}
          src="/Qntgc%20Hero%20Image.mp4"
          muted
          playsInline
          preload="auto"
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          className="
            pointer-events-none block h-auto w-full select-none
            md:absolute md:inset-0 md:h-full md:w-full md:object-cover
          "
          style={{
            imageRendering: 'auto',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        />
      </div>
    </section>
  );
}
