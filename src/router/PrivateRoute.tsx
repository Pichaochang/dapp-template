import React, {ReactElement, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useStores} from '@/store';

interface Props {
  children: ReactElement;
}
const PrivateRoute = ({children}: Props) => {
  const navigator = useNavigate();
  const {globalStore} = useStores();
  const {signtrue} = globalStore;
  // useEffect(() => {
  //   console.log('signtrue', signtrue);
  //   try {
  //     if (!signtrue) {
  //       navigator(`/`);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     navigator(`/`);
  //   }
  // }, [signtrue]);
  return <>{children}</>;
};

export default PrivateRoute;
