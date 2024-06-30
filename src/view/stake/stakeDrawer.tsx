import * as React from 'react';
// import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
// import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';

import { LoadingButton } from '@/components/ui/loadingButton';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useState } from 'react';
export default function BondDrawaer() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  return (
    // onOpenChange={setOpen}
    <Drawer open={open} onOpenChange={(val) => {
      if (btnLoading) {
        return;
      }
      setOpen(val);
    }}>
      <DrawerTrigger asChild>
        <LoadingButton size='my' variant="my" onClick={() => {
          setOpen(true);
        }} className=' shrink-0'>{t('stake.STAKE')}</LoadingButton>     
      </DrawerTrigger>
      <DrawerContent className="dark:border-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
          </DrawerHeader>
          
          <div>
            <div className=' text-center'>
              <div>Burn 315.15USDB for staking</div>
            </div>
          </div>

          <DrawerFooter className="mb-5">
            <div className="flex items-center justify-center">
              <LoadingButton loading={btnLoading} className='w-full rounded-2xl' size='lg' variant="my" onClick={() => {
                if (btnLoading) return;
                setBtnLoading(true);
                setTimeout(() => {
                  setBtnLoading(false);
                }, 3000);
              }}>{t('global.confirm')}</LoadingButton>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
