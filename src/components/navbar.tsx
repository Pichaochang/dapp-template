import React from 'react';

import ThemeToggle from './ui/theme-toggle';
import { Menu, Globe, SunMoon, Wallet } from 'lucide-react';
// import menuIcon from '@/assets/commonSvg/menu.svg';
// import languageIcon from '@/assets/commonSvg/language.svg';
import { useTheme } from '@/providers/theme';


export default function Navbar() {
  // const { theme } = useTheme();
  return (
    <header className='flex h-16 w-full items-center justify-between'>
      {/* {theme} */}
      <div className=''>
        <Menu/>
      </div>
      <div className='flex items-center justify-end'>
        <Wallet className='h-5 w-5 mr-4'/>
        <ThemeToggle/>
        <Globe className='h-5 w-5'/>
      </div>
      
    </header>
  );
}
