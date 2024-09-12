import React from 'react';
import logo from '../assets/images/logo.png';
import callIcon from '../assets/images/call.png';
const TopNav = (): React.ReactElement => {
  return (
    <div className='top_nav_container'>
      <div className='top_nav'>
        <img className='logo_icon' src={logo} />
        <div className='call_icon_border'>
          <img className='call_icon' src={callIcon} />
        </div>
      </div>
    </div>
  );
};

export default TopNav;