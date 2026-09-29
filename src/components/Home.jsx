import axios from "axios";
import { useState } from "react";
import { Oval } from "react-loader-spinner";

const Home = () => {
  const [input, setInput] = useState("");
  const [ Weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  })

  const toData = () => {
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    ];
    const currentDate = new Date();
    const data = `${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    return data;
  }

  const Search =(event) => {
    if(event.key === "Enter"){
      setInput('');
      setWeather({...Weather, loading: true})
axios
  .get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: input,
      units: "metric",
      appid: "d8d1b2f06f7c84a65e873dbbfa3b3116",
    },
  })
  .then((res) => {
    console.log(res);
    setWeather({data: res.data, loading:false, error:false})
  })
  .catch((err) => {
    console.log(err);

    setWeather({
      ...Weather,
      data: {},
      error: true,
    });
    });

  }
};
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto flex justify-center items-center">

        <div className="w-130 h-160 mx-auto mt-5 rounded-3xl
                  bg-linear-to-br from-sky-500/30 to-cyan-300/10
                  backdrop-blur-md border border-white/20">

          {/* Title */}
          <div className="flex justify-center pt-5 text-3xl font-bold ">
            <p className="bg-linear-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Weather</p>
          </div>

          {/* Search */}
          <div className="flex justify-center mt-4">
            <input
              type="text"
              placeholder="Search city..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={Search}
              className="text-gray-700 w-75 h-10 text-center rounded-2xl bg-white outline-none"
            />
          </div>

          {/* Weather Card */}
          <div className="flex justify-center mt-15 cursor-pointer">
            <div className="border border-cyan-100 bg-slate-800 w-75 h-95 rounded-2xl">

              {/* Weather information will come here */}
              {
                Weather.loading && (
                  <div className="flex justify-center items-center mt-30">
                  <Oval type="Oval" color="green" className="flex justify-center items-center" height={80} width={80} ></Oval>
                   </div>
                )
              }
              {
                Weather.error && (
                  <div >
                    <span className="text-red-500 mt-40 text-4xl flex justify-center items-center">City Not Found</span>
                  </div>
                )
              }
              {
                Weather && Weather.data && Weather.data.main && (
                <div>
                  <div className=" flex justify-center text-white mt-5 text-2xl font-bold">
                    <h2>{Weather.data.name},
                      <span>
                        {Weather.data.sys.country}
                      </span>
                    </h2>
                  </div>
                  <div className="flex justify-center mt-2 text-slate-400">
                    <span>
                       {toData()}
                    </span>
                  </div>
                  <div className=" flex justify-center mt-10 text-3xl font-bold text-cyan-200">
                    <img
                      src={`http://openweathermap.org/img/wn/${Weather.data.weather[0].icon}@2x.png`}
                      alt="Weather Icon"
                    />
                    {Math.round(Weather.data.main.temp)}°C
                    
                  </div>
                  <div className="*:flex justify-center items-center mt-6  text-lg font-bold">
                     <p className="flex justify-center text-gray-300">{Weather.data.weather[0].description.toUpperCase()}</p>
                     <p className="flex justify-center mt-3 text-blue-600"><p className="text-cyan-100 pr-1">Wind Speed: </p> {Weather.data.wind.speed} m/s</p>
                  </div>
                </div>
                  
                )
              }
              

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};



export default Home;