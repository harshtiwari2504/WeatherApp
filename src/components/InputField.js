import {BsSearch} from "react-icons/bs"
import {useState} from 'react'

function InputField({cityStateChanger}){
    const [userInput , setUserInput]= useState("")

    function handleChange(event){
       
        setUserInput(event.target.value)
    }
    

    function handleSubmit(event){
        event.preventDefault()
        cityStateChanger(userInput)
        setUserInput("")
    }

    return(
        <>
           
           <div className="flex justify-center md:w-[50%] w-[80%] mx-auto mt-15" >
            <form  onSubmit={handleSubmit} className="my-4 flex flex-row items-center justify-center gap-3 w-full">
                    <input onChange={handleChange} value={userInput} placeholder="Search the city..." type='text' className="shadow-md border border-slate-500 rounded-xl px-3 py-2 w-full items-center text-black" />
                    <button type="submit"><BsSearch size={27}/></button>
            </form>
            </div>
            
           
        </>
    )
    }

    export default InputField;