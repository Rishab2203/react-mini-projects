import React from "react";
import Button from "./Button";

const ButtonController = ({ setItems, select }) => {
  const handleAllLeftClick = () => {
    setItems((prev) => {
      Object.keys(prev).map((item) => (prev[item] = "left"));
      return { ...prev };
    });
  };
  const handleLeftClick = () => {
    setItems((prev) => {
      Object.keys(prev).map((item) => {
        if (select.includes(item)) {
          prev[item] = "left";
        }
      });
      return { ...prev };
    });
  };
  const handleRightClick = () => {
    setItems((prev) => {
      Object.keys(prev).map((item) => {
        if (select.includes(item)) {
          prev[item] = "right";
        }
      });
      return { ...prev };
    });
  };
  const handleAllRightClick = () => {
    setItems((prev) => {
      Object.keys(prev).map((item) => (prev[item] = "right"));
      return { ...prev };
    });
  };
  return (
    <div className="flex flex-col gap-3  justify-between border-2 border-black p-3">
      <Button buttonName={"all-left"} onClick={handleAllLeftClick} />
      <Button buttonName={"left"} onClick={handleLeftClick} />
      <Button buttonName={"right"} onClick={handleRightClick} />
      <Button buttonName={"all-right"} onClick={handleAllRightClick} />
    </div>
  );
};

export default ButtonController;
