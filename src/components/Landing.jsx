import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../redux/actions";
import Home from "./modules/Home";
import Local from "./modules/Local";

const Landing = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      let coords = 0;

      await navigator.geolocation.getCurrentPosition((position) => {
        coords = position.coords;
      });

      setTimeout(async () => {
        await dispatch(getCountry(coords.latitude, coords.longitude));
        setLoading(false);
      }, 3500);
    }
    loadProducts();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="md:w-screen md:h-screen bg-black flex  m-0 justify-center  items-center ">
        <p>Loading... WeatherApp</p>
      </div>
    );
  }

  return (
    <div className="md:w-screen md:h-screen bg-black flex flex-col md:flex-none md:grid md:grid-cols-3 md:grid-rows-1 p-2">
      <div className="bg-landing w-full h-screen md:h-full bg-center bg-no-repeat bg-cover rounded-tl-xl rounded-tr-xl  md:rounded-tl-xl md:rounded-tr-none md:rounded-bl-xl">
        <div className="w-full px-3 h-full bg-orange-100 bg-opacity-10 rounded-tl-xl rounded-tr-xl  md:rounded-tl-xl md:rounded-tr-none md:rounded-bl-xl">
          <Local loc={location} />
        </div>
      </div>
      <div className="flex-grow p-3 md:col-span-2 w-full h-full bg-orange-600 bg-opacity-70  rounded-bl-xl rounded-br-xl  md:rounded-bl-none md:rounded-br-xl md:rounded-tr-xl">
        <Home />
      </div>
    </div>
  );
};

export default Landing;
