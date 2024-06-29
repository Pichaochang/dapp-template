import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/store';
import { useTranslation } from 'react-i18next';
// import { Button } from '@/components/ui/button';
import BondDrawaer from './bondDrawer';
import { LoadingButton } from '@/components/ui/loadingButton';
import THS  from '@/assets/common/THS.png';
import USDT from  '@/assets/common/USDT.png';
import WIN  from '@/assets/common/WIN.png';


const Bond = () => {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { globalStore } = useStores();
  // const {count, name} = globaxlStore;
  return (
    <div>
      <div className='bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2'>

        <div className='mb-3'>
          <div className='text-[#AF27DF] dark:text-[#fff] text-md'>{t('bond.Bond')}</div>
        </div>

        <div className='flex items-center justify-between py-4'>
          <div className='flex justify-center flex-col items-center mb-3 w-1/2'>
            <div className='text-md mb-2'>$2640.954</div>
            <div className='text-xs text-[#ababab] dark:text-[#7d7d7c]'>{t('bond.THSPrice')}</div>
          </div>
          <div className='flex justify-center flex-col items-center mb-3 w-1/2'>
            <div className='text-md mb-2'>$2640.954</div>
            <div className='text-xs text-[#ababab] dark:text-[#7d7d7c]'>{t('bond.TOTALPRICE')}</div>
          </div>
        </div>
      </div>

      {/* bond */}
      <div  className='text-xs flex flex-col  bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
        <div className='flex items-center my-1'>
          <div className='flex items-center'>
            <img className='h-5 w-5' src={THS} alt="" />
            <img className='h-5 w-5' src={USDT} alt="" />
          </div>
          <div className='ml-2'>
            THS-USDT LP
          </div>
        </div>
        <div className='flex items-center justify-between my-1'>
          <span>{t('bond.PRICE')}</span>
          <span>$18.59</span>
        </div>
        <div className='flex items-center justify-between my-1'>
          <span>{t('bond.APY')}</span>
          <span>22%</span>
        </div>
        <div className='flex items-center justify-between my-1'>
          <span>{t('bond.PurchaseQuantity')}</span>
          <span>18.59</span>
        </div>
        <div className='w-full text-center mt-1'>
          <BondDrawaer title="THS-USDT LP"></BondDrawaer>
        </div>
      </div>
    </div>
  );
};

export default observer(Bond);
