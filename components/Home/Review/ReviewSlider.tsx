'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import {EffectCards} from 'swiper/modules';
import { reviewData } from '@/data/data';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const ReviewSlider = () => {
  return (
    <div>
        <Swiper effect='cards' grabCursor={true} modules={[EffectCards]} className='md:w-[450px] md:h-[350px] w-[90%] h-[300px]'>
            {
                reviewData.map((data) => {
                    return (
                        <SwiperSlide key={data.id} className='bg-white rounded-3xl block'>
                            <div className='w-[80%] mx-auto mt-16'>
                                <p className='text-xs sm:text-sm md:text-base font-semibold'>{data.review}</p>
                                {/* {stars} */}
                                <div className='flex items-center mt-4 space-x-1'>
                                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-300'/>
                                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-300'/>
                                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-300'/>
                                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-300'/>
                                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-300'/>
                                </div>
                                {/* {profile} */}
                                <div className='mt-10'>
                                    <div className='flex items-center space-x-4'>
                                        <Image src={data.image} alt='image' width={60} height={60} className='rounded-full' />
                                        <div>
                                            <p className='text-sm sm:text-lg font-semibold'>{data.name}</p>
                                            <p className='text-xs sm:text-base text-gray-600'>Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
  )
}

export default ReviewSlider