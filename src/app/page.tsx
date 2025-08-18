'use client';

import React, { useState } from 'react'
import GroupedBarChart from './components/GroupedBarChart'
import RowOfCarousels from './components/RowOfCarousels'
import OverviewCard from './components/OverviewCard';
import { overviewCards } from './constants';
import MetricsGrid from './components/MetricsGrid';

const Page = () => {


  return (
    <div className='lg:px-20 px-4 '>
      <h1 className='text-xl text-main-black font-semibold py-3'>Welcome, Ahmed</h1>

      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="basis-[70%] py-4 rounded-[16px] bg-white border border-[#D6D6D6]">
          <div className='border-b border-light-gray px-4 pb-4'>
            <div className="flex justify-between md:items-center flex-col md:flex-row max-sm:gap-4">
              <div>
                <h2 className='text-xl text-main-black font-semibold rounded-[8px] border-[#E4E4E4]'>Sales Overview</h2>
                <p className='text-[12px] mt-2 text-mid-gray'>Showing overview Jan 2022 - Sep 2022</p>
              </div>

              <button className='text-[12px] rounded-full border border-[#D6D6D6] px-8 py-3 font-semibold cursor-pointer'>
                View Transactions
              </button>
            </div>
            <div className="flex gap-4 mt-4 md:justify-end justify-between">
              <div className='px-4 py-2 cursor-pointer'>
                <h3 className='text-deep-gray'>1 Week</h3>
              </div>
              <div className='px-4 py-2'>
                <h3 className='text-deep-gray cursor-pointer'>1 Month</h3>
              </div>
              <div className='px-4 py-2 active-duration cursor-pointer'>
                <h3>1 Year</h3>
              </div>
            </div>
          </div>
          <div className='flex px-4 pt-4 gap-8 flex-col md:flex-row '>
            <div className="basis-[45%] relative px-3">
              <img src="/Ellipse 12 (1).png" alt="" className='absolute -right-3 top-1/2 -translate-y-1/2' />
              <GroupedBarChart/>
              <img src="/Ellipse 12.png" alt="" className='absolute -left-3 top-1/2 -translate-y-1/2' />
            </div>
            <div className="basis-[55%]">
             <MetricsGrid />
            </div>
          </div>
          <div>

          </div>
        </div>

        <div className="basis-[30%] flex lg:flex-col md:flex-row flex-col gap-4">
          {overviewCards.map((item) => (
        <OverviewCard
          key={item.title}
          title={item.title}
          icon={item.icon}
          viewAllText={item.viewAllText}
          stats={item.stats}
        />
      ))}

        </div>

      </div>

      <div className='relative pb-15'>
        <RowOfCarousels/>
      <img src="/Footer.png" className='absolute z-10 top-15 right-0 cursor-pointer' alt="" />
      </div>
      

      
    </div>
  )
}

export default Page