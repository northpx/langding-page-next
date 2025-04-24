import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className='py-20'>
        {/* {section heading} */}
        <SectionHeading heading='Why Choose Us'/>
        {/* {content} */}
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-16 items-center'>
            {/* {1st content} */}
            <div data-aos='fade-up' data-aos-anchor-placement='top-center'>
                <WhyChooseCard image='/images/c1.svg' title='Best Price Guarantee' />
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='150'>
                <WhyChooseCard image='/images/c2.svg' title='Easy & Quick Booking' />
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='300'>
                <WhyChooseCard image='/images/c3.svg' title='Customer Care 24/7' />
            </div>

        </div>
    </div>
  )
}

export default WhyChoose