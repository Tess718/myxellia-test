'use client';

import { useState, useEffect, useRef } from 'react';

type Slide = {
  image: string;
  label: string;
  title: string;
};

const data: Slide[][] = [
  [
    { image: '/carol-1.jpg', label: 'MOST CLICKED', title: 'Urban Prime Plaza Premiere' },
    { image: 'https://img.freepik.com/free-photo/observation-urban-building-business-steel_1127-2397.jpg?w=360', label: 'MOST CLICKED', title: 'Urban Prime Plaza Premiere' },
    { image: 'https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg', label: 'MOST CLICKED', title: 'Urban Prime Plaza Premiere' },
  ],
  [
    { image: '/carol-2.jpg', label: 'MOST WATCHLISTED', title: 'Urban Prime Plaza Premiere' },
    { image: 'https://media.istockphoto.com/id/1508453163/photo/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=RSJYaxThii5iK-zk_69h16UVthwufA1gbaxoZEKOUZg=', label: 'MOST WATCHLISTED', title: 'Urban Prime Plaza Premiere' },
  ],
  [
    { image: '/carol-3.jpg', label: 'HOTTEST LISTING', title: 'Urban Prime Plaza Premiere' },
    { image: 'https://thumbs.dreamstime.com/b/downtown-office-buildings-buildings-halifax-nova-scotia-canada-188558695.jpg', label: 'HOTTEST LISTING', title: 'Urban Prime Plaza Premiere' },
  ],
];

function CardCarousel({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);


  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, slides.length]);

 
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrent((prev) => (prev + 1) % slides.length);
      } else {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl shadow-lg"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="w-full h-64 object-cover object-top transition-all duration-500"
      />

      
      <div className="absolute inset-0 bg-[linear-gradient(183.45deg,rgba(0,0,0,0.05)_41.18%,rgba(0,0,0,0.6)_100.3%)] z-10" />

      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
        <p className="text-xs uppercase">{slides[current].label}</p>
        <h3 className="font-bold">{slides[current].title}</h3>
      </div>

      
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition ${
              current === i ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function RowOfCarousels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
      {data.map((slides, i) => (
        <CardCarousel key={i} slides={slides} />
      ))}
    </div>
  );
}
