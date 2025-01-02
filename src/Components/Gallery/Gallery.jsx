import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from 'react-icons/fa'
import Logo from '../../assets/Images/Logo.png'

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const galleryImages = [
    {
      url: Logo,
      title: "Modern Classrooms",
      category: "Facilities",
      description: "Well-equipped smart classrooms for interactive learning"
    },
    {
      url: Logo,
      title: "Sports Activities",
      category: "Athletics",
      description: "Students engaging in various sporting activities"
    },
    {
      url: Logo,
      title: "Science Laboratory",
      category: "Academics",
      description: "State-of-the-art science labs for practical learning"
    },
    {
      url: Logo,
      title: "Islamic Programs",
      category: "Cultural",
      description: "Students participating in Islamic cultural events"
    },
    {
      url: Logo,
      title: "Modern Library",
      category: "Facilities",
      description: "Extensive collection of books and digital resources"
    },
    {
      url: Logo,
      title: "Computer Laboratory",
      category: "Technology",
      description: "Modern computer facilities for digital literacy"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">School Life</h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through our facilities and activities that make 
            Nimotallahi Memorial College a vibrant learning community.
          </p>
        </div>

        {/* Main Gallery Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-2">
                      <span className="text-blue-400 text-sm font-medium">
                        {image.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>

            {/* Expand Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
            >
              <FaExpand className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-4 grid grid-cols-6 gap-2">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative aspect-[16/9] rounded-lg overflow-hidden ${
                  currentSlide === index ? 'ring-2 ring-blue-900' : ''
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-black/25 ${
                  currentSlide === index ? 'bg-opacity-0' : ''
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* View All Gallery Button */}
        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
          >
            View Full Gallery
            <FaTimes className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={galleryImages[currentSlide].url}
            alt={galleryImages[currentSlide].title}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  )
}

export default Gallery
