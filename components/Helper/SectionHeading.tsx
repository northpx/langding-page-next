import React from 'react'

type Props ={
    heading: string,

}

const SectionHeading = ({heading}: Props) => {
  return (
    <div className='w-[80%] mx-auto'>
        <p className='text-xl sm:text-3xl text-blue-950 font-bold'>{heading}</p>
        <p className='mt-2 text-gray-800 sm:text-base text-sm font-medium'>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  )
}

export default SectionHeading