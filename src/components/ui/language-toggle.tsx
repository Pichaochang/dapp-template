'use client';

import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {useTranslation, } from 'react-i18next';
import languageIcon from '@/assets/common/light/language.png'
import darkLanguageIcon from '@/assets/common/dark/language.png'
import { useTheme } from '@/providers/theme';


export default function LanguageToggle() {
  const { theme } = useTheme();
  const { i18n } = useTranslation()
  const changeLanguage = i18n.changeLanguage;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img className='h-6 w-6' src={theme === 'dark' ? darkLanguageIcon : languageIcon} alt="" />  
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mt-2' data-testid='theme-dropdown-content' align='end'>
        <DropdownMenuItem data-testid='theme-light' onClick={() => changeLanguage('en')}>
          {/* <Sun className='mr-2 h-5 w-5' /> */}
          EngLish
        </DropdownMenuItem>
        <DropdownMenuItem data-testid='theme-dark' onClick={() => changeLanguage('zh-TW')}>
          {/* <MoonStar className='mr-2 h-5 w-5' /> */}
          繁体中文
        </DropdownMenuItem>
        <DropdownMenuItem data-testid='theme-dark' onClick={() => changeLanguage('de')}>
          {/* <MoonStar className='mr-2 h-5 w-5' /> */}
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem data-testid='theme-dark' onClick={() => changeLanguage('ja')}>
          {/* <MoonStar className='mr-2 h-5 w-5' /> */}
          日本語
        </DropdownMenuItem>
        <DropdownMenuItem data-testid='theme-dark' onClick={() => changeLanguage('ko')}>
          {/* <MoonStar className='mr-2 h-5 w-5' /> */}
          한국인
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
