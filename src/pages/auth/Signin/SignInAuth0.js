import React from 'react';
import {Button} from 'antd';

import IntlMessages from '../../../@crema/utility/IntlMessages';

const SignInAuth0 = () => {
  return (
    <div className='sign'>
      <div className='sign-content'>
        <Button
          type='primary'
          className='sign-btn sign-btn-full'
          onClick={() => {}}>
          <IntlMessages id='auth.loginWithAuth0' />
        </Button>
      </div>
    </div>
  );
};

export default SignInAuth0;
