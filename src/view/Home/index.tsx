import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {observer} from 'mobx-react-lite';
import './index.less';

function Home() {
  const {t} = useTranslation();

  return (
    <div className='home-root'>
      <Outlet />
    </div>
  );
}

export default observer(Home);
