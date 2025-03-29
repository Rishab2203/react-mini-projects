import React from "react";
import CustomSelect from "./Custom-select";

const Sectionbar = ({ selected, setSelected }) => {
  return (
    <>
      <h1 className="text-xl font-bold ">Discover</h1>
      <section className="border-b border-gray-300 mt-3 flex justify-between">
        <div className="text-[16px] text-gray-400 flex items-center gap-3.5">
          <span>Collections</span>
          <span className="text-blue-500 border-b border-blue-500 py-1.5">
            All smallcases
          </span>
          <span>Managers</span>
        </div>
        <div className="flex gap-1.5">
          <CustomSelect selected={selected} setSelected={setSelected} />

          <div className="flex items-center relative py-2 px-1 border-b border-gray-400 text-sm text-gray-700">
            <img width="18px" src="./search.png" alt="" />
            <input
              className="focus:outline-0 ml-2 "
              type="text"
              placeholder="smallcase, manager or a stock..."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sectionbar;
