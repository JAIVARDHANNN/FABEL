import React from 'react'
import Banner from '../Components/Banner'
import FavoriteBooks from './BestSellerBooks'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-blue-600/10 transform -skew-y-6"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-blue-600/10 transform skew-y-6"></div>
      
      {/* Floating circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative">
        <Banner />
        <div className="max-w-7xl mx-auto px-4">
          <BestSellerBooks />
          <FavBook />
          <PromoBanner />
          <OtherBooks />
          <Review />
        </div>
      </div>
    </div>
  )
}

export default Home