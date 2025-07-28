import { STATISTICS } from "./constants";

const StatsCard = () => {
  return (
    <div className="pt-15">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {STATISTICS.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#3e5f52] p-6 rounded-lg border border-gray-300 text-white"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-200">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
