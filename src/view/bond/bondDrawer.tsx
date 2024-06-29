/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
// import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
// import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@/components/ui/skeleton';

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
import { Input } from '@/components/ui/input';
export default function BondDrawaer(props:any) {
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
        <LoadingButton className='w-full rounded-2xl'size='lg' variant="my" onClick={() => {
        }}>{t('bond.BondPix')} {props.title}</LoadingButton>
      </DrawerTrigger>
      <DrawerContent className="dark:border-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{props.title}</DrawerTitle>
            {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
          </DrawerHeader>
        

          <div>
            <div className='p-4'>
              <Input className='mr-2 dark:border-none dark:bg-[#fff] dark:text-[#000]'></Input>
            </div>
          </div>

          <DrawerFooter className="mb-5">
            <div className="flex items-center justify-center">
              <LoadingButton loading={btnLoading}className='w-full rounded-2xl' size='lg' variant="my" onClick={() => {
                setBtnLoading(true);
                setTimeout(() => {
                  setBtnLoading(false);
                  // setOpen(false)
                }, 3000);
              }}>{t('global.confirm')}</LoadingButton>
              {/* <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose> */}
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
