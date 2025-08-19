import { X } from 'lucide-react';
import React from 'react';

interface BudgetProps {
  onClose: () => void;
}

const Budget: React.FC<BudgetProps> = ({ onClose }) => {
  return (
    <div
      className="flex flex-col md:w-[438px] w-[370px] bg-white rounded-[10px] shadow-lg relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        <X/>
      </button>

      <img src="/media.png" alt="illustration" className="rounded-t-[10px]" />

      <div className="md:px-14 px-6 py-5 flex flex-col gap-5">
        <div className="flex items-center gap-2.5">
          <img src="/setting-4.png" alt="Settings icon" />
          <div>
            <h4 className="font-semibold text-[16px] text-main-black">
              Set up annual budgets by account category
            </h4>
            <p className="text-[#606060] text-[12px] font-regular">
              Allocate funds across income and expense lines with full visibility.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <img src="/trend-up.png" alt="Upward trend icon" />
          <div>
            <h4 className="font-semibold text-[16px] text-main-black">
              Track actuals vs budget in real time
            </h4>
            <p className="text-[#606060] text-[12px] font-regular">
              See how your community is performing against plan, month by month.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <img src="/align-bottom.png" alt="Alignment icon" />
          <div>
            <h4 className="font-semibold text-[16px] text-main-black">
              Adjust figures and forecast with ease
            </h4>
            <p className="text-[#606060] text-[12px] font-regular">
              Edit amounts, apply percentage changes, or roll forward last year’s
              data—all in one place.
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="bg-[#18181B] text-white px-6 py-3 rounded-full font-medium text-[16px]"
        >
          Create Budget
        </button>
      </div>
    </div>
  );
};

export default Budget;
