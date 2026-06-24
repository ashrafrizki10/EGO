'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Locale as LocaleType } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface LocaleContextValue {
  locale: LocaleType;
  setLocale: (locale: LocaleType) => void;
  t: typeof translations[LocaleType];
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleType>('ar');

  useEffect(() => {
    const stored = window.localStorage.getItem('ego-flow-locale') as LocaleType | null;
    if (stored && ['ar', 'en'].includes(stored)) {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    if (locale) {
      window.localStorage.setItem('ego-flow-locale', locale);
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    }
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale: setLocaleState, t: translations[locale] }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used inside LocaleProvider');
  }
  return context;
}
