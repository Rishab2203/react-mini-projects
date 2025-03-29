import React from "react";

const investmentStrategies = [
  "Asset Allocation",
  "Corporate Governance",
  "Dividend",
  "ESG",
  "Factor Investing",
  "Fundamental",
  "Goal Based",
  "Growth",
  "Momentum",
  "Quality",
  "Quantamental",
  "Quantitative",
  "Sector Tracker",
  "Technical",
  "Thematic",
  "Value",
];

const InvestementStrategyFilter = ({ filters, setFilters }) => {
  const handleChange = (item) => {
    setFilters((prev) => {
      let investmentStrategy = prev.investmentStrategies || [];
      if (investmentStrategy.includes(item)) {
        investmentStrategy = investmentStrategy.filter((ele) => ele != item);
      } else {
        investmentStrategy = [...investmentStrategy, item];
      }
      return { ...prev, investmentStrategies: investmentStrategy };
    });
    console.log(filters);
  };

  return (
    <div className="flex flex-col gap-2 mt-2 ml-2 ">
      {investmentStrategies.map((item) => (
        <div key={item}>
          <label className="text-sm text-nowrap text-gray-700 ">
            <input
              type="checkbox"
              checked={filters["investmentStrategies"]?.includes(
                item.toLowerCase()
              )}
              onChange={() => handleChange(item.toLowerCase())}
              className="mr-1"
            />
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default InvestementStrategyFilter;
