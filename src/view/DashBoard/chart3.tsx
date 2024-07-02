import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Total',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-area-chart-4y9cnl';
  
  render() {
    return (
      <div className='bg-[#EEEEEE]  rounded-sm mt-2'>
        <div className='text-xs'>4000</div>
        
        <div className='h-40 w-full'>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              {/* label={renderCustomAxisTick} */}
              {/* <XAxis style={{fontSize: '10px'}} dataKey="name"  tickLine={false}/> */}
              {/* <YAxis style={{fontSize: '7px'}} width={40} tickLine={false}/> */}


              {/* <YAxis style={{fontSize: '10px'}}  tickLine={false}/> */}
              {/* <Tooltip /> */}
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className='text-xs text-right'>total</div>
      </div>
    );
  }
}
