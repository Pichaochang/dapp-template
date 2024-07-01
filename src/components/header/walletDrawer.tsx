import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import copyIcon from '@/assets/common/light/copy.png';
import darkCopyIcon from '@/assets/common/dark/copy.png';
import walletListIcon from '@/assets/common/light/walletList.png';
import darkWalletListIcon from '@/assets/common/dark/walletList.png';
import shareIcon from '@/assets/common/light/share.png';
import darkShareIcon from '@/assets/common/dark/share.png';

import { useTheme } from '@/providers/theme';
import { useNavigate } from 'react-router-dom';
import walletIcon from '@/assets/common/light/wallet.png';
import darkWalletIcon from '@/assets/common/dark/wallet.png';
import { useState } from 'react';
import { globalStore } from '@/store';
export default function WalletDrawer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const handleClickLink = (link: string) => {
    navigate(link);
  };
  const [open, setOpen] = useState(false);
  const handleOpenChange = (isOpen:boolean) => {
    if (!globalStore.address) {
      return;
    } else {
      setOpen(isOpen);
    }
  };
  return (
    <DropdownMenu open={open} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild >
        <div onClick={() => setOpen(!open)} className='flex items-center mr-4 py-1 px-2 rounded-3xl' style={{background: 'linear-gradient(90deg, #AA3EFF 0%, #B40DB9 100%)'}}>
          <img onClick={() => setOpen(true)} className='h-4 w-4 mr-2' src={theme === 'dark' ?  darkWalletIcon : walletIcon } alt="" />  
          <span className='text-white text-xs'>{t('header.wallet')}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 ml-2 bg-[#F5F5F5] dark:bg-[#1D1D1B]">
        <DropdownMenuLabel>
          <div className="">
            <div className="bg-[#F5F5F5] dark:bg-[#343432]">{t('header.ADDRESS')}</div>
            <div className=""></div>
          </div>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
