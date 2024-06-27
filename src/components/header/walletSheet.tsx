import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
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
export default function walletSheet() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const navigate = useNavigate();
  console.log('navigate', navigate);
  const [open, setOpen] = useState(false);
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };
  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <div onClick={() => setOpen(!open)} className='flex items-center mr-4 py-1 px-2 rounded-3xl' style={{ background: 'linear-gradient(90deg, #AA3EFF 0%, #B40DB9 100%)' }}>
          <img onClick={() => setOpen(true)} className='h-4 w-4 mr-2' src={theme === 'dark' ? darkWalletIcon : walletIcon} alt="" />
          <span className='text-white text-xs'>{t('header.wallet')}</span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="">
          <div className="bg-[#F5F5F5] dark:bg-[#343432]">{t('header.ADDRESS')}</div>
          <div className=""></div>
        </div>
        {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
