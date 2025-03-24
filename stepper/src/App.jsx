import { useState } from "react";
import Stepper from "./components/Stepper";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stepper />
    </>
  );
}

export default App;
