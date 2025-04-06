import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './dashboard.css'

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to <span className="text-blue-600">Fabels</span></h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover a world of stories, knowledge, and imagination through our carefully curated collection.</p>
        </div>

        {/* Swiper */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <Swiper
            style={{
              '--swiper-navigation-color': '#2563eb',
              '--swiper-pagination-color': '#2563eb',
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
            className="mySwiper rounded-xl overflow-hidden"
          >
            <SwiperSlide className="relative rounded-xl overflow-hidden" style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://c0.wallpaperflare.com/preview/757/248/881/blur-book-stack-books-bookshelves.jpg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px'
            }}>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <p className="text-white text-2xl font-serif max-w-2xl leading-relaxed mb-4">
                  "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
                </p>
                <div className="text-blue-200 text-xl font-semibold">- Dr. Seuss</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative rounded-xl overflow-hidden" style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1572061487381-7d2f92b2b5c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGJvb2t8ZW58MHx8MHx8fDA%3D")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px'
            }}>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <p className="text-white text-2xl font-serif max-w-2xl leading-relaxed mb-4">
                  "Books are a uniquely portable magic."
                </p>
                <div className="text-blue-200 text-xl font-semibold">- Stephen King</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative rounded-xl overflow-hidden" style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1481624362406-b7817fa45ecf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2tzJTIwb24lMjBhJTIwdGFibGV8ZW58MHx8MHx8fDA%3D")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px'
            }}>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <p className="text-white text-2xl font-serif max-w-2xl leading-relaxed mb-4">
                  "The man who does not read has no advantage over the man who cannot read."
                </p>
                <div className="text-blue-200 text-xl font-semibold">- Mark Twain</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Dashboard