import { useEffect, useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import Emails from "./components/Emails";
import Loader from "./components/Loader";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("https://flipkart-email-mock.now.sh/");
        const result = await response.json();

        setFetchedData(result.list);

        return result.list;
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <div className=" p-7  ">
          <FilterBar
            filter={filter}
            setFilter={setFilter}
            setEmail={setEmail}
          />
          {
            <Emails
              filter={filter}
              fetchedData={fetchedData}
              setFetchedData={setFetchedData}
              email={email}
              setEmail={setEmail}
            />
          }
        </div>
      )}
    </>
  );
}

export default App;
