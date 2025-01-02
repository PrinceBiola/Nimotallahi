import React from 'react'
import { 
  FaGraduationCap, 
  FaChalkboardTeacher, 
  FaLaptop, 
  FaFutbol,
  FaBookReader,
  FaMosque,
  FaFlask,
  FaUsers
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Highlight() {
  const features = [
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Quality Education",
      description: "Comprehensive curriculum combining academic excellence with Islamic values",
      color: "bg-blue-50 text-blue-900"
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      title: "Expert Teachers",
      description: "Highly qualified and experienced teaching staff dedicated to student success",
      color: "bg-green-50 text-green-900"
    },
    {
      icon: <FaFlask className="w-8 h-8" />,
      title: "Modern Facilities",
      description: "Well-equipped laboratories and smart classrooms for enhanced learning",
      color: "bg-purple-50 text-purple-900"
    },
    {
      icon: <FaFutbol className="w-8 h-8" />,
      title: "Sports & Activities",
      description: "Diverse range of extracurricular activities for holistic development",
      color: "bg-orange-50 text-orange-900"
    },
    {
      icon: <FaBookReader className="w-8 h-8" />,
      title: "Digital Library",
      description: "Extensive collection of educational resources and research materials",
      color: "bg-red-50 text-red-900"
    },
    {
      icon: <FaMosque className="w-8 h-8" />,
      title: "Islamic Studies",
      description: "Strong foundation in Islamic principles and moral values",
      color: "bg-teal-50 text-teal-900"
    },
    {
      icon: <FaLaptop className="w-8 h-8" />,
      title: "Technology Integration",
      description: "Modern teaching methods with latest educational technology",
      color: "bg-indigo-50 text-indigo-900"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Small Class Sizes",
      description: "Personalized attention and interactive learning environment",
      color: "bg-pink-50 text-pink-900"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes Nimotallahi Memorial College the perfect choice for your child's 
            educational journey and spiritual development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`inline-block p-4 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              to="/admissions"
              className="px-8 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-md hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlight
