import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInternetExplorer, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-16'>
        <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* {1st part} */}
            <div className='space-y-5'>
                <p className='text-lg font-bold'>Company</p>
                <ul className='space-y-5'>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>About us</li>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Careers</li>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Blogs</li>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Gift Cards</li>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Magazine</li>
                </ul>
            </div>
            {/* {2nd part} */}
            <div className='space-y-5'>
                <p className='text-lg font-bold'>Support</p>
                <ul className='space-y-5'>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Contact</li>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Legal Notice</li>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Privacy Policy</li>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Terms & Conditions</li>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Sitemap</li>
                </ul>
            </div>
            {/* {3rd part} */}
            <div className='space-y-5'>
                <p className='text-lg font-bold'>Other Services</p>
                <ul className='space-y-5'>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Car hire</li>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Activity Finder</li>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Tour List</li>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Flight Finder</li>
                    <li className='text-gray-800 hover:text-blue-950 text-sm cursor-pointer font-medium'>Travel Agents</li>
                </ul>
            </div>
            {/* {4th part} */}
            <div className='space-y-6'>
                <p className='text-lg font-bold'>Contact Us</p>
                <div className='space-y-1'>
                    <p className='text-gray-600 text-sm'>Our Mobile Number</p>
                    <p className='font-bold text-gray-700 text-base'>+012 345 6788</p>
                </div>
                <div className='space-y-1'>
                    <p className='text-gray-600 text-sm'>Our Email</p>
                    <p className='font-bold text-gray-700 text-base'>example@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='my-8 py-8 border-gray-300 border-t w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
            <p className='text-center md:text-left'>Copyright © 2024 Webdev. All rights reserved</p>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                <span>Social: </span>
                <Link href='#' className='text-gray-500 hover:text-gray-800'><FaTwitter /></Link>
                <Link href='#' className='text-gray-500 hover:text-gray-800'><FaFacebook /></Link>
                <Link href='#' className='text-gray-500 hover:text-gray-800'><FaInternetExplorer /></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer