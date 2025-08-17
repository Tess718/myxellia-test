'use client';

import React, { useState } from 'react'
import GroupedBarChart from './components/GroupedBarChart'
import RowOfCarousels from './components/RowOfCarousels'

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
             <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="rounded-[12px] p-3 border border-light-gray">
                <h3 className='md:text-[19px] text-md font-semibold text-[#4545FE]'>₦120,000,000.00</h3>
                <div className="flex gap-2 items-center pt-1">
                  <p className='text-[12px] font-medium text-deep-gray'>Total Inflow</p>
                  <div className="flex items-center gap-1"><img src="/Vector 1.png" alt="icon" /><p className='text-[10px] text-[#12B76A]'>2.5%</p></div>
                </div>
              </div>
              <div className="rounded-[12px] p-3 border border-light-gray">
                <h3 className='md:text-[19px] text-md font-semibold text-[#12B76A]'>₦50,000,000.00</h3>
                <div className="flex gap-2 items-center pt-1">
                  <p className='text-[12px] font-medium text-deep-gray'>MRR</p>
                  <div className="flex items-center gap-1"><img src="/Vector 1.png" alt="icon" /><p className='text-[10px] text-[#12B76A]'>2.5%</p></div>
                </div>
              </div>
              <div className="rounded-[12px] p-3 border border-light-gray">
                <h3 className='md:text-[19px] text-md font-semibold text-[#14B8A6]'>₦200,000,000.00</h3>
                <div className="flex gap-2 items-center pt-1">
                  <p className='text-[12px] font-medium text-deep-gray'>Commission Revenue</p>
                  <div className="flex items-center gap-1"><img src="/loss (1).png" alt="icon" /><p className='text-[10px] text-[#14B8A6]'>0.5%</p></div>
                </div>
              </div>
              <div className="rounded-[12px] p-3 border border-light-gray">
                <h3 className='md:text-[19px] text-md font-semibold text-[#F04438]'>₦100,000,000.00</h3>
                <div className="flex gap-2 items-center pt-1">
                  <p className='text-[12px] font-medium text-deep-gray'>GMV</p>
                  <div className="flex items-center gap-1"><img src="/loss (2).png" alt="icon" /><p className='text-[10px] text-[#F04438]'>0.5%</p></div>
                </div>
              </div>
             </div>
            </div>
          </div>
          <div>

          </div>
        </div>

        <div className="basis-[30%] flex lg:flex-col md:flex-row flex-col gap-4">
          <div className='flex flex-col basis-1/2'>
            <div className="flex justify-between items-center rounded-t-[16px] border border-light-gray p-5">
              <div className="flex gap-2 items-center cursor-pointer">
                <img src="/solar_home-linear.png" alt="" />
                <p className='text-[14px] font-medium text-[#292929]'>Listings Overview</p>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
              <p className='text-[#4545FE] text-[14px] font-medium'>View all</p>
              <img src="/arrow.png" alt="" />
              </div>
            </div>
            <div className="p-5 bg-white border border-light-gray border-t-0 flex justify-between rounded-b-[16px]"> 
              <div className='flex flex-col'>
                <p className='text-[14px] text-[#525252] font-medium cursor-pointer'>Total</p>
                <h3 className='font-semibold text-[#141414] text-[24px] cursor-pointer'>1.8k</h3>
              </div>
              <div className='flex flex-col'>
                <p className='text-[14px] text-[#525252] font-medium cursor-pointer'>Active</p>
                <h3 className='font-semibold text-[#141414] text-[24px] cursor-pointer'>80</h3>
              </div>
              <div className='flex flex-col'>
                <p className='text-[14px] text-[#525252] font-medium cursor-pointer'>Archived</p>
                <h3 className='font-semibold text-[#141414] text-[24px] cursor-pointer'>1k</h3>
              </div>
            </div>
          </div>

          <div className='flex flex-col basis-1/2'>
            <div className="flex justify-between items-center rounded-t-[16px] border border-light-gray p-5">
              <div className="flex gap-2 items-center cursor-pointer">
                <img src="/Profile 2.png" alt=""  />
                <p className='text-[14px] font-medium text-[#292929] cursor-pointer'>Users Overview</p>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
              <p className='text-[#4545FE] text-[14px] font-medium cursor-pointer'>View all</p>
              <img src="/arrow.png" alt=""/>
              </div>
            </div>
            <div className="p-5 bg-white border border-light-gray border-t-0 flex justify-between rounded-b-[16px]"> 
              <div className='flex flex-col'>
                <p className='text-[14px] text-[#525252] font-medium cursor-pointer'>Total</p>
                <h3 className='font-semibold text-[#141414] text-[24px] cursor-pointer'>20.7k</h3>
              </div>
              <div className='flex flex-col'>
                <p className='text-[14px] text-[#525252] font-medium cursor-pointer'>Riders</p>
                <h3 className='font-semibold text-[#141414] text-[24px] cursor-pointer'>8.5k</h3>
              </div>
              <div className='flex flex-col'>
                <p className='text-[14px] text-[#525252] font-medium cursor-pointer'>Subscribers</p>
                <h3 className='font-semibold text-[#141414] text-[24px] cursor-pointer'>7.5k</h3>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className='relative'>
        <RowOfCarousels/>
      <img src="/Footer.png" className='absolute z-10 top-15 right-0 cursor-pointer' alt="" />
      </div>
      

      
    </div>
  )
}

export default Page