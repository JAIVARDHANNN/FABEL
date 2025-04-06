import React, { useState, useEffect } from 'react';
import { Card } from "flowbite-react";
import { FaBookOpen, FaShoppingCart, FaSearch, FaFilter, FaStar } from 'react-icons/fa';

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-16 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-blue-600/5 transform -skew-y-6"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-blue-600/5 transform skew-y-6"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6 transform hover:scale-110 transition-transform">
            <div className="relative">
              <FaBookOpen className="text-6xl text-blue-600" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Explore Our Book Collection
          </h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Discover a world of knowledge and adventure through our carefully curated selection
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for books..."
                className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-400 outline-none
                pl-10 transition-all duration-300 focus:ring-2 focus:ring-blue-200"
              />
              <FaSearch className="absolute left-3 top-3 text-blue-400" />
            </div>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium 
              hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <FaFilter />
              Filter
            </button>
          </div>
        </div>

        {/* Book Grid */}
        <div className="grid gap-8 mb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading ? (
            // Loading skeleton
            [...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg animate-pulse">
                <div className="h-96 bg-gray-200 rounded-t-xl"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))
          ) : (
            books.map(book => (
              <div key={book._id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={book.image_url} 
                    alt={book.book_title}
                    className="h-96 w-full object-cover rounded-t-xl"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    ${book.price || '9.99'}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="w-4 h-4" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(4.5)</span>
                  </div>
                  
                  <h5 className="text-xl font-bold text-blue-900 mb-2 line-clamp-1">
                    {book.book_title}
                  </h5>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {book.description || 'Discover this amazing book that will take you on an unforgettable journey.'}
                  </p>
                  
                  <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-medium 
                    hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group">
                    <FaShoppingCart className="transform group-hover:scale-110 transition-transform" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-16">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium shadow-lg
            hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
            Load More Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;