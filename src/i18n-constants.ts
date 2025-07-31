import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Sample translations defined as constants
const enTranslation = {
  app: { name: 'GameTech Store', tagline: 'Your Ultimate Gaming & PC Building Destination' },
  // ...
};

const arTranslation = {
  app: { name: 'متجر جيم تك', tagline: 'وجهتك المثالية للألعاب وبناء الحواسيب' },
  // ...
};

const resources = {
  en: { translation: enTranslation },
  ar: { translation: arTranslation },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

// Config complete
export default i18n;
