import Image from 'next/image'
import React from 'react'

type Props ={
    image: string,
    title: string
}

const WhyChooseCard = ({image, title}:Props) => {
  return (
    <div className='text-center'>
        <Image src={image} width={70} height={70} alt='image' className='mx-auto' />
        <div>
            <p className='mt-6 text-lg text-gray-900 font-medium'>{title}</p>
            <p className='mt-2 text-xs font-medium text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
  )
}

export default WhyChooseCard