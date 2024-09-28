'use client';
import React, { useState } from 'react';
import { logo, sun } from '../assets';
import { useRouter } from 'next/compat/router';
import Link from 'next/link';
import { navlinks } from '../constants';
import CreateComp from '../assets/create-campaign.svg'

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }: any) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl.src} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl.src} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Sidebar = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link href="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link : any) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              imageUrl={link.imageUrl}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  router?.push(link.link);
                }
              }}
            />
          ))}
        </div>

        <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
      </div>
    </div>
  )
}

export default Sidebar