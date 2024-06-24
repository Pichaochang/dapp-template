import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/store';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const Stake = () => {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { globalStore } = useStores();
  // const {count, name} = globaxlStore;
  return (
    <div>
      <div className='bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2'>

        <div className='mb-3'>
          <div className='text-[#AF27DF] text-md'>{t('stake.SingleStake')}</div>
        </div>

        <div className='mb-3'>
          <div className=' text-md'>{t('stake.APY')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>$ 888,888.8888</div>
        </div>

        <div className='mb-3'>
          <div className=' text-md'>{t('stake.TotalDeposited')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>$ 888,888.8888</div>
        </div>

        <div className='mb-3'>
          <div className=' text-md'>{t('stake.CurrentIndex')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>$ 888,888.8888</div>
        </div>

        <div className='mt-6 mb-3 text-center'>
          <div className='text-xs text-[#ababab]'>{t('stake.title')}</div>
          <div className='text-xs text-[#ababab]'>{t('stake.title2')}</div>
        </div>

        <div className='text-center'>
          <Button size='my' variant="my">{t('stake.Approve')}</Button>
        </div>
        

      </div>

      <div className='bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
        <div className=''>
          <div className='text-[#AF27DF] text-md'>{t('stake.StakeList')}</div>
          <div className=' text-center text-xs text-[#ababab] dark:text-[#2a2a28]'>
            <span>{t('stake.noStake')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Stake);
