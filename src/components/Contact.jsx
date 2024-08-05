import React from "react";


function Skills() {
  return (
    <div className="flex flex-col ml-24 mt-20">
        <div className="text-[#E9D593] text-5xl font-bold mb-16">CONTACT</div>
        <div className="bg-[#292929] w-[900px] h-[500px] mx-96">

          <div className="flex flex-col mx-11 my-11 space-y-8">
          <div className=" w-[300px] h-[40px] rounded-3xl text-white pt-6 pl-4 font-semibold text-2xl">NAME:</div>  

          <div className=" w-[300px] h-[40px] rounded-3xl text-white pt-8 pl-4 font-semibold text-2xl">EMAIL:</div>

          <div className=" w-[300px] h-[40px] rounded-3xl text-white pt-8 pl-4 font-semibold text-2xl">SUBJECT:</div>

          <div className=" w-[300px] h-[120px] rounded-3xl text-white pt-8 pl-4 font-semibold text-2xl">TEXT:</div>
           
          <div>
          <button className="text-black bg-white ml-56 flex justify-center items-center px-9 py-5 rounded-2xl text-2xl font-bold">Contact me</button>
          </div>
            
          
          </div>
          
         
        </div>
    </div>
  
  );
}

export default Skills;