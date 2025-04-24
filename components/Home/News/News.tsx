import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='py-20'>
        {/* {section heading} */}
        <SectionHeading heading='Exciting Travel News for You'/>
        {/* {news card} */}
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-10 mt-20'>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center'>
                <NewsCard 
                    image='/images/n1.jpg'
                    title='Top 10 place to visit in Australia'
                    date='15 November 2024'
                />
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='100'>
                <NewsCard 
                    image='/images/n2.jpg'
                    title='Top 10 place to visit in Bangladesh'
                    date='25 November 2024'
                />
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='200'>
                <NewsCard 
                    image='/images/n3.jpg'
                    title='Top 10 place to visit in Pakistan'
                    date='22 November 2024'
                />
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='300'>
                <NewsCard 
                    image='/images/n4.jpg'
                    title='Top 10 place to visit in New Zealand'
                    date='5 November 2024'
                />
            </div>
        </div>
    </div>
  )
}

export default News