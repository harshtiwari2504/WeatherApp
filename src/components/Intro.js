import { useContext } from "react";
import { WeatherContext } from "../App";
import {BsFillSunriseFill , BsFillSunsetFill ,BsWind ,    BsFillDropletFill , BsCloudFill, BsEyeFill, BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs'

function Intro(){
     const data=useContext(WeatherContext);

    return(
        <>
        <div className="  my-8  text-center items-center justify-center flex flex-col">
            <div className="flex flex-col items-center text-center justify-center" >
                <h3 className="text-3xl mb-4 font-bold">{data.name} {data.sys.country} </h3>
                <h3 className="text-3xl mb-4 font-bold">{Math.floor(data.main.temp / 10)}&deg;C</h3>
                <h3 className="text-2xl font-bold">{data.weather[0].description}</h3>
                <img className="w-full" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}  alt="icon"/>
            </div>

            <div className="flex flex-col items-center justify-center text-center mt-8 gap-5">
                <div className="flex gap-3">
                    <p className="flex gap-3"><BsFillSunriseFill size={25}/>Sunrise-{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p>|</p>
                    <p className="flex gap-3"><BsFillSunsetFill size={25}/>Sunset-{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
                
                <div className="flex gap-3">
                 <p className='flex gap-3'><BsEyeFill size={25}/>visibility-{data.visibility/1000}km</p>
                 <p>|</p>
                 <p className='flex gap-3'><BsWind size={25}/>Wind Speed-{data.wind.speed}km/hr</p>
                </div>

                <div className="flex gap-3">
                 <p className='flex gap-3'><BsCaretUpFill size={25}/>Maximum-{Math.floor(data.main.temp_max / 10)}&deg;C</p>
                 <p>|</p>
                 <p className='flex gap-3'><BsCaretDownFill size={25}/>Minimum-{Math.floor(data.main.temp_min/10)}&deg;C</p>
                </div>

                <div className="flex gap-3">
                 <p className='flex gap-3'><BsFillDropletFill size={25}/>Humidity-{data.main.humidity}</p>
                 <p>|</p>
                 <p className='flex gap-3'><BsCloudFill size={25}/>Cloud-{data.clouds.all}</p>
                </div>


            </div>

        </div>
        </>
    )
    }

export default Intro;