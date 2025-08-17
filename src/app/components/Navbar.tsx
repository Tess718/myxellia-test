'use client';

import React, { useState, useEffect, useRef } from 'react';
import Calendar from './Calendar'
import Budget from './Budget';

const Navbar = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const calendarToggleRef = useRef<HTMLImageElement>(null);

  const [open, setOpen] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarOpen(prev => !prev);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

const [isBudgetOpen, setIsBudgetOpen] = useState(false);

  const openBudget = () => setIsBudgetOpen(true);
  const closeBudget = () => setIsBudgetOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isCalendarOpen &&
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        calendarToggleRef.current &&
        !calendarToggleRef.current.contains(event.target as Node)
      ) {
        closeCalendar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCalendarOpen, closeCalendar]);

  return (
    <div className='bg-white'>
        <div className='bg-[#191919] py-6 px-20 flex justify-between items-center max-sm:flex-col'>
            <img src="/Myxellia logo.png" alt="logo" className='' />

            <div className='flex items-center gap-6 max-sm:justify-center max-sm:pt-3'>
                <img src="/Notification 1.png" alt="Notifications" className='opacity-50' />

                <img src="/calculator.png" alt="Calculator" onClick={openBudget} className='cursor-pointer' />

                <img src="/calendar.png" alt="Calendar icon" className='cursor-pointer' onClick={toggleCalendar} ref={calendarToggleRef} />

                <img src="/message-notif.png" alt="Messages" className='opacity-50' />

                <img src="/Profile.png" alt="User profile" />

                <img src="/menu.png" alt="" className='w-10 md:hidden cursor-pointer' onClick={() => setOpen(!open)} />
            </div>
        </div>

        <div className={`${open ? "block" : "hidden"} md:block w-full`}>
          <div className="flex px-20 border-b border-gray-300 py-4 justify-between items-center flex-col md:flex-row">
              <div className='flex gap-2 px-8 py-2 cursor-pointer active'>
                  <img src="/Vector.png" alt=""/><p className='text-[14px] font-semibold text-main-black md:hidden lg:block'>Dashboard</p>
              </div>
              <div className='flex gap-2 px-8 py-2 cursor-pointer'>
                  <img src="/Vector (1).png" alt=""/><p className='text-[14px] font-regular text-deep-gray md:hidden lg:block'>Listings</p>
              </div>
              <div className='flex gap-2 px-8 py-2 cursor-pointer'>
                  <img src="/Profile 1.png" alt=""/><p className='text-[14px] font-regular text-deep-gray md:hidden lg:block'>Users</p>
              </div>
              <div className='flex gap-2 px-8 py-2 cursor-pointer'>
                  <img src="/Article.png" alt=""/><p className='text-[14px] font-regular text-deep-gray md:hidden lg:block'>Request</p>
              </div>
              <div className='flex gap-2 px-8 py-2 cursor-pointer'>
                  <img src="/Scroll.png" alt=""/><p className='text-[14px] font-regular text-deep-gray md:hidden lg:block'>Applications</p>
              </div>

              <div className='search'>
                  <img src="/Search 1.png" alt="search" />
                  <input type="text" placeholder='Search listings, users here...' className='placeholder:text-[12px] text-[#919191] outline-none' />
              </div>
          </div>

        </div>
        {isCalendarOpen && <Calendar ref={calendarRef} onClose={closeCalendar} />}

        {isBudgetOpen && (
        <>
          <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-20"
            onClick={closeBudget}
            aria-hidden="true"
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <Budget onClose={closeBudget} />
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar