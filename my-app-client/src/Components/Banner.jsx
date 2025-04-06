import React from 'react'
import BannerCard from '../homes/BannerCard'

const Banner = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='px-4 lg:px-24 bg-gradient-to-r from-blue-200 to-blue-100'>
        {/* Decorative Elements */}
        <div className='absolute top-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full -translate-x-32 -translate-y-32'></div>
        <div className='absolute bottom-0 right-0 w-72 h-72 bg-blue-300/20 rounded-full translate-x-32 translate-y-32'></div>
        
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40 relative z-10'>
          {/* left side */}
          <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-gray-800'>Buy and Sell Your Books <span className='text-blue-600'>for the Best Prices</span></h2>
            <p className='md:w-4/5 text-gray-600'>Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.</p>
            <div className='flex'>
              <input 
                type='search' 
                name='search' 
                id='search' 
                placeholder='Search a book' 
                className='py-2 px-4 rounded-l-lg w-full md:w-80 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300'
              />
              <button className='bg-blue-500 px-6 py-2 text-white font-medium rounded-r-lg hover:bg-blue-600 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'>
                Search
              </button>
            </div>
          </div>
          {/*right side*/}
          <div className='mr-15'>
            <div className='transform hover:scale-105 transition-transform duration-300'>
              <BannerCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner