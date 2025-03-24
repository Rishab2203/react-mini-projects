import React from "react";

const Button = ({ buttonName, onClick }) => {
  return (
    <button className="border-2 border-black bg-gray-50" onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
