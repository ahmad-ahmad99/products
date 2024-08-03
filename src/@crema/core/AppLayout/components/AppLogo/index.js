import React from 'react';
import './index.style.less';
import PropTypes from 'prop-types';
import {useSidebarContext} from '../../../../utility/AppContextProvider/SidebarContextProvider';

const AppLogo = ({hasSidebarColor}) => {
  const {sidebarColorSet} = useSidebarContext();
  return (
    <div className='app-logo'>
      {hasSidebarColor && sidebarColorSet.mode === 'dark' ? (
        <img
          src='/assets/images/store.png'
          alt='crema-logo'
          style={{height: '100px'}}
        />
      ) : (
        <img
          src='/assets/images/store.png'
          alt='crema-logo'
          style={{height: '100px'}}
        />
      )}
    </div>
  );
};

export default AppLogo;

AppLogo.propTypes = {
  hasSidebarColor: PropTypes.bool,
};
