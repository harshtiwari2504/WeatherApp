function TopBar({cityStateChanger}){
    const cities=[
        {title:"Delhi" ,id:1},
        {title:"Mumbai",id:2 },
        {title:"Bangalore",id:3},
        {title:"Ahemdabad",id:4},
        {title:"kolkata", id:5}
    ]

    function handleClick(event){
      
        cityStateChanger(event.target.value)
    }

    return(
        <>
            <h1 className="font-thin text-2xl text-center py-4 shadow-sm shadow-slate-900">TOP SEARCHES</h1>
            <div className="flex felx-row justify-around mt-5 text-black md:text-2xl text-md font-bold" >
                {cities.map(city=>(
                    <button value={city.title} onClick={handleClick} className="hover:text-red-500 md:text-xl" key={city.id}>{city.title}</button>
                ))}
            </div>
        </>
    )
}
export default TopBar;