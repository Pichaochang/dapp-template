import React from 'react';

import ThemeToggle from '../ui/theme-toggle';
import LanguageToggle from '../ui/language-toggle';
import { Wallet } from 'lucide-react';
import {useTranslation} from 'react-i18next';
import {MenuDrawer} from '@/components/header/menuDrawer';


export default function Navbar() {
  const {t} = useTranslation();
  return (
    <header className='flex h-16 w-full items-center justify-between'>
      <div className=''>
        <MenuDrawer></MenuDrawer>
      </div>
      <div className='flex items-center justify-end'>
        <div className='flex items-center mr-4 p-1 rounded-3xl' style={{background: 'linear-gradient(90deg, #AA3EFF 0%, #B40DB9 100%)'}}>
          <Wallet className='h-4 w-4 mr-1  text-white'/>
          <span className='text-white text-xs'>{t('header.wallet')}</span>
        </div>
        <ThemeToggle/>
        <LanguageToggle/>
      </div>
      
    </header>
  );
}
