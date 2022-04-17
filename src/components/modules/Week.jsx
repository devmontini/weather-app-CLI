import React, { useEffect, useState } from "react";
import Loader from "./assets/Loader";

import Days from "./Days";

const Week = ({ countrie }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      await setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="m-4 md:m-0 md:mt-2 md:w-full flex items-center justify-center rounded-xl bg-orange-700 p-2 bg-opacity-25 shadow-lg">
        <Loader />
      </div>
    );
  }

  if (countrie.length === 0) {
    return (
      <>
        <div className="m-4 md:m-0 md:ml-1 md:w-full md:h-auto flex h-fit flex-col rounded-xl bg-orange-700 p-2 bg-opacity-25 shadow-lg">
          <div className="flex w-full justify-center">
            The week data its not avilable
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="m-4 md:m-0 md:mt-2 md:w-full flex flex-col rounded-xl bg-orange-700 p-2 bg-opacity-25 shadow-lg">
      <h1 className="font-bold text-em5  md:text-em2 text-center">Next days</h1>
      <div className="md:grid md:grid-cols-5">
        {countrie.list
          .filter((el) => el.dt_txt.includes("12:00:00"))
          .map((el) => {
            return <Days key={el.dt} data={el} />;
          })}
      </div>
    </div>
  );
};

export default Week;
