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

export default function ProfitDialog() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

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
        }} className=' shrink-0'>{t('claim.ACCELERATE')}</LoadingButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <div className='flex justify-between items-center'>
              <span>{t('global.yourBalcance')}:</span>
              <span>300 WIN</span>
            </div>
          </DialogTitle>
          <DialogDescription>
            {/* Anyone who has this link will be able to view this. */}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="w1/2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
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
          <div className="w1/2 text-right">
            0 WIN
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
