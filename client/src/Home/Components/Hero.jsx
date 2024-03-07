import React from "react";
import { BsSearch } from "react-icons/bs";

const Hero = () =>{

    
    return(
        <section className="bg-heroBanner mx-16 rounded-xl h-[75vh] bg-no-repeat bg-center flex flex-col gap-7 justify-center items-center text-white">
           <h1 className="text-5xl font-extrabold">Discover Your New Home</h1>

           <h3 className="font-extrabold text-xl">Helping 100 million renters find their perfect fit.</h3>
            <form >
            <div className="w-[30rem] h-[4rem] rounded-3xl bg-white flex justify-around">


            <input type="text" placeholder="Enter a City Name" className="block w-5/6 px-3 rounded-3xl outline-none text-black font-bold text-xl"/>
            <button type="submit" className="bg-red-600 rounded-full p-3 my-2"> 
                <BsSearch className="w-6 h-6" />  
            </button>



           
            </div>
           </form>

             
        </section>

    )
}


export default Hero