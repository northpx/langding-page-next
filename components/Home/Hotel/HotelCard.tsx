import Image from 'next/image';
import React from 'react'
import { FaHeart } from 'react-icons/fa';

type Props = {
    hotel: {
        id: number;
        image: string;
        name: string;
        location: string;
        rating: number;
        reviews: string;
        price: string;
    }
}

const HotelCard = ({hotel}: Props) => {
  return (
    <div>
        <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
            {/* {add to favourite button} */}
            <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex flex-col justify-center items-center'>
                <FaHeart className='w-3 h-3'/>
            </div>
            {/* {overlay} */}
            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
            {/* {image} */}
            <Image
                src={hotel.image}
                alt={hotel.name} 
                width={500}
                height={500}
                className='overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110'
            />
        </div>
        {/* {content} */}
        <div>
            <p className='mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-300'>{hotel.name}</p>
            <p className='text-sm text-gray-600 mt-3 mb-6 font-medium'>{hotel.location}</p>
            {/* {rating} */}
            <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-600 rounded-md font-bold text-white text-sm">{hotel.rating}</div>
                <p className='text-sm text-gray-600'>Exceptional</p>
                <p className='text-sm font-bold text-gray-800'>{hotel.reviews} reviews</p>
            </div>
            <div className='mt-4 font-medium text-gray-700'>
                <p>Starting from <span className='text-blue-600 font-bold'>{`$${hotel.price}`}</span></p>
            </div>
        </div>
    </div>
  )
}

export default HotelCard