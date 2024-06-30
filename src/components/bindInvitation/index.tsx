
'use client';
import { useEffect } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/store';
import { LoadingButton } from '@/components/ui/loadingButton';

import {
  Dialog,
  // DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import { registerUser } from '@/utils/commonSdk';
import toast from 'react-hot-toast';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default observer(function DialogCloseButton(props:any) {
  const {open, setOpen} = props;
  const [loading, setLoading] = React.useState(false);
  
  const { t } = useTranslation();
  const {globalStore} = useStores();
  const handleOpenChange = (bol:boolean) => {
    if (loading) {
      return;
    } else {
      setOpen(bol);
    }
  };
  const hanldeClick = async () => {
    try {
      setLoading(true);
      const traction =  await registerUser(props.recAddress).catch(() => {
        setLoading(false);
      });
      if (traction?.trac) {
        setOpen(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.message || String(error));
    }
  };
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {/* <DialogTrigger asChild>
        <LoadingButton variant="my">Share</LoadingButton>
      </DialogTrigger> */}
      <DialogContent className=" max-w-72 rounded-lg dark:bg-[#343432]">
        <DialogTitle className='text-center'>
          <DialogDescription>
            {t('bind.title')}
          </DialogDescription>
        </DialogTitle>
        <DialogHeader>
        </DialogHeader>
        <div className=" ">
          <div className="">
            <DialogDescription className='my-2 dark:text-white'>
              {t('bind.wallet')}
            </DialogDescription>
            <Input
              defaultValue={globalStore.address}
              readOnly
              className='border-none'
            />
          </div>
          <div className="">
            <DialogDescription className='my-2  dark:text-white'>
              {t('bind.code')}
            </DialogDescription>
            <Input
              defaultValue={props.recAddress}
              readOnly
              className='border-none'
            />
          </div>
        </div>
        <DialogFooter className="flex">
          <LoadingButton type="button" variant="my" loading={loading} onClick={hanldeClick}>
            {t('global.confirm')}
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
