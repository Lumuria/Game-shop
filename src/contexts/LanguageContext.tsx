import { createContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
  isRTL: boolean;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  changeLanguage: () => {},
  isRTL: false,
});

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [isRTL, language]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setIsRTL(lang === 'ar');
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};
