import React, { useState } from "react";
import Nav from "./components/Nav";
import Searchbar from "./components/Searchbar";
import Weathercard from "./components/Weathercard";
import Weatherdetail from "./components/Weatherdetail";

const App = () => {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  let [error, setError] = useState("");
  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`,
      );
      const data = await res.json();
      if (data.cod !== 200) {
        setError("City not found!");
        setWeather(null);
      } else {
        setError("");
        setWeather(data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="md:max-w-7xl md:mx-auto md:w-2/6 border md:mt-25 rounded-2xl overflow-auto  border-zinc-200 ">
      <Nav />
      <Searchbar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <Weathercard weather={weather} />
      <Weatherdetail weather={weather} />
    </div>
  );
};

export default App;
