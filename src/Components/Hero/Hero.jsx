import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaBook, FaMosque, FaChalkboardTeacher } from 'react-icons/fa'
import Logo from '../../assets/Images/Logo.png'

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Welcome to Nimotallahi Memorial College",
      subtitle: "Nurturing Excellence in Islamic Education",
      description: "Providing quality education with strong Islamic values since 2005",
      image: Logo,
      cta: { text: "Apply Now", link: "/admissions" }
    },
    {
      title: "Academic Excellence",
      subtitle: "Preparing Future Leaders",
      description: "Comprehensive curriculum combining modern education with Islamic teachings",
      image: Logo,
      cta: { text: "Learn More", link: "/academics" }
    },
    {
      title: "Islamic Values",
      subtitle: "Building Strong Character",
      description: "Fostering spiritual growth and moral development",
      image: Logo,
      cta: { text: "Discover More", link: "/about" }
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[calc(100vh-64px)] bg-gray-900">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-500 transform">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-400 mb-6">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {slides[currentSlide].description}
            </p>
            <Link
              to={slides[currentSlide].cta.link}
              className="inline-block bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              {slides[currentSlide].cta.text}
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaGraduationCap className="w-8 h-8" />,
                  title: "Academic Excellence",
                  description: "High-quality education with proven results"
                },
                {
                  icon: <FaMosque className="w-8 h-8" />,
                  title: "Islamic Values",
                  description: "Strong foundation in Islamic principles"
                },
                {
                  icon: <FaChalkboardTeacher className="w-8 h-8" />,
                  title: "Expert Teachers",
                  description: "Experienced and qualified educators"
                },
                {
                  icon: <FaBook className="w-8 h-8" />,
                  title: "Modern Facilities",
                  description: "Well-equipped learning environment"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 text-white"
                >
                  <div className="text-blue-400">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="flex justify-start space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-blue-400 w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
