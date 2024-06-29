import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
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
import { LoadingButton } from '@/components/ui/loadingButton';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

export default function ProfitDialog(props) {
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
        <div className='flex'>
          <Input className='mr-2 dark:border-none dark:bg-[#fff] dark:text-[#000]'></Input>
          <LoadingButton size='my' variant="my" onClick={() => {
            setOpen(true);
          }} className=' shrink-0'>{t('Redeem.Redeem')}</LoadingButton>
        </div>
        {/* <LoadingButton size='my' variant="my" onClick={() => {
          setOpen(true);
        }} className='mt-2 shrink-0 text-xs'>{t('claim.ACCELERATE')}</LoadingButton> */}
      </DialogTrigger>
      <DialogContent className="max-w-80 dark:border-none rounded-lg bg-[#fff] dark:bg-[#1d1d1b]">
        <DialogHeader>
          <DialogTitle className='mt-6'>
            {/* <div className='flex justify-between items-center'>
              <span>{t('claim.yourBalcance')}:</span>
              <span>300 WIN</span>
            </div> */}
          </DialogTitle>
          <DialogDescription>
            {/* Anyone who has this link will be able to view this. */}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
        Redeem 1319USDB with 100WIN
          {/* <div className="w-1/2">
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger className="">
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="180">180{t('global.days')}</SelectItem>
                  <SelectItem value="150">150{t('global.days')}</SelectItem>
                  <SelectItem value="120">120{t('global.days')}</SelectItem>
                  <SelectItem value="90">90{t('global.days')}</SelectItem>
                  <SelectItem value="60">60{t('global.days')}</SelectItem>
                  <SelectItem value="45">45{t('global.days')}</SelectItem>
                  <SelectItem value="30">30{t('global.days')}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/2 text-right">
            0 WIN
          </div> */}
        </div>
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
