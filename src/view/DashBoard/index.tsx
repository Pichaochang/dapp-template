import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/store';
import { useTranslation } from 'react-i18next';
// import ChartComponent from './chart'
import ChartComponent1 from './chart1';
import ChartComponent2 from './chart2';
import ChartComponent3 from './chart3';
import ChartComponent4 from './chart4';


const DashBoard = () => {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { globalStore } = useStores();
  // const {count, name} = globaxlStore;
  return (
    <div>
      <div className='bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2'>

        <div className='mb-3'>
          <div className='text-[#AF27DF] text-md'>{t('dashBoard.MarketCap')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>$ 888,888.8888</div>
        </div>

        <div className='mb-3'>
          <div className='text-[#AF27DF] text-md'>{t('dashBoard.PEXPrice')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>$ 888,888.8888</div>
        </div>

        <div className='mb-3'>
          <div className='text-[#AF27DF] text-md'>{t('dashBoard.BackingPerPEx')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>$ 888,888.8888</div>
        </div>

        <div className='mb-3'>
          <div className='text-[#AF27DF] text-md'>{t('dashBoard.TotalMintin')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>$ 888,888.8888</div>
        </div>

        <div className='mb-3'>
          <div className='text-[#AF27DF] text-md'>{t('dashBoard.winPrice')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>$ 888,888.8888</div>
        </div>

      </div>

      <div className='bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
        <div className=''>
          <div className='text-[#AF27DF] text-md'>{t('dashBoard.title1')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>
            <span>$ 888,888.8888</span>
            <span></span>
          </div>
          <div className='bg-[#EEEEEE] h-40 w-full rounded-sm mt-2'>
            {/* <ChartComponent></ChartComponent> */}
          </div>
          
        </div>
      </div>

      <div className='bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
        <div className=''>
          <div className='text-[#AF27DF] text-md'>{t('dashBoard.title1')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>
            <span>$ 888,888.8888</span>
            <span></span>
          </div>
          <div className='bg-[#EEEEEE] h-40 w-full rounded-sm mt-2'>
            <ChartComponent1></ChartComponent1>
          </div>
        </div>
      </div>

      <div className='bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
        <div className=''>
          <div className='text-[#AF27DF] text-md'>{t('dashBoard.title2')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>
            <span>$ 888,888.8888</span>
            <span></span>
          </div>
          <div className='bg-[#EEEEEE] h-40 w-full rounded-sm mt-2'>
            <ChartComponent2></ChartComponent2>
          </div>
        </div>
      </div>


      <div className='bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
        <div className=''>
          <div className='text-[#AF27DF] text-md'>{t('dashBoard.title3')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>
            <span>$ 888,888.8888</span>
            <span></span>
          </div>
          <div className='bg-[#EEEEEE] h-40 w-full rounded-sm mt-2'>
            <ChartComponent3></ChartComponent3>
          </div>
        </div>
      </div>


      <div className='bg-[#fff] dark:bg-[#1d1d1b] rounded-lg p-2 mt-3'>
        <div className=''>
          <div className='text-[#AF27DF] text-md'>{t('dashBoard.title4')}</div>
          <div className='text-xs text-[#ababab] dark:text-[#2a2a28]'>
            <span>$ 888,888.8888</span>
            <span></span>
          </div>
          <div className='bg-[#EEEEEE] h-40 w-full rounded-sm mt-2'>
            <ChartComponent4></ChartComponent4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(DashBoard);
