// translate.config.ts
// GITHUB 仓库地址 https://github.com/hymhub/language-translate
import {Lang} from 'language-translate/types';
import {defineConfig} from 'language-translate/utils';

export default defineConfig({
  proxy: {
    host: '127.0.0.1',
    port: 7890
  },
  fromLang: Lang['zh-CN'],
  fromPath: 'translate.entry.json',
  translate: [
    {
      label: '将结果翻译到locales文件夹下',
      targetConfig: [
        {
          targetLang: Lang['zh-TW'],
          outPath: './src/locales/zh-TW.json'
        },
        {
          targetLang: Lang.en,
          outPath: './src/locales/en.json'
        }
      ]
    }
  ]
});
