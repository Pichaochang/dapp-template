import React from 'react';

import ThemeToggle from '@/components/header/theme-toggle';
import LanguageToggle from '@/components/header/language-toggle';
import {MenuDrawer} from '@/components/header/menuDrawer';
import WalletDrawer from '@/components/header/walletDrawer';


export default function Navbar() {
  return (
    <header className='flex h-16 w-full items-center justify-between select-none'>
      <div className=''>
        <MenuDrawer></MenuDrawer>
      </div>
      <div className='flex items-center justify-end'>
        <WalletDrawer/>
        <ThemeToggle/>
        <LanguageToggle/>
      </div>
      
    </header>
  );
}
