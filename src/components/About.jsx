import React from "react";

function About() {
  return (
    <div className=" w-[75%]  flex flex-col mx-32 mt-14">
      <div className="flex justify-start flex-col w-[60%]">
        <p className="text-[#E9D593] text-4xl font-extrabold ">ABOUT ME</p>
        
        <p className=" text-[#E9D593] text-xl mt-4 font-medium ">
        I'm a second-year CSE graduate,passionate about technology. I have a self-motivated and can-do attitude,
        in challenging and dynamic environments.seeking a competitive position to enhance my skills& contribute 
        to a professional organization.I'm very much passionate to learn new stuff that interests me and can help 
        me to get better. .
        </p>
        <div className="mt-14">
          <div className="flex flex-column ">
            <div className="text-white w-[200px] text-2xl font-bold">Name:</div>
            <div className="text-white text-2xl "> sowjanya chelluri</div>
          </div>

          <div className="flex flex-column mt-7">
            <div className="text-white w-[200px] text-2xl font-bold">
              Date Of Birth:
            </div>
            <div className="text-white text-2xl">03-11-2003</div>
          </div>

          
          

          <div className="flex flex-column mt-7">
            <div className="text-white w-[200px] text-2xl font-bold">Email:</div>
            <div className="text-white text-2xl">
              sowjanya.chelluri03@gmail.com
            </div>
          </div>

          <div className="flex flex-column mt-7">
            <div className="text-white w-[200px] text-2xl font-bold">Phone:</div>
            <div className="text-white text-2xl"> +91 8463991180</div>
          </div>

          
        </div>
      </div>
      
    </div>
    
  );
}

export default About;
