'use client';

import * as React from 'react';

import { SunMoon, MoonStar, Sun } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import lightIcon from '@/assets/common/light/light.png'
import darkIcon from '@/assets/common/dark/light.png'
import { useTheme } from '@/providers/theme';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <img className='h-6 w-6 mr-4' src={theme === 'dark' ? darkIcon : lightIcon} alt="" />  
      </DropdownMenuTrigger>
      <DropdownMenuContent data-testid='theme-dropdown-content' align='end'>
        <DropdownMenuItem data-testid='theme-light' onClick={() => setTheme('light')}>
          <Sun className='mr-2 h-5 w-5' />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem data-testid='theme-dark' onClick={() => setTheme('dark')}>
          <MoonStar className='mr-2 h-5 w-5' />
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
