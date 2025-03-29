import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sectionbar from "./components/Sectionbar";
import SidebarFilters from "./components/SidebarFilters";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("Popularity");
  const [filters, setFilters] = useState({
    showNewSmallCases: false,
    sorted: "popularity",
  });

  let filterCount = 0;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("./smallcases.json");
        const result = await response.json();
        setData(result.data);
        return result.data;
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredData = data.filter((item, index) => {
    let isclear = true;
    if (filters["subscriptionType"]) {
      if (filters["subscriptionType"] === "Free access") {
        item["flags"]["private"] ? "" : (isclear = false);
        index === 0 ? filterCount++ : "";
      } else if (filters["subscriptionType"] === "Fee based") {
        !item["flags"]["private"] ? "" : (isclear = false);
        index === 0 ? filterCount++ : "";
      }
    }
    if (filters["investmentValue"]) {
      if (filters["investmentValue"] != "any") {
        index === 0 ? filterCount++ : "";
        item["stats"]["minInvestAmount"] < filters["investmentValue"]
          ? ""
          : (isclear = false);
      }
    }
    if (filters["volatility"]) {
      index === 0 ? filterCount++ : "";
      let risk = filters["volatility"];
      item["stats"]["ratios"]["riskLabel"] === risk ? "" : (isclear = false);
    }

    if (filters["showNewSmallCases"]) {
      index === 0 ? filterCount++ : "";
      const isYearOld = (dateStr) => {
        const givenDate = new Date(dateStr);
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        return givenDate < oneYearAgo;
      };
      isYearOld(item["info"]["publishedOnDate"]) ? "" : (isclear = false);
    }

    if (filters["investmentStrategies"]?.length) {
      index === 0 ? filterCount++ : "";
      let filterStrategies = filters["investmentStrategies"];
      let itemStrategies = item["info"]["investmentStrategy"].reduce(
        (acc, curr) => {
          acc.add(curr.key);
          return acc;
        },
        new Set()
      );

      filterStrategies.includes(...itemStrategies) ? "" : (isclear = false);
    }

    return isclear;
  });

  const sortedData = filteredData.sort((a, b) => {
    if (selected === "Popularity") {
      return (
        a["brokerMeta"]["flags"]["popular"]["rank"] -
        b["brokerMeta"]["flags"]["popular"]["rank"]
      );
    }
    if (selected === "Minimum Amount") {
      return a["stats"]["minInvestAmount"] - b["stats"]["minInvestAmount"];
    }
    if (selected === "Recently Rebalanced") {
      return a["stats"]["minInvestAmount"] - b["stats"]["minInvestAmount"];
    }
    if (selected.tenure) {
      const timeDuration = selected.tenure.value;
      return selected.tenure.order === "High-Low"
        ? a["stats"]["returns"][timeDuration] -
            b["stats"]["returns"][timeDuration]
        : b["stats"]["returns"][timeDuration] -
            a["stats"]["returns"][timeDuration];
    }
  });

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-[60vw] m-auto p-1 justify-between mt-4">
        <Sectionbar selected={selected} setSelected={setSelected} />
        <main className="flex mt-5 justify-between">
          <SidebarFilters
            filters={filters}
            setFilters={setFilters}
            filterCount={filterCount}
          />
          <section className="flex flex-col ">
            {sortedData.map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
