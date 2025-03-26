import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// let columns = new Array(8).fill(0)

function App() {
  const [boxes, setBoxes] = useState([]);
  const [diagonals, setDiagonals] = useState([]);

  const handleClick = (a, b) => {
    setDiagonals([]);
    let sum = a + b;
    let sub = a - b;
    boxes.forEach((box) => {
      const [b, c] = box;
      if (b + c === sum || b - c === sub) {
        setDiagonals((prev) => [...prev, box]);
      }
    });
  };

  useEffect(() => {
    function twoDarray() {
      let array = [];
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          array.push([i, j]);
        }
      }
      return array;
    }
    setBoxes(twoDarray());
  }, []);

  return (
    <div className="container">
      {boxes.map((box) => {
        let [a, b] = box;

        return (
          <div
            key={`box-${box}`}
            className={`box ${(a + b) % 2 == 0 ? "white" : "black"} ${
              diagonals.includes(box) && "red"
            } `}
            onClick={() => handleClick(a, b)}
          ></div>
        );
      })}
    </div>
  );
}

export default App;
