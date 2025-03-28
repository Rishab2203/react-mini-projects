import React from "react";
import Button from "./Button";

const FilterBar = ({ filter, setEmail, setFilter }) => {
  const handleReadClick = () => {
    setFilter("read");
    setEmail(null);
  };

  const handleUnreadClick = () => {
    setFilter("unread");
    setEmail(null);
  };
  const handleFavouriteClick = () => {
    setFilter("favourites");
    setEmail(null);
  };
  const handleAllClick = () => {
    setFilter("all");
    setEmail(null);
  };
  return (
    <div className="flex gap-6">
      <span>Filter By: </span>
      <Button
        styles={
          filter === "all" &&
          " px-1  rounded-md transition delay-150 bg-[#E1E4EA] "
        }
        buttonName={"All"}
        handleClick={handleAllClick}
      />
      <Button
        styles={
          filter === "unread" &&
          "px-1  rounded-md transition delay-150 bg-[#E1E4EA] "
        }
        buttonName={"Unread"}
        handleClick={handleUnreadClick}
      />
      <Button
        styles={
          filter === "read" &&
          "px-1  rounded-md transition delay-150 bg-[#E1E4EA] "
        }
        buttonName={"Read"}
        handleClick={handleReadClick}
      />
      <Button
        styles={
          filter === "favourites" &&
          "px-1  rounded-md transition delay-150 bg-[#E1E4EA] "
        }
        buttonName={"Favourites"}
        handleClick={handleFavouriteClick}
      />
    </div>
  );
};

export default FilterBar;
