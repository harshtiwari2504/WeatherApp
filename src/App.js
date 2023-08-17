import InputField from "./components/InputField";
import TopBar from "./components/TopBar";
import Intro from "./components/Intro";
import { useState,useEffect,createContext } from "react";
import axios from "axios";
import Forecast from "./components/Forecast";

export const WeatherContext=createContext();

function App(){
const[data,setData]=useState([])
const[city,setCity]=useState("Noida")
const[bg,setBg]=useState("")

useEffect(()=>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ca47a5b262e15d33fdc82db927a31a9`
  axios.get(url).then(response =>{
    handlebg(response.data.weather[0].id)
      setData(response.data)
      
  }).catch(err =>{
    console.log(err);
  })


},[city])

function handlebg(id){
  if( id >= 200  && id < 300){
   setBg("bg-[url('./images/ThunderStorm.webp')]")
  }
 
  else if( id >= 300  && id < 600){
   setBg("bg-[url('./images/Drizzle.webp')]")
  }
 
  else if( id >= 600  && id < 700){
   setBg("bg-[url('./images/Snow.webp')]")
  }
 
  else if( id >= 700  && id < 800){
   setBg("bg-[url('./images/haze.webp')]")
  }
 
  else if( id >= 801 && id < 900){
   setBg("bg-[url('./images/Clouds.webp')]")
  }
 
  else{
   setBg("bg-[url('./images/clear.webp')]")
  }
 
 }


  return(
    <>{data.length===0 ? (<div>Loading...</div>):
    <>
    <div className={`w-full pb-8 bg-cover text-white h-fit ${bg}`}>
    <WeatherContext.Provider value={data}>
    <TopBar cityStateChanger={setCity}/>
    <InputField cityStateChanger={setCity}/>
    <Intro/>
    <Forecast/>
    </WeatherContext.Provider>
    </div>
    </>
    }
    </>
  )
}
export default App;