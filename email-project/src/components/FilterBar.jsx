import React from "react";
import Button from "./Button";

const FilterBar = ({
  handleReadClick,
  handleUnreadClick,
  handleFavouriteClick,
}) => {
  return (
    <div className="flex gap-6">
      <span>Filter By: </span>
      <Button buttonName={"Unread"} handleClick={() => handleUnreadClick()} />
      <Button buttonName={"Read"} handleClick={() => handleReadClick()} />
      <Button
        buttonName={"Favourites"}
        handleClick={() => handleFavouriteClick()}
      />
    </div>
  );
};

export default FilterBar;
