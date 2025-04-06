import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from "../assets/awardbooks.png";

const PromoBanner = () => {
  return (
    <div className='mt-16 relative overflow-hidden'>
      <div className='py-12 bg-gradient-to-r from-blue-200 to-blue-100 px-4 lg:px-24'>
        {/* Decorative Elements */}
        <div className='absolute top-0 left-0 w-32 h-32 bg-blue-300/20 rounded-full -translate-x-16 -translate-y-16'></div>
        <div className='absolute bottom-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full translate-x-16 translate-y-16'></div>
        
        <div className='flex flex-col md:flex-row justify-between items-center relative z-10'>
          <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold mb-6 leading-snug text-gray-800'>2025 National Book Awards for Fiction shortlist</h2>
            <Link to="/shop" className='mt-12 block'>
              <button className='bg-blue-500 text-white font-semibold px-5 py-2 rounded hover:bg-blue-600 transition-all duration-300'>
                Get Promo Code
              </button>
            </Link>
          </div>
          <div className='mt-8 md:mt-0'>
            <img src={bookPic} alt="" className='w-96 mr-5 drop-shadow-lg transform hover:scale-105 transition-transform duration-300'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromoBanner