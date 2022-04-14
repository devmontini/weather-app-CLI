import React from "react";

const Days = ({ data }) => {
  const date = data.dt_txt.split(" ");
  const days = date[0].split("-");
  const theDay = days[1].concat(`/${days[2]}`);

  return (
    <>
      <div className="flex md:w-auto flex-col">
        <div className="flex w-full justify-evenly">
          <div className="flex flex-col items-center justify-center">
            <img
              className=" bg w-20 h-20"
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-em5  md:text-em2">{theDay}</p>
            <p className="font-bold text-em5  md:text-em2">
              {parseInt(data.main.temp)}C
            </p>
          </div>
        </div>
        <div className="flex w-full justify-evenly">
          <div className="grid grid-cols-2">
            <div className="mx-1">
              <p className="font-bold text-em4 md:text-em1">h: </p>
              <p className="font-bold text-em4 md:text-em1">s: </p>
            </div>
            <div>
              <p className="font-bold text-em4 md:text-em1">
                {data.main.humidity}%
              </p>
              <p className="font-bold text-em4 md:text-em1">
                {data.weather[0].main}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mx-1">
              <p className="font-bold text-em4 md:text-em1">max</p>
              <p className="font-bold text-em4 md:text-em1">min</p>
            </div>
            <div>
              <p className="font-bold text-em4 md:text-em1">
                {parseInt(data.main.temp_max)}C
              </p>
              <p className="font-bold text-em4 md:text-em1">
                {parseInt(data.main.temp_min)}C
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Days;
