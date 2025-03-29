import React from "react";

const Card = ({ item }) => {
  return (
    <div className="flex py-6 px-3 items-center gap-4 border-b border-gray-400 cursor-pointer hover:border hover:border-gray-400 hover:rounded-md ">
      <img
        src={`https://assets.smallcase.com/images/smallcases/200/${item.scid}.png`}
        width="70px"
        alt=""
      />
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center">
            <h1 className="font-bold mr-1.5">{item["info"]["name"]}</h1>
            {item["flags"]["private"] && (
              <span className="text-[9px] font-bold h-fit bg-[#f2f6ff] text-[#1f79e0]">
                Free Access
              </span>
            )}
          </div>
          <span className="text-wrap text-gray-700 text-[15px]">
            {item["info"]["shortDescription"]}
          </span>
          <span className="text-gray-500">
            by {item["info"]["owner"]["name"]}
          </span>
        </div>
        <div className="flex items-center">
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
          <div className="   border border-gray-400 px-1.5 rounded-md">
            <span className="text-nowrap text-gray-600">
              {item["stats"]["ratios"]["riskLabel"]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
