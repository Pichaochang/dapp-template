import * as React from 'react';

import { observer } from 'mobx-react-lite';
import { useStores } from '@/store';
import { LoadingButton } from '@/components/ui/loadingButton';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';

export default observer(function DialogCloseButton() {
  const { t } = useTranslation();
  const {globalStore} = useStores();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <LoadingButton variant="my">Share</LoadingButton>
      </DialogTrigger>
      <DialogContent className=" max-w-72 rounded-lg">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            {t('bind.title')}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center ">
          <div className="flex">
            <div>
              {t('bind.wallet')}
            </div>
            <Input
              id="link"
              defaultValue={globalStore.userInfo.address}
              readOnly
            />
          </div>
          <div className="">
            <div>
              {t('bind.code')}
            </div>
            <Input
              id="link"
              defaultValue={globalStore.userInfo.code}
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <LoadingButton type="button" variant="my">
              {t('global.sumbit')}
            </LoadingButton>
            <LoadingButton type="button" variant="my">
              {t('global.close')}
            </LoadingButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
