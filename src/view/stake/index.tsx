import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/store';
import { useTranslation } from 'react-i18next';
import StakeDrawer from './stakeDrawer';
import UnStakeDrawer from './unStakeDrawer';
import { LoadingButton } from '@/components/ui/loadingButton';

const Stake = () => {
  const { t } = useTranslation();
  const [list, setList] = useState([{}, {}]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { globalStore } = useStores();

  return (
    <div>
      <div className='bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2'>

        <div className='mb-3'>
          <div className='text-[#AF27DF] text-md'>{t('stake.SingleStake')}</div>
        </div>

        <div className='mb-3'>
          <div className=' text-md'>{t('stake.APY')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#939393]'>791.5%</div>
        </div>

        <div className='mb-3'>
          <div className=' text-md'>{t('stake.TotalDeposited')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#939393]'>$ 888,888.8888</div>
        </div>

        <div className='mb-3'>
          <div className=' text-md'>{t('stake.CurrentIndex')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#939393]'>$ 888,888.8888</div>
        </div>

        <div className='mt-6 mb-3 text-center'>
          <div className='text-xs text-[#ababab]'>{t('stake.title')}</div>
          <div className='text-xs text-[#ababab]'>{t('stake.title2')}</div>
        </div>

        <div className='text-center'>
          <StakeDrawer />
        </div>
        

      </div>
      <div className='text-[#AF27DF] text-md'>{t('stake.StakeList')}</div>

      <div className=''>
        <div className=''>
          
          {
            list.length ? 
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              list.map((item:any, index) => {
                return(<div key={index} className='flex items-center bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
                  <div className="text-xs w-full grid grid-cols-2 ">
                    <div className='p-1'>
                      <div className='mb-1 text-center text-xs text-[#ababab] dark:text-[#939393]'>{t('stake.StakeTime')}</div>
                      <div className='text-center'>20:35:56 08-24 2024</div>
                    </div>
                    <div className='p-1'>
                      <div className='mb-1 text-center text-xs text-[#ababab] dark:text-[#939393]'>{t('stake.totalRewardOfStake')}</div>
                      <div className='text-center'>157 PEX</div>
                    </div>
                    <div className='p-1'>
                      <div className='mb-1 text-center text-xs text-[#ababab] dark:text-[#939393]'>{t('stake.StakePrncipal')}</div>
                      <div className='text-center'>358 PEX</div>
                    </div>
                    <div className='p-1'>
                      <div className='mb-1 text-center text-xs text-[#ababab] dark:text-[#939393]'>{t('stake.NextRebaseReward')}</div>
                      <div className='text-center'>1026 PEX</div>
                    </div>
                  </div>
                  <div>
                    <UnStakeDrawer></UnStakeDrawer>
                  </div>
                </div>);
              }):  
              <div className=' text-center text-xs text-[#ababab] dark:text-[#939393]'>
                <span>{t('stake.noStake')}</span>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default observer(Stake);
