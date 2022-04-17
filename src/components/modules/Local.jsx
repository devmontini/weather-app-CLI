import React from "react";

const Local = ({ loc }) => {
  if (loc === 0 || undefined || null || [] || {}) {
    return (
      <>
        <div className="w-full h-full grid grid-rows-3">
          <div className="flex flex-col items-center justify-center">
            Your geolocation is disabled
          </div>
        </div>
      </>
    );
  }

  const icon = loc.weather[0].icon;

  return (
    <>
      <div className="w-full h-full grid grid-rows-3">
        <div className="flex flex-col items-center justify-center">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
          <h2 className="text-center font-bold text-em8 md:text-em3 text-border">
            {loc.name}
          </h2>
          <p className="text-center font-bold text-em4 md:text-em1_5 text-border">
            ({loc.sys.country})
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="text-center font-bold text-em15 md:text-em6 text-border">
              {parseInt(loc.main.temp)}c
            </h2>
          </div>
          <div className="flex w-full mt-4 md:mt-0 items-center justify-evenly">
            <div className="flex flex-col">
              <p className="text-center font-bold text-em4 md:text-em1_5 text-border">
                min
              </p>
              <p className="text-center font-bold text-em6 md:text-em1_5 text-border">
                {parseInt(loc.main.temp_min)}c
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-center font-bold text-em4 md:text-em1_5 text-border">
                feel
              </p>
              <p className="text-center font-bold text-em6 md:text-em1_5 text-border">
                {parseInt(loc.main.feels_like)}c
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-center font-bold text-em4 md:text-em1_5 text-border">
                max
              </p>
              <p className="text-center font-bold text-em6 md:text-em1_5 text-border">
                {parseInt(loc.main.temp_max)}c
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col w-full items-center justify-evenly">
            <p className="text-center font-bold text-em6 md:text-em1_5 text-border">
              Humidity
            </p>
            <p className="text-center font-bold text-em6 md:text-em1_5 text-border">
              {loc.main.humidity}%
            </p>
          </div>
          <div className="flex flex-col mt-5 md:mt-3 w-full items-center justify-evenly">
            <h3 className="text-center font-bold text-em6 md:text-em1_5 text-border">
              Wind
            </h3>
            <div className="flex w-full items-center justify-evenly">
              <div className="flex flex-col">
                <p className="text-center font-bold text-em4 md:text-em1_5 text-border">
                  speed
                </p>
                <p className="text-center font-bold text-em6 md:text-em1_5 text-border">
                  {loc.wind.speed}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-center font-bold text-em4 md:text-em1_5 text-border">
                  deg
                </p>
                <p className="text-center font-bold text-em6 md:text-em1_5 text-border">
                  {loc.wind.deg}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Local;
