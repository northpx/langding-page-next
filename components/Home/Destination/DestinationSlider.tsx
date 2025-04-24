'use client'
import { destinationData } from '@/data/data';
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const DestinationSlider = () => {
  return (
    <div>
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
        >
            {
                destinationData.map((data) => {
                    return (
                        <div className='m-3' key={data.id}>
                            <div className="relative h-[400px]">
                                {/* {overlay} */}
                                <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                                {/* {image} */}
                                <Image 
                                        src={data.image}
                                        alt={data.country}
                                        width={500}
                                        height={500}
                                        className='h-full w-full object-cover rounded-lg'
                                    />
                            </div>
                            <p className='text-lg font-semibold mt-4'>{data.country}</p>
                            <p className='text-sm text-gray-600'>{data.travelers} travelers</p>
                        </div>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default DestinationSlider