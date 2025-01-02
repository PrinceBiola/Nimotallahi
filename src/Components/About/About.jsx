import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrophy, FaUserGraduate, FaChalkboardTeacher, FaSchool, FaArrowRight } from 'react-icons/fa'
import Logo from '../../assets/Images/Logo.png'

function About() {
  const achievements = [
    {
      icon: <FaUserGraduate className="w-6 h-6" />,
      value: "1000+",
      label: "Graduates"
    },
    {
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      value: "50+",
      label: "Expert Teachers"
    },
    {
      icon: <FaTrophy className="w-6 h-6" />,
      value: "95%",
      label: "Success Rate"
    },
    {
      icon: <FaSchool className="w-6 h-6" />,
      value: "20+",
      label: "Years of Excellence"
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src={Logo}
                alt="Nimotallahi Memorial College"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  <FaTrophy className="w-8 h-8 text-blue-900" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">WAEC Results</h4>
                  <p className="text-gray-600">95% Distinction Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:pl-8">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome to Nimotallahi Memorial College
              </h2>
              <div className="w-20 h-1 bg-blue-900 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2005, Nimotallahi Memorial College has been a beacon of academic excellence 
                and Islamic education in Mowe, Ogun State. Our institution combines modern educational 
                methodologies with strong Islamic values to nurture well-rounded individuals who excel 
                both academically and morally.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We take pride in our comprehensive curriculum, state-of-the-art facilities, and dedicated 
                teaching staff who are committed to providing the highest quality education. Our approach 
                focuses on developing critical thinking, leadership skills, and strong moral character in 
                our students.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
              >
                Discover More
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                >
                  <div className="text-blue-900 flex justify-center mb-2">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Academic Excellence",
              description: "Comprehensive curriculum aligned with national standards and enriched with Islamic education"
            },
            {
              title: "Modern Facilities",
              description: "Well-equipped laboratories, library, and sports facilities to support holistic development"
            },
            {
              title: "Qualified Teachers",
              description: "Experienced educators committed to nurturing both academic and spiritual growth"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
