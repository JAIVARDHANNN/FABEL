import React from "react";
import { FaBook, FaUsers, FaHeart, FaShippingFast } from "react-icons/fa";
import bg1 from '../assets/bg1.png';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              About Our Book Store
            </h1>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Where stories come alive and every book finds its perfect reader
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Book Store, we believe in the transformative power of books. Our mission is to create a haven for book lovers, 
              where every reader can find their next favorite story and every book finds its perfect home.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <FaBook className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Curated Collection</h3>
                <p className="text-gray-700">
                  Hand-picked books from every genre, ensuring quality and diversity in our selection.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <FaUsers className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Reader Community</h3>
                <p className="text-gray-700">
                  A welcoming space for book lovers to connect, share, and discover new stories together.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Founded in 2024, Book Store began as a small online platform with a simple goal: to make great books 
                  accessible to everyone. What started as a passion project has grown into a beloved destination for book lovers worldwide.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our journey has been guided by our love for literature and our commitment to providing an exceptional 
                  reading experience for our customers.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img src={bg1} alt="Reading illustration" className="w-full md:w-full rounded h-full" />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <FaHeart className="text-4xl text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Passion for Books</h3>
                <p className="text-gray-700">
                  We're driven by our love for literature and the joy of sharing great stories.
                </p>
              </div>
              <div className="text-center p-6">
                <FaBook className="text-4xl text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Quality Selection</h3>
                <p className="text-gray-700">
                  Every book in our collection is carefully chosen for its value and impact.
                </p>
              </div>
              <div className="text-center p-6">
                <FaShippingFast className="text-4xl text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Excellent Service</h3>
                <p className="text-gray-700">
                  We're committed to providing the best possible experience for our customers.
                </p>
              </div>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Join Our Community</h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a lifelong reader or just starting your reading journey, we welcome you to 
              explore our collection and become part of our growing community of book lovers.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
