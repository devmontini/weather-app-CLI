// import React from "react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPollution } from "../../redux/actions";
import Loader from "./assets/Loader";

const Solar = ({ countrie }) => {
  // { countrie } falta eso de PROPPPPPP ESO FALTA { countrie }
  const dispatch = useDispatch();
  const pollution = useSelector((state) => state.pollution);
  const [loading, setLoading] = useState(true);
  const lat = countrie.city.coord.lat;
  const lon = countrie.city.coord.lon;

  useEffect(() => {
    dispatch(getPollution(lat, lon));
    async function getLoad() {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    getLoad();
  }, [dispatch, lat, lon]);

  if (loading) {
    return (
      <div className="m-4 md:m-0 md:mr-1 md:w-full md:h-auto flex items-center justify-center rounded-xl bg-orange-700 p-2 bg-opacity-25 shadow-lg">
        <Loader />
      </div>
    );
  }

  const data = pollution.list[0].components;

  function niveles(e) {
    if (e >= 0 && e <= 50) {
      return <div className="bg-green-600">good</div>;
    }
    if (e >= 51 && e <= 100) {
      return <div className="bg-yellow-600">moderate</div>;
    }
    if (e >= 101 && e <= 150) {
      return <div className="bg-orange-600">bad</div>;
    }
    if (e >= 151 && e <= 200) {
      return <div className="bg-red-600">unhelthy</div>;
    }
    if (e > 200) {
      return <div className="bg-purple-600 w-full">hazardous</div>;
    }
  }

  return (
    <>
      <div className="m-4 md:m-0 md:mr-1 md:w-full md:h-auto flex h-fit flex-col rounded-xl bg-orange-700 p-2 bg-opacity-25 shadow-lg">
        <div className="flex flex-col w-full justify-center">
          <h2 className="font-bold text-em5 text-center my-2  md:text-em2">
            Pollution
          </h2>
          <div className="grid grid-cols-3 md:grid-rows-3 text-center">
            <p>CO</p> <p>{data.co}</p>
            <div>{niveles(data.co)}</div>
            <p>NH3</p>
            <p> {data.nh3}</p>
            <div>{niveles(data.nh3)}</div>
            <p>NO</p> <p>{data.no}</p>
            <div>{niveles(data.no)}</div>
            <p>NO2</p>
            <p> {data.no2}</p>
            <div>{niveles(data.no2)}</div>
            <p>PM2_5</p>
            <p> {data.pm2_5}</p>
            <div>{niveles(data.pm2_5)}</div>
            <p>PM10</p>
            <p> {data.pm10}</p>
            <div>{niveles(data.pm10)}</div>
            <p>SO2</p> <p>{data.so2}</p>
            <div>{niveles(data.so2)}</div>
          </div>
        </div>
      </div>
      {/* <div className="m-4 md:m-0 md:mr-1 md:w-full md:h-auto flex items-center justify-center rounded-xl bg-orange-700 p-2 bg-opacity-25 shadow-lg">
        <Loader />
      </div> */}
    </>
  );
};

export default Solar;
