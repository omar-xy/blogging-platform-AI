'use client';

import React from 'react';
import { TagIcon, HeartIcon, ClockIcon } from '@heroicons/react/solid';
import Wo from '../assets/Wo.svg'; // Ensure this path is correct
import text from '../assets/text.svg'; // Ensure this path is correct

const FundCard = ({ owner, title, description, handleClick, timePosted, likes } : any) => {
  // Truncate the description if it's too long
  const shortDescription = description.length > 100 ? description.substring(0, 100) : description;

  const moreClickHandle = () => {
    return ;
  }


  return (
    <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1B2030] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleClick}>
      <div className="h-full flex flex-col p-4 justify-between">
        {/* Category Tag */}
        <div className="flex items-center mb-[18px]">
          <div className="bg-green-500 text-white text-[12px] font-medium px-3 py-1 rounded-full flex items-center">
            <TagIcon className="w-4 h-4 mr-1" /> {/* Tag Icon */}
            TECH
          </div>
        </div>

        {/* Card Title */}
        <h3 className="text-white text-[18px] font-semibold leading-[26px] truncate">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-[5px] text-[#808191] text-[14px] leading-[18px]">
          {shortDescription}
          {(description.length > 100) ? <a onClick={moreClickHandle} className='text-white font-semibold'>...more</a> : <></>}
        </p>
        <div className='flex flex-row w-full justify-end'>
          <div className="flex items-center text-[#808191] text-[12px] py-4 px-2">
            <ClockIcon className="size-[20px] mr-1" /> {/* Clock Icon */}
            {timePosted} {/* Time since posted, e.g., "2h ago" */}
          </div>

          {/* Like Section */}
          <div className="flex items-center text-[#808191] text-[12px] py-4 px-2">
            <HeartIcon className="size-[20px] mr-1" /> {/* Heart Icon */}
            {likes} {/* Like count */}
          </div>
        </div>
        {/* Footer: User Info, Time, and Like Count */}
        <div className="flex items-center justify-between mt-[20px]">
          {/* User Info */}
          <div className="flex items-center">
              <img src={Wo.src} alt="user" className="w-[30px] h-[30px] rounded-full" />
            <p className="ml-2 text-[#808191] text-[12px] truncate">
              by <span className="text-[#b2b3bd]">{owner}</span>
            </p>
          </div>

          {/* Time Posted */}
        </div>
      </div>
    </div>
  );
}

export default FundCard;


