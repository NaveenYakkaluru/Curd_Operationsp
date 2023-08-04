import { useState } from "react";
import fetchWeather from "./fetchweather";
function App() {
    const [query,setQuery]=useState("")
    const [weather,setWeather]=useState({})
    const handleChange=(e)=>{
        setQuery(e.target.value)
    }

    const search= async (e)=>{
        if(e.code ==="Enter"){
    let data=await fetchWeather(query)
    setWeather(data)
    setQuery("")
        }
        
    }

    return(
        <div>
            <input type="text"  value={query} placeholder="enter city name" onChange={handleChange} onKeyPress={search}></input>

        {weather.main &&

            <div id="city">
               {weather.name}
                <span>{weather.sys.country}</span>

                <div id="temp">
                    {weather.main.temp}
                    <span>&deg;</span>
                </div>
                <div>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png"/>
                    <p>clouds</p>
                </div>

            </div>
}

        </div>
    )
}
export default App;