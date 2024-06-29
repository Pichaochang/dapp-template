import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/store';
import { useTranslation } from 'react-i18next';
import ProfitDialog from './profitDialog';
import Claim from './claim';


const ClaimProfit = () => {
  const { t } = useTranslation();
  const [list, setList] = useState([{}, {}]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { globalStore } = useStores();

  return (
    <div>
      {/* <ProfitDialog /> */}
      <div className='text-[#AF27DF] text-md'>{t('stake.StakeList')}</div>

      <div className=''>
        <div className=''>
          
          {
            list.length ? 
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              list.map((item:any, index) => {
                return(<div key={index} className='flex items-center bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
                  <div className="text-xs w-full grid grid-cols-3 ">
                    <div className='p-1 flex justify-center items-center border-b-[1px] border-[#E0E0E0] dark:border-[#2d2d2b]'>
                      <div className='mb-1 text-center text-xs text-[#ababab] dark:text-[#fff]'>
                        {index + 1}
                      </div>
                    </div>
                    <div className='p-1 flex justify-center items-center flex-col border-b-[1px] border-r-[1px] border-l-[1px] border-[#E0E0E0] dark:border-[#2d2d2b]'>
                      <div className='mb-1 text-center text-xs text-[#ababab] dark:text-[#939393]'>{t('claim.TheRemainin')}</div>
                      <div className='text-center'>157 PEX</div>
                    </div>
                    <div className='p-1 flex justify-center items-center flex-col border-b-[1px] border-[#E0E0E0] dark:border-[#2d2d2b]'>
                      <div className='mb-1 text-center text-xs text-[#ababab] dark:text-[#939393]'>{t('claim.QuantityReceived')}</div>
                      <div className='text-center'>358 PEX</div>
                    </div>
                    <div className='p-1 flex justify-center items-center flex-col'>
                      <div className='mb-1 text-center text-xs text-[#ababab] dark:text-[#939393]'>{t('claim.DurationOfRelea')}</div>
                      <div className='text-center'>1026 PEX</div>
                      <ProfitDialog />
                    </div>
                    <div className='p-1 flex justify-center items-center flex-col border-r-[1px] border-l-[1px] border-[#E0E0E0] dark:border-[#2d2d2b]'>
                      <div className='mb-1 text-center text-xs text-[#ababab] dark:text-[#939393]'>{t('claim.TotalAmountUnrelaased')}</div>
                      <div className='text-center'>1026 PEX</div>
                    </div>
                    <div className='p-1 flex justify-center items-center flex-col'>
                      <div className='mb-1 text-center text-xs text-[#ababab] dark:text-[#939393]'>{t('claim.TheNumberOfAvaiiable')}</div>
                      <div className='text-center'>1026 PEX</div>
                      <Claim />
                    </div>
                  </div>
                  <div>
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

export default observer(ClaimProfit);
