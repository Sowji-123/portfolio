import React from 'react';


const NavBar = () => {
  return (
    <div className="flex items-center w-[full] justify-between h-20 px-32 text-white ">
     <div>
        <h1 className="text-3xl text-[#E9D593]  font-extra bold mt-16 text-4xl ">SOWJANYA CHELLURI</h1>
        </div> 
        <ul className="flex space-x-14 ml-96 ">
            
            <li className="cursor-pointer text-[#E9D593] text-3xl">HOME</li>
            <li className="cursor-pointer text-[#E9D593] text-3xl">ABOUT</li>
            <li className="cursor-pointer text-[#E9D593] text-3xl">SKILLS</li>
            <li className="cursor-pointer text-[#E9D593] text-3xl">PROJECTS</li>
            <li className="cursor-pointer text-[#E9D593] text-3xl">CONTACT</li>
        </ul>
    </div>
  )
}

export default NavBar
