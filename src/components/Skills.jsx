import React from 'react'


function Skills() {
  return (
    <div className=" mt-14 flex flex-col mx-32">
       <h2 className=" text-4xl font-bold mb-5 text-[#E9D593]">My Skills</h2>
       <div className='flex gap-20 w-full h-[600px]'>
        <div className='flex flex-col gap-3'>
        <div className='bg-white w-[90px] h-full'>
          <div className='bg-black h-[10%] '></div>
        </div>
        <p className='text-center text-xl font-bold text-white'>PYTHON</p>
        </div>

        <div className='flex flex-col gap-3'>
        <div className='bg-white w-[90px] h-full'>
          <div className='bg-black h-[20%] '></div>
        </div>
        <p className='text-center text-xl font-bold text-white'>HTML</p>
        </div>

        <div className='flex flex-col gap-3'>
        <div className='bg-white w-[90px] h-full'>
          <div className='bg-black h-[45%] '></div>
        </div>
        <p className='text-center text-xl font-bold text-white'>CSS</p>
        </div>

        <div className='flex flex-col gap-3'>
        <div className='bg-white w-[90px] h-full'>
          <div className='bg-black h-[45%] '></div>
        </div>
        <p className='text-center text-xl font-bold text-white'>JAVASCRIPT</p>
        </div>

        <div className='flex flex-col gap-3'>
        <div className='bg-white w-[90px] h-full'>
          <div className='bg-black h-[60%] '></div>
        </div>
        <p className='text-center text-xl font-bold text-white'>C</p>
        </div>
       </div>
    </div>
  )
}

export default Skills
