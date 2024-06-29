import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/store';
import { useTranslation } from 'react-i18next';
import Claim from './claim';


const IDO = () => {
  const { t } = useTranslation();
  const [list, setList] = useState([{}, {}]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { globalStore } = useStores();

  return (
    
    <div>
      <div className='flex justify-between items-center bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
        <span>PEX:</span>
        <span>1230</span>
      </div>
      <div >
        <div  className='flex flex-col items-center bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
          <div className='my-2  w-full flex justify-between items-center'>
            {/* <div className='text-[#AF26DD]'>{t('dao.DAOReward')}</div> */}
            <div className=''>1.{t('ido.index1')}:314.2PEX</div>
            <Claim />
          </div>
          {/* <div className='my-1 flex flex-col w-full items-center ' >
            <div className='my-1 w-full text-xs dark:text-[#727272]'>
              {t('dao.Team1')}:+134.WIN
            </div>

            <div className='my-1 w-full text-xs dark:text-[#727272]'>
              {t('dao.Team2')}:+134.WIN
            </div>

            <div className='my-1 w-full text-xs dark:text-[#727272]'>
              {t('dao.DividendCycle')}:+134.WIN
            </div>
          </div> */}
        </div>


        <div  className='flex flex-col items-center bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
          <div className='my-2  w-full flex justify-between items-center'>
            {/* <div className='text-[#AF26DD]'>{t('dao.DAOReward')}</div>
            <div className=''>314.2PEX</div> */}
            <div className=''>2.{t('ido.index2')}:314.2PEX</div>
            <Claim />
          </div>
          <div className='my-1 flex flex-col w-full items-center ' >
            <div className='my-1 w-full text-xs dark:text-[#727272]'>
              {t('ido.QuantityReceived')}:134.WIN
            </div>

            <div className='my-1 w-full text-xs dark:text-[#727272]'>
              {t('ido.TotalAmountCanReceive')}:134.WIN
            </div>

            {/* <div className='my-1 w-full text-xs dark:text-[#727272]'>
              {t('dao.DividendCycle')}:+134.WIN
            </div> */}
          </div>
        </div>
        {/* {
          list.map((item, index) => {
            return (
              <div key={index} className='flex flex-col items-center bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
                <div className='my-2  w-full flex justify-between items-center'>
                  <div className='text-[#AF26DD]'>{t('dao.DAOReward')}</div>
                  <div className=''>314.2PEX</div>
                  <Claim />
                </div>
                <div className='my-1 flex flex-col w-full items-center ' >
                  <div className='my-1 w-full text-xs dark:text-[#727272]'>
                    {t('dao.Team1')}:+134.WIN
                  </div>

                  <div className='my-1 w-full text-xs dark:text-[#727272]'>
                    {t('dao.Team2')}:+134.WIN
                  </div>

                  <div className='my-1 w-full text-xs dark:text-[#727272]'>
                    {t('dao.DividendCycle')}:+134.WIN
                  </div>
                </div>
              </div>
              
            );
          })
        } */}
      </div>

      {/* <div className='bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
        <div className='flex justify-between items-center mt-3'>
          <span>{t('dashBoard.winPrice')}</span>
          <span>$1230</span>
        </div>
        <div className='flex justify-between items-center mt-3'>
          <span>{t('dashBoard.winVAULT')}</span>
          <span>$1230</span>
        </div>
      </div> */}

      
    </div>
  );
};

export default observer(IDO);
