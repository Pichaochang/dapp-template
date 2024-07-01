import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { LoadingButton } from '@/components/ui/loadingButton';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Claim(props:any) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [value, setValue] = useState('');
  React.useEffect(() => {
    setValue('180');
  }, []);
  return (
    <Dialog open={open} onOpenChange={(val) => {
      if (btnLoading) {
        return;
      }
      setOpen(val);
    }}>
      <DialogTrigger asChild>
        <LoadingButton size='my' variant="my" onClick={() => {
          setOpen(true);
        }} className=' shrink-0 text-xs'>{t('claim.claim')}</LoadingButton>
      </DialogTrigger>
      <DialogContent className="max-w-80 dark:border-none rounded-lg bg-[#fff] dark:bg-[#1d1d1b]">
        <DialogHeader>
          <DialogTitle className='mt-6'>
            <div className='flex justify-between items-center'>
              {/* <span>{t('claim.yourBalcance')}:</span>
              <span>300 WIN</span> */}
              {t('global.confirm')}
            </div>
          </DialogTitle>
          <DialogDescription>
            {/* Anyone who has this link will be able to view this. */}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <LoadingButton loading={btnLoading} className='w-full rounded-2xl' size='lg' variant="my" onClick={async() => {
            if (btnLoading) return;
            setBtnLoading(true);
            setTimeout(() => {
              setBtnLoading(false);
            }, 3000);
          }}>{t('global.confirm')}</LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
