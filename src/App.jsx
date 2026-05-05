import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Searchbar from "./components/Searchbar";
import Weathercard from "./components/Weathercard";
import Weatherdetail from "./components/Weatherdetail";
import { ClipLoader } from "react-spinners";

const App = () => {
  let [city, setCity] = useState("kaparwar");
  let [weather, setWeather] = useState(null);
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchWeather();
  }, []);
  const fetchWeather = async () => {
    setLoading(true);
  
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
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    setCity("");
  };

  return (
    <div className="md:max-w-7xl md:mx-auto md:w-2/6 border md:mt-25 rounded-2xl overflow-auto  border-zinc-200 ">
      <Nav />
      <Searchbar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      {loading ? (
        <div className="flex justify-center mt-10">
          <ClipLoader color="#378ADD" size={50} />
        </div>
      ) : (
        <>
          <Weathercard weather={weather} />
          <Weatherdetail weather={weather} />
        </>
      )}
    </div>
  );
};

export default App;
