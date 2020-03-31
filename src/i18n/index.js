import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import translationJP from './locales/ja/translation.json';
import translationEN from './locales/en/translation.json';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'ja',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    resources: {
      en: {
        translations: translationEN,
      },
      ja: {
        translations: translationJP,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
    react: {
      wait: true,
    },
  });

export default i18n;
