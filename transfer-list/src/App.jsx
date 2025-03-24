import { useState } from "react";
import List from "./components/List";
import ButtonController from "./components/ButtonController";
import "./App.css";

let listItems = {
  JS: "left",
  HTML: "left",
  CSS: "left",
  TS: "left",
  React: "right",
  Angular: "right",
  Vue: "right",
  Svelte: "right",
};

function App() {
  const [items, setItems] = useState(listItems);
  const [select, setSelect] = useState([]);

  return (
    <div className="flex flex-col justify-center items-center gap-3 ">
      <h1 className="text-4xl">Transfer List</h1>
      <div className="flex justify-center ">
        <List
          list={items}
          table={"left"}
          setSelect={setSelect}
          select={select}
        />
        <ButtonController select={select} setItems={setItems} />

        <List
          list={items}
          table={"right"}
          setSelect={setSelect}
          select={select}
        />
      </div>
    </div>
  );
}

export default App;
