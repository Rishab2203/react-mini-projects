import React from "react";

const List = ({ list, table, setSelect, select }) => {
  const handleCheckBoxChange = (e, item) => {
    console.log(select);
    console.log(e.target.checked);
    if (e.target.checked) {
      setSelect((prev) => [...prev, item]);
      return;
    }
    setSelect((prev) => prev.filter((ele) => ele != item));
  };
  return (
    <div className="flex flex-col  w-[30vw] border-2 border-black justify-center items-center p-3.5 text-[1.2rem] gap-2">
      {Object.keys(list)
        .filter((item) => list[item] === table)
        .map((item, index) => {
          return (
            <label>
              <input
                key={item}
                name={item}
                onChange={(e) => handleCheckBoxChange(e, item)}
                type="checkbox"
              />
              {item}
            </label>
          );
        })}
    </div>
  );
};

export default List;
