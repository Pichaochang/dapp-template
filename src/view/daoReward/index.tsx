import React from 'react';
import {observer} from 'mobx-react-lite';

const About = () => {
  // const {globalStore} = useStores();
  // const {count, name} = globalStore;
  return (
    <div className='about-root'>
      <p>daoReward</p>
    </div>
  );
};

export default observer(About);
