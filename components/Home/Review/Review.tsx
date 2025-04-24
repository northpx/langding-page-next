import React from 'react'
import ReviewSlider from './ReviewSlider'
import { FaStar } from 'react-icons/fa'

const Review = () => {
  return (
    <div className='py-20 flex items-center justify-center flex-col bg-[#1c4baa]'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* {review content} */}
            <div>
                <p className='text-2xl font-semibold text-white'>What our customers are saying us?</p>
                <p className='mt-6 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt fugiat praesentium dolores facilis delectus modi culpa aliquid deserunt ad!</p>
                <div className='mt-6 flex items-center space-x-6'>
                    <div>
                        <p className='text-2xl font-bold text-white'>4.88</p>
                        <p className='text-white mb-2'>Overall Rating</p>
                        <div className='flex items-center'>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                        </div>
                    </div>
                </div>
            </div>
            {/* {review slider} */}
            <div className="overflow-hidden">
                <ReviewSlider />
            </div>
        </div>
    </div>
  )
}

export default Review