import React from "react";

const Button = ({ buttonName, handleClick }) => {
  return (
    <button className="cursor-pointer" onClick={handleClick}>
      {buttonName}
    </button>
  );
};

export default Button;
