import React from "react";

interface Stat {
  label: string
  value: string
}

interface OverviewCardProps {
  title: string
  icon: string
  stats: Stat[]
  viewAllText?: string
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, icon, stats }) => {
  return (
    <div className="flex flex-col basis-1/2">
      
      <div className="flex justify-between items-center rounded-t-[16px] border border-light-gray p-5">
        <div className="flex gap-2 items-center cursor-pointer">
          <img src={icon} alt={`${title} icon`} />
          <p className="text-[14px] font-medium text-[#292929]">{title}</p>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <p className="text-[#4545FE] text-[14px] font-medium">View all</p>
          <img src="/arrow.png" alt="arrow icon" />
        </div>
      </div>

      
      <div className="p-5 bg-white border border-light-gray border-t-0 flex justify-between rounded-b-[16px]">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col">
            <p className="text-[14px] text-[#525252] font-medium cursor-pointer">
              {stat.label}
            </p>
            <h3 className="font-semibold text-[#141414] text-[24px] cursor-pointer">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OverviewCard
