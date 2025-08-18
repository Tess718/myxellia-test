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
        <div className='bg-[#191919] py-6 md:px-20 px-4 flex justify-between md:items-center items-end'>
            <img src="/Myxellia logo.png" alt="logo" className='max-sm:w-26' />

            <div className='flex items-center md:gap-6 gap-3 max-sm:justify-center max-sm:pt-3'>
                <img src="/Notification 1.png" alt="Notifications" className='opacity-50 max-sm:w-5' />

                <img src="/calculator.png" alt="Calculator" onClick={openBudget} className='cursor-pointer max-sm:w-5' />

                <img src="/calendar.png" alt="Calendar icon" className='cursor-pointer max-sm:w-5' onClick={toggleCalendar} ref={calendarToggleRef} />

                <img src="/message-notif.png" alt="Messages" className='opacity-50 max-sm:w-5' />

                <img src="/Profile.png" alt="User profile" className='max-sm:w-5' />

                <img src="/menu.png" alt="" className='w-10 md:hidden cursor-pointer max-sm:w-5' onClick={() => setOpen(!open)} />
            </div>
        </div>

        {open && (
          <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.9)] z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        <div
          className={`
            fixed top-0 left-0 h-full max-sm:w-64 bg-white shadow-md z-50
            transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full"}
            
            md:static md:translate-x-0 md:shadow-none md:block
          `}
        >

          <div className="navlink-container">
              <div className='flex gap-2 px-8 py-2 cursor-pointer active'>
                  <img src="/Vector.png" alt="" title='Dashboard' /><p className='text-[14px] font-semibold text-main-black md:hidden lg:block'>Dashboard</p>
              </div>
              <div className='flex gap-2 px-8 py-2 cursor-pointer'>
                  <img src="/Vector (1).png" alt="" title='Listings'/><p className='text-[14px] font-regular text-deep-gray md:hidden lg:block'>Listings</p>
              </div>
              <div className='flex gap-2 px-8 py-2 cursor-pointer'>
                  <img src="/Profile 1.png" alt="" title='Users'/><p className='text-[14px] font-regular text-deep-gray md:hidden lg:block'>Users</p>
              </div>
              <div className='flex gap-2 px-8 py-2 cursor-pointer'>
                  <img src="/Article.png" alt="" title='Request'/><p className='text-[14px] font-regular text-deep-gray md:hidden lg:block'>Request</p>
              </div>
              <div className='flex gap-2 px-8 py-2 cursor-pointer'>
                  <img src="/Scroll.png" alt="" title='Applications'/><p className='text-[14px] font-regular text-deep-gray md:hidden lg:block'>Applications</p>
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