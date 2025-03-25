import React from "react";

const Button = ({ buttonName, handleClick, styles }) => {
  return (
    <button className={`cursor-pointer ${styles}`} onClick={handleClick}>
      {buttonName}
    </button>
  );
};

export default Button;
