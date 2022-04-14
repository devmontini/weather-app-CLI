import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import Layer from "./Layer";
import SearchBar from "./SearchBar";
import Solar from "./Solar";
import Week from "./Week";

const Home = () => {
  const countrie = useSelector((state) => state.countrie);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      await setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    loadData();
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="flex h-em6 items-center justify-center">
          <SearchBar />
        </div>
        <div className="flex flex-grow w-full justify-center">
          {loading ? (
            <div className="flex flex-grow items-center justify-center">
              <h3 className="font-bold text-em5">Location...</h3>
            </div>
          ) : (
            <div className="flex w-full md:h-full md:flex-row md:flex-wrap flex-col">
              <Card key={countrie.id} countrie={countrie} />
              <div className="flex flex-col md:mt-2 md:flex-row w-full">
                {/* <Solar key={countrie.id} /> */}
                <Solar key={countrie.id} countrie={countrie} />
                <Layer key={countrie.id} countrie={countrie} />
              </div>
              <Week key={countrie.id} countrie={countrie} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
