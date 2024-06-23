import React from 'react';

import ThemeToggle from './ui/theme-toggle';
import { Menu, Globe, SunMoon, Wallet } from 'lucide-react';
// import menuIcon from '@/assets/commonSvg/menu.svg';
// import languageIcon from '@/assets/commonSvg/language.svg';
import { useTheme } from '@/providers/theme';
import {useTranslation} from 'react-i18next';


export default function Navbar() {
  const {t} = useTranslation();
  // const { theme } = useTheme();
  return (
    <header className='flex h-16 w-full items-center justify-between'>
      {/* {theme} */}
      <div className=''>
        <Menu className='h-4 w-4'/>
      </div>
      <div className='flex items-center justify-end'>
        <div className='flex items-center mr-4 p-1 rounded-3xl' style={{background: 'linear-gradient(90deg, #AA3EFF 0%, #B40DB9 100%)'}}>
          <Wallet className='h-4 w-4 mr-1  text-white'/>
          <span className='text-white text-xs'>{t('header.wallet')}</span>
        </div>
        <ThemeToggle/>
        <Globe className='h-4 w-4'/>
      </div>
      
    </header>
  );
}
