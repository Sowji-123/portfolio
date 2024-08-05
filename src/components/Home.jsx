import React from "react";
const Home =() =>{
    return (
        <div  className="flex flex-row ">
         <div className=" space-y-3 px-32 flex flex-col mt-32 h-full ">
         <p className="text-[#E9D593] text-5xl">HELLO !</p>
         <div className="flex space-x-3">

         <p className="text-white text-5xl font-extrabold">I'M </p>
         <p className="text-[#E9D593] text-5xl font-extrabold">WEB DEVELOPER! </p>
         
         </div>
         

         
         <div className="space-x-6 font-small pt-5">

         
            
            <button  className=" text-white bg-black rounded-xl px-7 py-4">Download CV</button>
         </div>
         </div>

         <div className="w-[400px] ml-auto mr-12">
            <img src="/profile.jpg" className="rounded-xl" alt="" />
         </div>
 
         
        </div>
    )
}
export default Home;
