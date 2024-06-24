import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../translate.entry.json';
import tw from './locales/zh-TW.json';
import de from './locales/de.json';
import ko from './locales/ko.json';
import ja from './locales/ja.json';


const resources = {
  'zh-TW': {
    translation: tw
  },
  'en': {
    translation: en
  },
  'de': {
    translation: de
  },
  'ja': {
    translation: ja
  },
  'ko': {
    translation: ko
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
