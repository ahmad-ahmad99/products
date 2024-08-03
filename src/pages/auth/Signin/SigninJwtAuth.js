import React from 'react';
import {useIntl} from 'react-intl';
import {Button, Form, Input} from 'antd';

import IntlMessages from '../../../@crema/utility/IntlMessages';
import {useJWTAuthActions} from '@crema/services/auth/jwt-auth/JWTAuthProvider';

const SignInJwtAuth = () => {
  const {signInUser} = useJWTAuthActions();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const {messages} = useIntl();

  return (
    <div className='sign'>
      <div className='sign-content'>
        <Form
          className='sign-form'
          name='basic'
          layout='vertical'
          initialValues={{
            email: 'crema.demo@gmail.com',
            password: 'Pass@1!@all',
          }}
          onFinish={signInUser}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            name='username'
            className='form-field'
            label={messages['common.username']}
            rules={[{required: true, message: 'Please input your username!'}]}>
            <Input placeholder={messages['common.username']} />
          </Form.Item>

          <Form.Item
            name='password'
            className='form-field'
            label={messages['common.password']}
            rules={[{required: true, message: 'Please input your Password!'}]}>
            <Input.Password placeholder={messages['common.password']} />
          </Form.Item>

          <div className='form-btn-field'>
            <Button type='primary' htmlType='submit' className='sign-btn'>
              <IntlMessages id='common.login' />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInJwtAuth;
