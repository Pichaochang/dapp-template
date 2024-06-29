
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default observer(function DialogCloseButton(props:any) {
  const {open, setOpen} = props;
  const [loading, setLoading] = React.useState(false);
  
  const { t } = useTranslation();
  const {globalStore} = useStores();
  const handleOpenChange = (bol:boolean) => {
    setOpen(bol);
  };
  const hanldeClick = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  useEffect(() => {
    setOpen(true);
  }, []);
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
              defaultValue={globalStore.userInfo.code}
              readOnly
              className='border-none'
            />
          </div>
        </div>
        <DialogFooter className="flex">
          <LoadingButton type="button" variant="my" loading={loading} onClick={hanldeClick}>
            {t('global.confrim')}
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
