import React from "react";

const Weathercard = ({ weather }) => {
  if (!weather) return null;
  return (
    <div className="bg-[#E6F1FB] m-6 text-center rounded-2xl">
      <h1 className="py-4 text-[20px] font-semibold">{weather.name}</h1>
      <p className="py-4 text-2xl">{weather.main.temp}</p>
      <p className="py-4">{weather.weather[0].description}</p>
    </div>
  );
};

export default Weathercard;
