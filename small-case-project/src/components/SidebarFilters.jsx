import React from "react";
import InvestementStrategyFilter from "./InvestementStrategy";
import { RiSlowDownFill } from "react-icons/ri";
import { RiSpeedUpFill } from "react-icons/ri";
import { LuCircleArrowOutDownRight } from "react-icons/lu";

const SidebarFilters = ({ filters, setFilters, filterCount }) => {
  const subscriptionType = ["Show all", "Free access", "Fee based"];
  const investmentAmount = [
    { name: "Any", value: "any" },
    { name: "Under ₹ 5000", value: 5000 },
    { name: "Under ₹ 25000", value: 25000 },
    { name: "Under ₹ 50000", value: 50000 },
  ];

  const handleFilterClick = (filt) => {
    setFilters((prev) => {
      let updated = {
        ...prev,
        ...filt,
      };
      return updated;
    });
    console.log(filters);
  };

  const handleClearAll = () => {
    setFilters({
      showNewSmallCases: false,
    });
  };
  return (
    <>
      <section className="w-[10vw] flex flex-col gap-4">
        <div className="flex justify-between border-b pb-3 border-gray-200">
          <span className="text-gray-400 text-md">
            Filters
            <span className="bg-gray-300 px-1 py-0.5  rounded-sm ml-1 w-4  h-4  ">
              {filterCount}
            </span>
          </span>
          <button
            onClick={handleClearAll}
            className={` cursor-pointer  ${
              filterCount > 1 ? "text-blue-600" : "text-gray-400"
            } `}
          >
            clear all
          </button>
        </div>
        <div>
          <h2 className="font-bold text-gray-600">Subscription Type</h2>
          <div className="rounded-md border-1 text-gray-600 text-sm border-gray-400 mt-2">
            {subscriptionType.map((sub) => (
              <button
                key={sub}
                className={`text-wrap align-middle p-0.5 w-1/3 cursor-pointer `}
                onClick={() => handleFilterClick({ subscriptionType: sub })}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-gray-600">Investment Amount</h2>
          <div className=" mt-2">
            {investmentAmount.map((invest) => (
              <label
                key={invest.name}
                className="flex items-center gap-1.5 text-sm cursor-pointer px-2 py-2 hover:bg-gray-100 rounded"
              >
                <input
                  type="radio"
                  name="investmentAmount"
                  value={invest.value}
                  //  checked={selected === option}
                  onChange={() =>
                    handleFilterClick({ investmentValue: invest.value })
                  }
                  className="form-radio text-blue-600"
                />
                <span className={`text-gray-700 `}>{invest.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-gray-600">Volatility</h2>
          <div className="flex gap-1.5 text-sm font-semibold text-gray-600 mt-2">
            <button
              className={`flex flex-col items-center    w-18  p-2 rounded-sm cursor-pointer hover:bg-gray-100 ${
                filters["volatility"] === "Low Volatility"
                  ? "border-2 border-blue-500 text-blue-500"
                  : "border border-gray-400"
              } `}
              onClick={() =>
                handleFilterClick({ volatility: "Low Volatility" })
              }
            >
              <RiSlowDownFill style={{ color: "green" }} />
              Low
            </button>
            <button
              className={`flex flex-col items-center    w-18  p-2 rounded-sm cursor-pointer hover:bg-gray-100 ${
                filters["volatility"] === "Medium Volatility"
                  ? "border-2 border-blue-500 text-blue-500"
                  : " border border-gray-400"
              } `}
              onClick={() =>
                handleFilterClick({ volatility: "Medium Volatility" })
              }
            >
              <LuCircleArrowOutDownRight
                style={{ color: "#f2e307", transform: "rotate(-135deg)" }}
              />
              Medium
            </button>
            <button
              className={`flex flex-col items-center    w-18  p-2 rounded-sm cursor-pointer hover:bg-gray-100 ${
                filters["volatility"] === "High Volatility"
                  ? " border-2 border-blue-500 text-blue-500"
                  : "border border-gray-400"
              } `}
              onClick={() =>
                handleFilterClick({ volatility: "High Volatility" })
              }
            >
              <RiSpeedUpFill style={{ color: "red" }} />
              High
            </button>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-gray-600">Launch Date</h2>
          <label className="flex items-center gap-1.5 text-sm cursor-pointer px-2 py-2 hover:bg-gray-100 text-gray-700 rounded text-nowrap ">
            <input
              type="checkbox"
              checked={filters["showNewSmallCases"]}
              onChange={() =>
                handleFilterClick({
                  showNewSmallCases: !filters["showNewSmallCases"],
                })
              }
            />
            Include new smallcases
          </label>
        </div>
        <div>
          <h2 className="font-bold text-nowrap text-gray-600">
            Investement Strategy
          </h2>
          <InvestementStrategyFilter
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      </section>
    </>
  );
};

export default SidebarFilters;
