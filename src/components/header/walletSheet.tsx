import * as React from 'react';
import { useTranslation } from 'react-i18next';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from "@/components/ui/label"
import { globalVaild } from '@/utils/commonSdk';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import copyIcon from '@/assets/common/light/copy.png';
import darkCopyIcon from '@/assets/common/dark/copy.png';
import walletListIcon from '@/assets/common/light/walletList.png';
import darkWalletListIcon from '@/assets/common/dark/walletList.png';
import shareIcon from '@/assets/common/light/share.png';
import darkShareIcon from '@/assets/common/dark/share.png';
import favicon from '@/assets/common//favicon.png';

import copy from 'copy-to-clipboard';

import toast from 'react-hot-toast';
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
  const openWallet =  async () => {
    await globalVaild();
    setOpen(true);
  };
  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <div onClick={() => openWallet} className='flex items-center mr-4 py-1 px-2 rounded-3xl' style={{ background: 'linear-gradient(90deg, #AA3EFF 0%, #B40DB9 100%)' }}>
          <img onClick={() => setOpen(true)} className='h-4 w-4 mr-2' src={theme === 'dark' ? darkWalletIcon : walletIcon} alt="" />
          <span className='text-white text-xs'>{t('header.wallet')}</span>
        </div>
      </SheetTrigger>
      <SheetContent className='p-3 dark:bg-[#1d1d1b]'>
        <div className="mt-3">
          <div>{t('header.ADDRESS')}</div>
          <div className="bg-[#F5F5F5] dark:bg-[#343432] rounded-md mt-2 p-2">
            <div className='flex items-center justify-between text-xs  text-[#ababab] dark:text-[#2a2a28]'>
              <span className='dark:text-[#585857]'>钱包地址</span>
              <img onClick={() => {
                copy('2121');
                toast.success(t('global.copySuccess'));
              }} className='h-4 w-4 mr-2' src={theme === 'dark' ? darkCopyIcon : copyIcon} alt="" />
            </div>
          </div>

          <div className="bg-[#F5F5F5] dark:bg-[#343432] rounded-md mt-2 p-2">
            <div className='flex items-center justify-between text-xs  text-[#ababab] dark:text-[#2a2a28]'>
              <span className='dark:text-[#585857]'>{t('header.INVITATION')}</span>
              <img onClick={() => {
                copy('2121');
                toast.success(t('global.copySuccess'));
              }} className='h-4 w-4 mr-2' src={theme === 'dark' ? darkCopyIcon : copyIcon} alt="" />
            </div>
          </div>
          <div className='mt-3 dark:text-[#585857]'>{t('header.Assets')}</div>

          {/* 五个代币地址 */}
          <div className="bg-[#F5F5F5] dark:bg-[#343432] rounded-md mt-2 p-2">
            <div className='flex items-center justify-between text-xs  text-[#ababab] dark:text-[#2a2a28]'>
              <div className='flex items-center justify-between'>
                <div className='mr-4'>
                  <img className='h-6 w-6' src={favicon} alt="" />
                </div>
                <div className='text-[#212121]'>
                  <div className='dark:text-white'>PEX</div>
                  <div className='text-[#ababab] dark:text-[#585857]'>33G</div>
                  <div className='text-[#ababab] dark:text-[#585857]'>$17.654</div>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <img className='h-4 w-4 mr-2' src={theme === 'dark' ? darkWalletListIcon : walletListIcon} alt="" />
                <img className='h-4 w-4 mr-2' src={theme === 'dark' ? darkShareIcon : shareIcon} alt="" />
              </div>
            </div>
          </div>

					


          <div className='mt-3'>{t('header.Inviter')}</div>
          <div className="bg-[#F5F5F5] dark:bg-[#343432] rounded-md mt-2 p-2">
            <div className='flex items-center justify-between text-xs  text-[#ababab] dark:text-[#2a2a28]'>
              <span className='dark:text-[#585857]'>领导者地址</span>
            </div>
          </div>
        </div>


        {/* <div className="">
          <div className="bg-[#F5F5F5] dark:bg-[#343432] rounded-md">{t('header.Assets')}</div>
          <div className=""></div>
        </div> */}
        {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
