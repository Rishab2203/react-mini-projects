import React, { useState } from "react";
import Button from "./Button";

const FilterBar = ({ data, setData, setEmail, favourite, fetchedData }) => {
  const [activeBtn, setActiveBtn] = useState(1);
  const handleReadClick = () => {
    setData((prev) => prev.filter((ele) => ele.read));

    setEmail(null);
    setActiveBtn(3);
  };

  const handleUnreadClick = () => {
    const unread = fetchedData.filter((mail) => !data.includes(mail));
    setData(unread);
    setEmail(null);
    setActiveBtn(2);
  };
  const handleFavouriteClick = () => {
    setData(favourite);
    setEmail(null);
    setActiveBtn(4);
  };
  const handleAllClick = () => {
    setData(fetchedData);
    setEmail(null);
    setActiveBtn(1);
  };
  return (
    <div className="flex gap-6">
      <span>Filter By: </span>
      <Button
        styles={
          activeBtn === 1 &&
          " px-1  rounded-md transition delay-150 bg-[#E1E4EA] "
        }
        buttonName={"All"}
        handleClick={handleAllClick}
      />
      <Button
        styles={
          activeBtn === 2 &&
          "px-1  rounded-md transition delay-150 bg-[#E1E4EA] "
        }
        buttonName={"Unread"}
        handleClick={handleUnreadClick}
      />
      <Button
        styles={
          activeBtn === 3 &&
          "px-1  rounded-md transition delay-150 bg-[#E1E4EA] "
        }
        buttonName={"Read"}
        handleClick={handleReadClick}
      />
      <Button
        styles={
          activeBtn === 4 &&
          "px-1  rounded-md transition delay-150 bg-[#E1E4EA] "
        }
        buttonName={"Favourites"}
        handleClick={handleFavouriteClick}
      />
    </div>
  );
};

export default FilterBar;
