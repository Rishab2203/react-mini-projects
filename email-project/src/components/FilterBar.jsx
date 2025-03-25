import React from "react";
import Button from "./Button";

const FilterBar = () => {
  return (
    <div className="flex gap-6">
      <span>Filter By: </span>
      <Button buttonName={"Unread"} />
      <Button buttonName={"Read"} />
      <Button buttonName={"Favourites"} />
    </div>
  );
};

export default FilterBar;
