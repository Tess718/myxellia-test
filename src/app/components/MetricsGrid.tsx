import { metrics } from "../constants"

export default function MetricsGrid() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {metrics.map((item, idx) => (
        <div key={idx} className="rounded-[12px] p-3 border border-light-gray">
          <h3
            className="md:text-[19px] text-md font-semibold"
            style={{ color: item.color }}
          >
            {item.amount}
          </h3>
          <div className="flex gap-2 items-center pt-1">
            <p className="text-[12px] font-medium text-deep-gray">{item.label}</p>
            <div className="flex items-center gap-1">
              <img src={item.icon} alt="icon" />
              <p
                className="text-[10px]"
                style={{ color: item.changeColor }}
              >
                {item.change}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
