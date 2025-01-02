import React, { useState, useEffect } from 'react'
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Logo from '../../assets/Images/Logo.png'

function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      quote: "The combination of academic excellence and Islamic values at Nimotallahi Memorial College has shaped my children into well-rounded individuals. The teachers are dedicated and caring.",
      name: "Mrs. Aisha Ibrahim",
      role: "Parent",
      image: Logo
    },
    {
      quote: "My years at NMC were transformative. The school's focus on both academic and spiritual development provided me with a strong foundation for success in life.",
      name: "Mr. Abiola Mahmud",
      role: "Alumni, Class of 2018",
      image: Logo
    },
    {
      quote: "The school's commitment to excellence and Islamic values creates an ideal learning environment. I'm proud to see our students excel in both academics and character.",
      name: "Mr. Salahudeen Yusuff",
      role: "Senior Teacher",
      image: Logo
    },
    {
      quote: "I love the supportive environment and the way teachers make learning both fun and meaningful. The Islamic studies program is particularly enriching.",
      name: "Fatima Hassan",
      role: "Current Student, SSS 2",
      image: Logo
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What People Say About Us
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Hear from our community about their experiences at Nimotallahi Memorial College.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="h-full flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8">
                  <div className="relative mb-6 sm:mb-8">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-blue-900 rounded-full p-2 sm:p-3">
                      <FaQuoteRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  
                  <blockquote className="text-sm sm:text-base md:text-xl text-gray-700 mb-4 sm:mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{testimonial.name}</div>
                    <div className="text-blue-900 text-sm sm:text-base">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 sm:-translate-x-10 p-2 sm:p-3 rounded-full bg-white shadow-md text-gray-600 hover:text-blue-900 transition-all"
          >
            <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 sm:translate-x-10 p-2 sm:p-3 rounded-full bg-white shadow-md text-gray-600 hover:text-blue-900 transition-all"
          >
            <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-900 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Social Proof */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
          {[
            { label: "Happy Parents", value: "500+" },
            { label: "Successful Alumni", value: "1000+" },
            { label: "Expert Teachers", value: "50+" },
            { label: "Years of Excellence", value: "20+" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
              <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
