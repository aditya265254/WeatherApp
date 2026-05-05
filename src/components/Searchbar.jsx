import React from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = ({ city, setCity, fetchWeather }) => {
  return (
    <div>
      <div className="flex items-center justify-evenly border bg-[#F5F4ED] mx-10 mt-4 h-10 rounded-md">
        <input
          className="h-full outline-none"
          type="text "
          placeholder="Search City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e)=>{
            if (e.key === 'Enter') fetchWeather()
          }}
        />
        <CiSearch className="h-16 cursor-pointer" onClick={fetchWeather} />
      </div>
    </div>
  );
};

export default Searchbar;
