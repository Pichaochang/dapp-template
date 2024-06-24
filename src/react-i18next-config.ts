import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../translate.entry.json';
import tw from './locales/zh-TW.json';

const resources = {
  'zh-TW': {
    translation: tw
  },
  'en': {
    translation: en
  },
  'de': {
    translation: en
  },
  'ja': {
    translation: en
  },
  'ko': {
    translation: en
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    // 默认语言  zh/en  中文/英文
    lng: 'en',
    fallbackLng: 'en',
    preload: ['en', 'zh-TW'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      caches: ['localStorage', 'sessionStorage', 'cookie']
    }
  });
export default i18n;
