'use client';
import React, { useState } from 'react';
import { logo, logout } from '../../../assets';
import Link from 'next/link';
import { navlinks } from '../../../lib/constants';


    const Icon = ({ styles, path, name, imgUrl, isActive, disabled, handleClick }: any) => (
    <Link href={path || '/'} className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#1B2030]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
        {!isActive ? (
        <img src={imgUrl?.src || ''}  alt="fund_logo" className="w-1/2 h-1/2" />
        ) : (
        <img src={imgUrl?.src || ''} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
        )}
    </Link>
    )


const Sidebar = () => {
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[100vh]">
        <Icon styles="w-[76px] h-[76px] bg-[#1B2030] rounded-custom" imgUrl={logo} />
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1B2030] rounded-custom w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link : any) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              path={link.link}
              imageUrl={link.imageUrl}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  console.log(link.link);
                }
              }}
            />
          ))}
        </div>
        {/* <LogoutIcon isActive={isActive} setIsActive={setIsActive} /> */}
      </div>
    </div>
  )
}

export default Sidebar
