import React, { useState } from 'react'
import NavWrapper from '../../Components/NavWrapper'
import { FaGraduationCap, FaMosque, FaFutbol, FaChalkboardTeacher, FaFilter } from 'react-icons/fa'
import Logo from '../../assets/Images/Logo.png'

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

 
  const galleryItems = [
    {
      id: 1,
      category: 'academic',
      title: 'Graduation Ceremony 2023',
      image: Logo,
      date: 'July 2023',
      type: 'image'
    },
    {
      id: 2,
      category: 'islamic',
      title: 'Ramadan Program',
      image: Logo,
      date: 'March 2024',
      type: 'image'
    },
    {
      id: 3,
      category: 'sports',
      title: 'Inter-House Sports',
      image: Logo,
      date: 'February 2024',
      type: 'image'
    },
    {
      id: 4,
      category: 'academic',
      title: 'Science Fair Projects',
      image: Logo,
      date: 'April 2024',
      type: 'image'
    },
    {
      id: 5,
      category: 'islamic',
      title: 'Quranic Competition',
      image: Logo,
      date: 'May 2024',
      type: 'image'
    },
    {
      id: 6,
      category: 'events',
      title: 'Cultural Day Celebration',
      image: Logo,
      date: 'March 2024',
      type: 'image'
    },
    
  ]

  const filters = [
    { id: 'all', name: 'All', icon: <FaFilter /> },
    { id: 'academic', name: 'Academic', icon: <FaGraduationCap /> },
    { id: 'islamic', name: 'Islamic', icon: <FaMosque /> },
    { id: 'sports', name: 'Sports', icon: <FaFutbol /> },
    { id: 'events', name: 'Events', icon: <FaChalkboardTeacher /> },
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <NavWrapper>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">School Gallery</h1>
            <p className="text-xl text-gray-300">Capturing moments and memories</p>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-blue-900 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-2">{filter.icon}</span>
                  {filter.name}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Image Container */}
                  <div className="relative aspect-video">
                    <div className="absolute inset-0 bg-gray-200">
                      <div className="w-full h-full bg-gray-300">
                        <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{item.date}</span>
                      <span className="capitalize">{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Featured Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {[
                {
                  id: 1,
                  title: "School Documentary 2024",
                  thumbnail: Logo,
                  duration: "5:30",
                  description: "A brief overview of our school's facilities and activities"
                },
                {
                  id: 2,
                  title: "Annual Day Celebrations",
                  thumbnail: Logo,
                  duration: "8:45",
                  description: "Highlights from our annual day celebrations"
                }
              ].map((video) => (
                <div key={video.id} className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="relative aspect-video">
                    <div className="absolute inset-0 bg-gray-200">
                      
                      <div className="w-full h-full bg-gray-300">
                        <img src={Logo} alt="" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </NavWrapper>
  )
}

export default Gallery
