
import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'


const NewsLetter = () => {
  return (
    <div className='w-full py-20 bg-black mx-auto flex flex-col items-center justify-center text-white gap-10'>
        <div className='mt-10'>
            <BsEnvelopePaper className='w-16 h-16'/>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-lg sm:text-xl md:text-2xl font-semibold  tracking-widest'>Your Travel Journey Starts Here</p>
            <p className='text-xs sm:text-sm'>{`Sign up and we'll send the best deals to you`}</p>
        </div>
        <div className='w-full flex flex-col gap-3 justify-center items-center'>
            <input type="text"  className='px-6 py-3.5 text-black bg-white w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none placeholder:text-gray-500' placeholder='Email'/>
            <button type='submit'className='px-6 py-3.5 bg-blue-900 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none font-normal hover:cursor-pointer hover:bg-blue-950 transition-all duration-300'>
              Subscribe
            </button>
        </div>
    </div>
  )
}

export default NewsLetter