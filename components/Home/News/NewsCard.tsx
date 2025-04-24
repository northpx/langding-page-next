import Image from 'next/image'
import React from 'react'

type Props = {
    image: string,
    title: string,
    date: string
}

const NewsCard = ({image, title, date}: Props) => {
  return (
    <div className='flex flex-col gap-8'>
        <div className='h-[300px] w-full'>
            <Image src={image} alt='title' width={500} height={600} className='overflow-hidden w-full h-full object-cover rounded-lg'/>
        </div>
        <div className='flex flex-col flex-wrap gap-3'>
            <p className='text-xl font-semibold cursor-pointer text-gray-800 hover:text-blue-950 transition-all duration-300'>{title}</p>
            <p className='text-sm text-gray-600'>{date}</p>
        </div>
    </div>
  )
}

export default NewsCard