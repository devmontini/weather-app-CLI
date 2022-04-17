import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSunrise } from "../../redux/actions";
import { FiSunset, FiSunrise } from "react-icons/fi";
import { MdHomeWork } from "react-icons/md";
import { RiSailboatFill } from "react-icons/ri";
import { GiFallingStar } from "react-icons/gi";
import Loader from "./assets/Loader";

const Layer = ({ countrie }) => {
  const dispatch = useDispatch();
  const sunrise = useSelector((state) => state.sunrise);
  const [loading, setLoading] = useState(true);
  const lat = countrie.city.coord.lat;
  const lon = countrie.city.coord.lon;

  useEffect(() => {
    async function getLoad() {
      await dispatch(getSunrise(lat, lon));

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    getLoad();
  }, [dispatch, lat, lon]);

  function splitTime(time) {
    const space = time.split(" ");
    const points = space[0].split(":");
    const concat = points[0].concat(`:${points[1]} ${space[1]}`);
    return concat;
  }

  if (loading) {
    return (
      <div className="m-4 md:m-0 md:ml-1 md:w-full md:h-auto flex items-center justify-center rounded-xl bg-orange-700 p-2 bg-opacity-25 shadow-lg">
        <Loader />
      </div>
    );
  }

  if (sunrise.length === 0) {
    return (
      <>
        <div className="m-4 md:m-0 md:ml-1 md:w-full md:h-auto flex h-fit flex-col rounded-xl bg-orange-700 p-2 bg-opacity-25 shadow-lg">
          <div className="flex w-full justify-center">
            The sunrise data its not avilable
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="m-4 md:m-0 md:ml-1 md:w-full md:h-auto flex h-fit flex-col rounded-xl bg-orange-700 p-2 bg-opacity-25 shadow-lg">
        <div className="flex w-full justify-center">
          <p className="font-bold text-em5  md:text-em2">Sunset-Sunrise</p>
        </div>
        <div className="flex flex-col my-3 w-full items-center justify-center">
          <div className="font-bold text-em4 grid grid-cols-2 justify-center w-full">
            <p className=" text-center  md:text-em1">Solar noon:</p>
            <p className=" text-center  md:text-em1">
              {splitTime(sunrise.results.solar_noon)}
            </p>
          </div>
          <div className="font-bold text-em4 grid grid-cols-2 w-full">
            <p className=" text-center  md:text-em1">Sunrise:</p>
            <p className=" text-center  md:text-em1">
              {splitTime(sunrise.results.sunrise)}
            </p>
          </div>
          <div className="font-bold text-em4 grid grid-cols-2 w-full">
            <p className=" text-center  md:text-em1">Sunset:</p>
            <p className=" text-center  md:text-em1">
              {splitTime(sunrise.results.sunset)}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 h-full">
          <div className="grid grid-rows-2 items-center justify-center">
            <div className="grid grid-rows-2 ">
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <FiSunrise />
                </div>
                <div className="flex justify-center">
                  <MdHomeWork />
                </div>
              </div>
              <p className="text-center  md:text-em1">
                {splitTime(sunrise.results.civil_twilight_begin)}
              </p>
            </div>
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <FiSunset />
                </div>
                <div className="flex justify-center">
                  <MdHomeWork />
                </div>
              </div>
              <p className="text-center  md:text-em1">
                {splitTime(sunrise.results.civil_twilight_end)}
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 items-center justify-center">
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <FiSunrise />
                </div>
                <div className="flex justify-center">
                  <RiSailboatFill />
                </div>
              </div>
              <p className="text-center  md:text-em1">
                {splitTime(sunrise.results.nautical_twilight_begin)}
              </p>
            </div>
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <FiSunset />
                </div>
                <div className="flex justify-center">
                  <RiSailboatFill />
                </div>
              </div>
              <p className="text-center  md:text-em1">
                {splitTime(sunrise.results.nautical_twilight_end)}
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 items-center justify-center">
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <FiSunrise />
                </div>
                <div className="flex justify-center">
                  <GiFallingStar />
                </div>
              </div>
              <p className="text-center  md:text-em1">
                {splitTime(sunrise.results.astronomical_twilight_begin)}
              </p>
            </div>
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <FiSunset />
                </div>
                <div className="flex justify-center">
                  <GiFallingStar />
                </div>
              </div>
              <p className="text-center  md:text-em1">
                {splitTime(sunrise.results.astronomical_twilight_end)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layer;
