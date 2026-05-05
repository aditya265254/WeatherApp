import React from "react";

const Weatherdetail = ({ weather }) => {
  if (!weather) return null;
  return (
    <div className="bg-[#F5F4ED] m-6 flex  items-center justify-evenly h-30 rounded-2xl">
      <div className="bg-[#FFFFFF] h-17 w-24 text-center flex flex-col items-center justify-center rounded-2xl">
        <p>Humidity</p>
        <p>{weather.main.humidity}</p>
      </div>
      <div className="bg-[#FFFFFF] h-17 w-24 text-center flex flex-col items-center justify-center rounded-2xl">
        <p>Wind</p>
        <p>{weather.wind.speed}</p>
      </div>
      <div className="bg-[#FFFFFF] h-17 w-24 text-center flex flex-col items-center justify-center rounded-2xl">
        <p>Feels like</p>
        <p>
          {weather.main.feels_like}
          <sup>o</sup>C
        </p>
      </div>
    </div>
  );
};

export default Weatherdetail;
