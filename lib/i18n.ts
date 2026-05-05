export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { name: string; dir: 'ltr' | 'rtl'; flag: string }> = {
  en: { name: 'English', dir: 'ltr', flag: 'EN' },
  ar: { name: 'العربية', dir: 'rtl', flag: 'AR' },
};

import en from '@/messages/en.json';
import ar from '@/messages/ar.json';

const dictionaries = { en, ar } as const;

export type Dict = typeof en;

export function getDict(locale: Locale): Dict {
  return (dictionaries[locale] ?? dictionaries[defaultLocale]) as Dict;
}
