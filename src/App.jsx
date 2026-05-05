import React, { useState } from "react";
import Nav from "./components/Nav";
import Searchbar from "./components/Searchbar";
import Weathercard from "./components/Weathercard";
import Weatherdetail from "./components/Weatherdetail";

const App = () => {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`,
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="">
      <Nav />
      <Searchbar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <Weathercard weather={weather} />
      <Weatherdetail weather={weather} />
    </div>
  );
};

export default App;
