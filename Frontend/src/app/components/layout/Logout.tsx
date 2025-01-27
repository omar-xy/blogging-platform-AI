import React from 'react';
import { logout } from '../../../assets';
import Icon from './Sidebar'; // Adjust the import path as needed

const LogoutIcon = ({ isActive, setIsActive } : any) => {
  return (
    <Icon
      styles="bg-[#1B2030] shadow-secondary mt-4"
      imgUrl={logout}
      isActive={isActive}
      path="/logout"
      handleClick={() => {
        setIsActive('Logout');
        console.log('/logout');
      }}
    />
  );
};

export default LogoutIcon;
