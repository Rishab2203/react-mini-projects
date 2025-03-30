import React from "react";
import { RiSlowDownFill } from "react-icons/ri";
import { RiSpeedUpFill } from "react-icons/ri";
import { LuCircleArrowOutDownRight } from "react-icons/lu";

const Card = ({ item }) => {
  return (
    <div className="flex py-8 px-9 items-center gap-4 border-b border-gray-400 cursor-pointer hover:border hover:border-gray-400 hover:rounded-md ">
      <img
        src={`https://assets.smallcase.com/images/smallcases/200/${item.scid}.png`}
        width="70px"
        alt=""
      />
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center">
            <h1 className="font-bold mr-1.5 w-[300px] overflow-ellipsis overflow-hidden text-nowrap">
              {item["info"]["name"]}
            </h1>
            {item["flags"]["private"] && (
              <span className="text-[9px] font-bold h-fit bg-[#f2f6ff] text-[#1f79e0]">
                Free Access
              </span>
            )}
          </div>
          <span className="text-wrap text-gray-700 text-[15px] max-w-[400px]">
            {item["info"]["shortDescription"]}
          </span>
          <span className="text-gray-500">
            by {item["info"]["owner"]["name"]}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col ml-2">
            <span className="text-gray-400 text-nowrap">Min. Amount</span>
            <span>₹{item["stats"]["minInvestAmount"]}</span>
          </div>
          <div className="flex flex-col items-center ml-2">
            <span className="text-gray-400 text-nowrap">1M Returns</span>
            <span className="text-green-700">
              {Math.floor(item["stats"]["returns"]["monthly"] * 1000).toFixed(
                2
              )}
              %
            </span>
          </div>
          <div className=" flex justify-center items-center   border border-gray-400 p-1 rounded-md text-[15px] min-w-[138px]">
            <span className=" flex  gap-1 items-center text-nowrap text-gray-600">
              {(item["stats"]["ratios"]["riskLabel"] === "Low Volatility" && (
                <RiSlowDownFill style={{ color: "green" }} />
              )) ||
                (item["stats"]["ratios"]["riskLabel"] ===
                  "Medium Volatility" && (
                  <LuCircleArrowOutDownRight
                    style={{ color: "#f2e307", transform: "rotate(-135deg)" }}
                  />
                )) ||
                (item["stats"]["ratios"]["riskLabel"] === "High Volatility" && (
                  <RiSpeedUpFill style={{ color: "red" }} />
                ))}
              {item["stats"]["ratios"]["riskLabel"]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
