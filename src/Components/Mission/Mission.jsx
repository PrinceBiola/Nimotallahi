import React from 'react'
import { 
  FaStar, 
  FaHandshake, 
  FaLightbulb, 
  FaUsers, 
  FaBook, 
  FaMosque, 
  FaGraduationCap 
} from 'react-icons/fa'

function Mission() {
  const coreValues = [
    {
      icon: <FaStar className="w-8 h-8" />,
      title: "Excellence",
      description: "Striving for the highest standards in academic and personal achievement"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Integrity",
      description: "Upholding strong moral principles and Islamic values"
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Embracing modern educational methods while preserving traditional values"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Community",
      description: "Fostering a supportive and inclusive learning environment"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Mission Statement */}
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-900 rounded-lg">
                <FaBook className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide comprehensive education that integrates academic excellence with Islamic values, 
              nurturing students to become knowledgeable, morally upright, and socially responsible 
              individuals who contribute positively to society.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-900 rounded-lg">
                <FaGraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be a leading educational institution that produces well-rounded individuals who excel 
              in both academic pursuits and Islamic principles, serving as beacons of guidance and 
              positive change in their communities.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 text-center transform hover:-translate-y-1 transition-transform duration-300 shadow-lg"
              >
                <div className="inline-block p-4 bg-blue-50 rounded-full text-blue-900 mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Islamic Foundation */}
        <div className="mt-16 text-center">
          <div className="inline-block p-4 bg-blue-50 rounded-full text-blue-900 mb-6">
            <FaMosque className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Islamic Foundation</h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Nimotallahi Memorial College, we believe in nurturing both academic excellence and 
            spiritual growth. Our educational approach is firmly rooted in Islamic principles, 
            providing students with a strong moral compass while preparing them for success in 
            the modern world.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Mission
