import { useState, useRef, useEffect } from "react";

const CustomSelect = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = ["Popularity", "Minimum Amount", "Recently Rebalanced"];
  const timePeriods = [
    { duration: "1M", value: "monthly" },
    { duration: "6M", value: "halfyearly" },
    { duration: "1Y", value: "yearly" },
    { duration: "3Y", value: "threeYear" },
    { duration: "5Y", value: "fiveYear" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    setSelected(option);
  };

  const handlePeriodClick = (period) => {
    const tenure = { tenure: period, order: "High-Low" };
    setSelected(tenure);
  };

  const handleOrderClick = (order) => {
    setSelected((prev) => {
      let update = { ...prev, order: order };
      console.log(update);
      return update;
    });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        className="flex items-center px-1 py-3  text-sm border-b-2 border-gray-400  text-gray-700 bg-white "
        onClick={toggleDropdown}
      >
        Sort by{" "}
        <span className="ml-2 w-[165px] ">
          {selected.tenure
            ? `${selected.tenure.duration} (${selected.order})`
            : selected}
        </span>
        <span className="w-4 h-4 ml-2 text-gray-500">&#x2191;</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white shadow-md rounded-lg p-4 z-10">
          <div className="space-y-2">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center justify-between cursor-pointer px-2 py-2 hover:bg-gray-100 rounded"
              >
                <span
                  className={`text-gray-700 ${
                    selected === option ? "font-semibold text-blue-600" : ""
                  }`}
                >
                  {option}
                </span>
                <input
                  type="radio"
                  name="sortOption"
                  value={option}
                  checked={selected === option}
                  onChange={() => selectOption(option)}
                  className="form-radio text-blue-600"
                />
              </label>
            ))}
          </div>

          {/* Returns Section */}
          <div className="mt-4 flx">
            <h3 className="text-gray-600 text-sm font-medium">Returns</h3>
            <div className="flex flex-col gap-1">
              <div>
                <span className="text-gray-500 text-[10px] font-medium mt-2">
                  Time Period
                </span>
                <div className="flex ">
                  {timePeriods.map((period) => (
                    <button
                      onClick={() => handlePeriodClick(period)}
                      key={period.duration}
                      className={` ${
                        selected.tenure?.duration === period.duration
                          ? "text-blue-600"
                          : ""
                      } px-3 py-1 text-sm border border-gray-300  hover:bg-gray-100`}
                    >
                      {period.duration}
                    </button>
                  ))}
                </div>
              </div>
              {selected.tenure && (
                <div>
                  <span className="text-gray-500 text-[10px] font-medium mt-2">
                    Order By
                  </span>
                  <div className="flex items-center ">
                    <button
                      onClick={() => handleOrderClick("High-Low")}
                      className={`rounded-none px-3 py-1 text-sm border border-gray-300  hover:bg-gray-100  ${
                        selected.order === "High-Low" ? "text-blue-600" : ""
                      } `}
                    >
                      High-Low
                    </button>
                    <button
                      onClick={() => handleOrderClick("Low-High")}
                      className={`rounded-none px-3 py-1 text-sm border border-gray-300  hover:bg-gray-100  ${
                        selected.order === "Low-High" ? "text-blue-600" : ""
                      } `}
                    >
                      Low-High
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
