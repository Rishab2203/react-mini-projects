import React from "react";
import Button from "./Button";

const FilterBar = ({ filter, setEmail, setFilter }) => {
  const filterTags = ["All", "Unread", "Read", "Favourites"];
  const handleFilterClick = (tag) => {
    setFilter(tag);
    setEmail(null);
  };
  return (
    <div className="flex gap-6">
      <span>Filter By: </span>
      {filterTags.map((tag) => (
        <Button
          styles={
            filter === tag.toLowerCase() &&
            " px-1  rounded-md transition delay-150 bg-[#E1E4EA] "
          }
          buttonName={tag}
          handleClick={() => handleFilterClick(tag.toLowerCase())}
        />
      ))}
    </div>
  );
};

export default FilterBar;
