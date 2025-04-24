import React from 'react'
import {  FaCalendarWeek, FaMap } from 'react-icons/fa'
import {  FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
  return (
    <div className='relative bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
        {/* {1st search input} */}
        <div className='flex items-center space-x-6'>
            <FaMap className='w-7 h-7 text-blue-500' />
            <div className='flex flex-col gap-1'>
                <p className='text-lg font-medium'>Location</p>
                <input type="text" placeholder='Where are you going?' className='outline-none border-none placeholder:text-gray-800'/>
            </div>
        </div>
        {/* {2nd search input} */}
        <div className='flex items-center space-x-6'>
            <FaCalendarWeek className='w-7 h-7 text-blue-500' />
            <div className='flex flex-col gap-1'>
                <p className='text-lg font-medium'>Start date</p>
                <input type="date" className='outline-none border-none'/>
            </div>
        </div>
        {/* {3rd search input} */}
        <div className='flex items-center space-x-6'>
            <FaCalendarWeek className='w-7 h-7 text-blue-500' />
            <div className='flex flex-col gap-1'>
                <p className='text-lg font-medium'>End date</p>
                <input type="date" className='outline-none border-none '/>
            </div>
        </div>
        {/* {4th search input} */}
        <div className='flex items-center space-x-6'>
            <FaUserGroup className='w-7 h-7 text-blue-500' />
            <div className='flex flex-col gap-1'>
                <p className='text-lg font-medium'>Guest</p>
                <p className='text-base font-normal'>1 guest 1 room</p>
            </div>
        </div>
    </div>
  )
}

export default SearchBox