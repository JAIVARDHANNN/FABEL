import React from 'react';
import { FaBookOpen, FaClock, FaUser, FaHashtag, FaArrowRight, FaQuoteLeft, FaStar, FaBookReader, FaFeather } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Reading Makes You a Better Person",
      excerpt: "Discover the science behind how reading improves empathy, cognitive function, and overall well-being.",
      readTime: "5 min read",
      author: "Sarah Parker",
      tags: ["Personal Growth", "Reading Habits"],
      featured: true
    },
    {
      id: 2,
      title: "Top 10 Must-Read Classics for 2024",
      excerpt: "Explore our curated list of timeless classics that continue to captivate readers across generations.",
      readTime: "8 min read",
      author: "Michael Brooks",
      tags: ["Book Lists", "Classics"]
    },
    {
      id: 3,
      title: "The Rise of Book Clubs in Digital Age",
      excerpt: "How modern book clubs are adapting to digital platforms while maintaining their community spirit.",
      readTime: "6 min read",
      author: "Emma Wilson",
      tags: ["Community", "Digital Reading"]
    }
  ];

  const quotes = [
    "A reader lives a thousand lives before he dies.",
    "Books are a uniquely portable magic.",
    "Reading is dreaming with open eyes."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-blue-600/5 transform -skew-y-6"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-blue-600/5 transform skew-y-6"></div>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="flex justify-center mb-6 transform hover:scale-110 transition-transform">
            <div className="relative">
              <FaBookOpen className="text-6xl text-blue-600" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 relative inline-block">
            Reading Corner
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </h1>
          <p className="text-lg text-blue-700 relative">
            Insights and Stories for Book Lovers
            <FaFeather className="inline-block ml-2 text-blue-400 animate-bounce" />
          </p>
        </div>

        {/* Floating Quote */}
        <div className="relative mb-12 overflow-hidden">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-100">
            <FaQuoteLeft className="text-3xl text-blue-400 mb-4" />
            <p className="text-xl text-blue-800 italic">
              {quotes[Math.floor(Math.random() * quotes.length)]}
            </p>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 
                ${post.featured ? 'border-l-4 border-blue-600 transform hover:-translate-y-1' : 'hover:border-l-4 hover:border-blue-400'}`}
            >
              {post.featured && (
                <div className="flex items-center mb-3 text-yellow-500">
                  <FaStar className="mr-2" />
                  <span className="text-sm font-medium">Featured Post</span>
                </div>
              )}
              
              <div className="flex items-center text-sm text-blue-600 mb-3 space-x-4">
                <span className="flex items-center">
                  <FaClock className="mr-2" />
                  {post.readTime}
                </span>
                <span className="flex items-center">
                  <FaUser className="mr-2" />
                  {post.author}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-blue-900 mb-3 hover:text-blue-700 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm
                    hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    <FaHashtag className="mr-1 text-xs" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="group text-blue-600 hover:text-blue-700 font-medium inline-flex items-center transition-all">
                Read Full Article
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-blue-600/5 transform rotate-1"></div>
          <div className="relative bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-600 rounded-full p-4 shadow-lg">
                <FaBookReader className="text-2xl text-white" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-4">
              Join Our Reading Community
            </h2>
            <p className="text-gray-600 mb-6">
              Get weekly book recommendations and reading insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-400 outline-none
                transition-all duration-300 focus:ring-2 focus:ring-blue-200"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium 
                hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['Latest Posts', 'Book Reviews', 'Author Interviews', 'Reading Tips'].map((link, index) => (
            <button
              key={link}
              className={`bg-white p-4 rounded-lg text-blue-900 font-medium hover:bg-blue-50 
                transition-all duration-300 text-center shadow hover:shadow-lg transform hover:-translate-y-1
                ${index === 0 ? 'border-b-4 border-blue-600' : ''}`}
           >
              {link}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;