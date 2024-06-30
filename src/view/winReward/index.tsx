import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/store';
import { useTranslation } from 'react-i18next';
import Redeem from './Redeem';
import Claim from './claim';
import { Input } from '@/components/ui/input';


const WinReward = () => {
  const { t } = useTranslation();
  const [list, setList] = useState([{}, {}]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { globalStore } = useStores();
  const [val, setVal] = useState('');
  return (
    
    <div>
      <div className='flex justify-between items-center bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
        <span>WIN:</span>
        <span>1230</span>
      </div>
      <div className='flex flex-col items-center bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
        <div className='my-2  w-full flex justify-between items-center'>
          <div className='text-[#AF26DD]'>314.2WIN</div>
          <div className=''>314.2PEX</div>
          <Claim />
        </div>
        {
          list.map((item, index) => {
            return (
              <div className='my-1 flex w-full items-center justify-between' key={index}>
                <div className='text-xs dark:text-[#727272]'>
                  +134.WIN
                </div>
                <div className='text-xs text-[#ababab] dark:text-[#fff]'>
                  20:35:56 08-24 2024
                </div>
              </div>
            );
          })
        }
      </div>

      <div className='bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
        <div className='flex'>
          <Input type='number' value={val}  onChange={ (e) => {
            console.log('val', e.target.value, typeof e.target.value);
            setVal(e.target.value);
          }
          } className='mr-2 dark:border-none dark:bg-[#fff] dark:text-[#000]'></Input>
          <Redeem />

        </div>
        <div className='flex justify-between items-center mt-3'>
          <span>{t('dashBoard.winPrice')}</span>
          <span>$1230</span>
        </div>
        <div className='flex justify-between items-center mt-3'>
          <span>{t('dashBoard.winVAULT')}</span>
          <span>$1230</span>
        </div>
      </div>

      
    </div>
  );
};

export default observer(WinReward);
