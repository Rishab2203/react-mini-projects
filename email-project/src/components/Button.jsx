import React from "react";

const Button = ({ buttonName, handleClick }) => {
  return (
    <button
      className="cursor-pointer active:bg-blue-700 "
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
};

export default Button;
