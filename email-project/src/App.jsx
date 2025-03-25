import { useEffect, useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import Emails from "./components/Emails";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [read, setRead] = useState([]);
  const [favourite, setFavourite] = useState([]);

  const [showMail, setShowEmail] = useState(false);

  const handleReadClick = () => {
    setData(read);
    setShowEmail(false);
  };

  const handleUnreadClick = () => {
    const unread = fetchedData.filter((mail) => !read.includes(mail));
    setData(unread);
    setShowEmail(false);
  };
  const handleFavouriteClick = () => {
    setData(favourite);
    setShowEmail(false);
  };
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
    fetchData().then((data) => console.log(data));
  }, []);

  return (
    <>
      <div className=" p-7  ">
        <FilterBar
          handleReadClick={handleReadClick}
          handleUnreadClick={handleUnreadClick}
          handleFavouriteClick={handleFavouriteClick}
        />
        <Emails
          data={data}
          setRead={setRead}
          setShowEmail={setShowEmail}
          showMail={showMail}
          favourite={favourite}
          setFavourite={setFavourite}
        />
      </div>
    </>
  );
}

export default App;
