import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryData } from "../../redux/actions";
import Loader from "./assets/Loader";
// import Week from "./Week";

const Card = ({ countrie }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getLoad() {
      await dispatch(getCountryData(countrie.city.name));

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    getLoad();
  }, [dispatch, countrie.city.name]);

  if (loading) {
    return (
      <div className="m-4 md:m-0 md:mt-2 md:h-auto flex md:w-full items-center justify-center rounded-xl bg-orange-700 p-2 bg-opacity-25 shadow-lg">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="m-4 md:m-0 md:mt-2 md:h-auto flex md:w-full h-fit flex-col md:flex-row rounded-xl bg-orange-700 p-2 bg-opacity-25 shadow-lg">
        <div className="flex flex-col p-2 w-full  md:items-center justify-center">
          <div className="flex w-full md:h-fit md:items-center justify-center">
            <p className="font-bold text-em5 md:text-em2">{data.name}</p>
            <p className="font-bold text-em3 md:text-em1">
              ({data.sys.country})
            </p>
          </div>
          <div className="flex my-3 md:my-0 w-full md:h-fit md:items-center justify-center">
            <p className="font-bold text-em8 md:text-em3">
              {parseInt(data.main.temp)}C
            </p>
          </div>
        </div>
        <div className="flex w-full md:p-2 md:items-center justify-evenly">
          <div className="grid grid-cols-2">
            <div className="mx-1">
              <p className="font-bold text-em4 md:text-em1_5">max:</p>
              <p className="font-bold text-em4 md:text-em1_5">min:</p>
              <p className="font-bold text-em4 md:text-em1_5">feel:</p>
            </div>
            <div>
              <p className="font-bold text-em4 md:text-em1_5">
                {parseInt(data.main.temp_max)}c
              </p>
              <p className="font-bold text-em4 md:text-em1_5">
                {parseInt(data.main.temp_min)}c
              </p>
              <p className="font-bold text-em4 md:text-em1_5">
                {parseInt(data.main.feels_like)}c
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mx-1">
              <p className="font-bold text-em4 md:text-em1_5">hum:</p>
              <p className="font-bold text-em4 md:text-em1_5">deg:</p>
              <p className="font-bold text-em4 md:text-em1_5">speed:</p>
            </div>
            <div>
              <p className="font-bold text-em4 md:text-em1_5">
                {data.main.humidity}%
              </p>
              <p className="font-bold text-em4 md:text-em1_5">
                {data.wind.deg}
              </p>
              <p className="font-bold text-em4 md:text-em1_5">
                {data.wind.speed}km
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
