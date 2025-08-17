'use client';

import React, { useState, forwardRef } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';


interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ 
  selectedDate = new Date(), 
  onDateSelect 
}) => {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 10, 1)); // Start with Nov 2023
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(direction === 'prev' ? prev.getMonth() - 1 : prev.getMonth() + 1);
      return newDate;
    });
  };
  
  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };
  
  const isSelected = (date: Date | null): boolean => {
    if (!date || !selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };
  
  const handleDateClick = (date: Date | null) => {
    if (date && onDateSelect) {
      onDateSelect(date);
    }
  };
  
  const days = getDaysInMonth(currentDate);
  
  return (
    <div className="text-white w-full mx-auto">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 p-2">
        <button 
          onClick={() => navigateMonth('prev')}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          <ChevronLeft className="w-4 h-4" color='#98A2B3' fill='#98A2B3' />
        </button>

        <h2 className="text-[16px] font-semibold text-white">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>

        <button 
          onClick={() => navigateMonth('next')}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          <ChevronRight className="w-4 h-4 " color='#98A2B3' fill='#98A2B3' />
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 text-center text-gray-500 text-[9px] font-medium">
        {dayNames.map(day => (
          <div key={day} className='border border-[#242424] border-[0.235px]'>
            {day.toUpperCase()}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {days.map((date, index) => (
          <div key={index} className="flex items-start p-[5.68px] border-[0.235px] border-[#242424] h-[91px]">
            {date && (
              <button
                onClick={() => handleDateClick(date)}
                disabled={!date}
                className={`
                  h-4 w-9 text-sm flex items-center justify-start ps-1 transition-all duration-200 rounded-full
                  ${isSelected(date)
                    ? 'bg-[#2525E6] text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }
                `}
              >
                <span
                  className={
                    isToday(date) && !isSelected(date)
                      ? 'w-7 h-7 flex rounded-full border border-blue-500'
                      : ''
                  }
                >
                  {date.getDate()}
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Popup Wrapper Component (Exported)
// ==================================
interface CalendarPopupProps {
  onClose: () => void;
}

const CalendarPopup = forwardRef<HTMLDivElement, CalendarPopupProps>(({ onClose }, ref) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2023, 10, 16));
  
  return (
    <div ref={ref} className="absolute z-30 top-[80px] right-0 w-[400px] bg-[#171717]  shadow-lg flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-[#242424]">
            <div className="flex items-center gap-2">
                <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700">
                  <ArrowLeft size={20} color='#fff' />
                </button>
                <p className='text-[16px] font-semibold text-white'>Calendar</p>
            </div>

            <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700">
              <X size={20} color='#fff' />
            </button>
        </div>
        <div className="bg-black p-4 pt-0 rounded-b-xl">
            <Calendar 
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
            />
        </div>
    </div>
  );
});

CalendarPopup.displayName = 'CalendarPopup';

export default CalendarPopup;