import { useState , useEffect, useContext } from "react";
import axios from "axios";
import { WeatherContext } from "../App";

function Forecast (){
    const data=useContext(WeatherContext)


    const [forcastData , setForecastData] = useState([])

    useEffect(()=> {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=2203e8d6434a0cee809e7ad8f8e69490`
        axios.get(url).then(response =>{
            
            setForecastData(response.data.list)
            console.log(forcastData)
        }).catch(err => {
            console.log(err)
        })


    },)


    return (
<>
<div className="flex  flex-col text-center justify-center items-center gap-5">

<h2 className="text-4xl  font-bold">UPCOMING FORECAST</h2>

<div className="grid grid-cols-4  w-full p-2 md:w-[80%] gap-2  md:grid-cols-8 ">
 {
        forcastData.map(item => (
            <div className="shadow-lg shadow-slate-100 flex flex-col text-sm md:text-md p-1 rounded-md justify-center text-center items-center border">
                <p>{item.dt_txt.split(" ")[0]}</p>
                <p>{item.dt_txt.split(" ")[1]}</p>
                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="forcast-icon" />
                <p>{item.weather[0].description}</p>
                <p>{Math.floor(item.main.temp/10)}&deg;C</p>
            </div>
        ))
 }
</div>

</div>
</>
    )
}

export default Forecast;