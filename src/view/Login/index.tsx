import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Form, Input, Button} from 'antd-mobile';
import {loginBack} from '@/api';

import {Toast} from 'antd-mobile';
import React from 'react';

export const Login = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // 账号 fudadminxxax   密码 1HJA2IcL1NXOjtK3 fu_bsc_admin
  return (
    <div className='login-table'>
      <div className='login-content'>
        <Form
          layout='horizontal'
          footer={
            <Button
              block
              type='submit'
              style={{
                color: 'linear-gradient(90deg, #6419C2 0%, #9523DD 100%)'
              }}
              size='large'
              onClick={async () => {
                console.log(password, username);
                const res = await loginBack({
                  name: username,
                  password
                }).catch((er) => {
                  Toast.show({content: er});
                });
                if (res && res.code === '200') {
                  // eslint-disable-next-line no-undef
                  localStorage.setItem('listToken', res.data);
                  nav('/list');
                } else {
                  Toast.show({content: res.message});
                }
              }}
            >
              提交
            </Button>
          }
        >
          <Form.Item name='username' label='账号' rules={[{required: true, message: '账号不能为空'}]}>
            <Input
              name='username'
              className='input-xxx'
              value={username}
              defaultValue={username}
              onChange={(val) => {
                setUsername(val);
              }}
            />
          </Form.Item>
          <Form.Item name='password' label='密码' rules={[{required: true, message: '密码不能为空'}]}>
            <Input
              name='password'
              type='password'
              value={password}
              defaultValue={password}
              onChange={(val) => {
                setPassword(val);
              }}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
