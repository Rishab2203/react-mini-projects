import { useEffect, useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import Emails from "./components/Emails";
import Loader from "./components/Loader";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favourite, setFavourite] = useState([]);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("https://flipkart-email-mock.now.sh/");
        const result = await response.json();

        setFetchedData(result.list);
        setData(result.list);
        return result.list;
      } catch (err) {
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
            data={data}
            setData={setData}
            setEmail={setEmail}
            favourite={favourite}
            fetchedData={fetchedData}
          />
          <Emails
            data={data}
            setData={setData}
            email={email}
            setEmail={setEmail}
            favourite={favourite}
            setFavourite={setFavourite}
          />
        </div>
      )}
    </>
  );
}

export default App;
