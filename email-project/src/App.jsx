import { useEffect, useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import Emails from "./components/Emails";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("https://flipkart-email-mock.now.sh/");
        const result = await response.json();

        setData(result.list);
        return result.list;
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData().then((data) => console.log(data));
  }, []);

  return (
    <>
      <div className=" p-7">
        <FilterBar />
        <Emails data={data} />
      </div>
    </>
  );
}

export default App;
