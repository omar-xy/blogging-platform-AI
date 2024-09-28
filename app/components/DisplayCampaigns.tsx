'use client';

import React from 'react';
import FundCard from './FundCard';
import { loader } from '../assets';
import { useRouter } from 'next/compat/router';

const DisplayCampaigns = ({ title, isLoading, campaigns } : any) => {
  const router = useRouter();
  const handleNavigate = (campaign : any) => {
    router?.push(`/campaign-details/${campaign.title}`)
  }
  
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({campaigns.length})</h1>

      <div className={`${isLoading ? 'flex items-center justify-center' : 'flex flex-wrap'} mt-[20px] gap-[26px]`}>
        {isLoading && (
          <img src={loader.src} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            {'You have not created any campigns yet'}
          </p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.map((campaign: any) => <FundCard 
          key={campaign.pId}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />)}
      </div>
    </div>
  )
}

export default DisplayCampaigns