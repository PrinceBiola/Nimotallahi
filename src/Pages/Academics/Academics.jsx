import React from 'react'
import NavWrapper from '../../Components/NavWrapper'
import { FaBook, FaCalendarAlt, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa'

function Academics() {
  return (
    <NavWrapper>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Academic Programs</h1>
            <p className="text-xl text-gray-300">Excellence in Education</p>
          </div>
        </div>

        {/* Curriculum Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaBook className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Curriculum</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our curriculum follows the Nigerian Educational Research and Development Council (NERDC) 
                guidelines while incorporating Islamic education and moral instruction.
              </p>
            </div>

            {/* Junior Secondary School */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Junior Secondary School (JSS 1-3)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    category: "Core Subjects",
                    subjects: [
                      "English Language",
                      "Mathematics",
                      "Basic Science",
                      "Basic Technology",
                      "Social Studies",
                      "Civic Education",
                      "Islamic Religious Studies"
                    ]
                  },
                  {
                    category: "Languages",
                    subjects: [
                      "Arabic Language",
                      "Yoruba Language",
                      "French (Optional)"
                    ]
                  },
                  {
                    category: "Vocational Subjects",
                    subjects: [
                      "Business Studies",
                      "Home Economics",
                      "Agricultural Science",
                      "Computer Studies"
                    ]
                  }
                ].map((group, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">{group.category}</h4>
                    <ul className="space-y-2 text-gray-600">
                      {group.subjects.map((subject, idx) => (
                        <li key={idx}>• {subject}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Senior Secondary School */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Senior Secondary School (SSS 1-3)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    stream: "Science",
                    subjects: [
                      "English Language",
                      "Mathematics",
                      "Physics",
                      "Chemistry",
                      "Biology",
                      "Computer Science",
                      "Islamic Studies",
                      "Civic Education"
                    ]
                  },
                  {
                    stream: "Commercial",
                    subjects: [
                      "English Language",
                      "Mathematics",
                      "Economics",
                      "Commerce",
                      "Financial Accounting",
                      "Islamic Studies",
                      "Government",
                      "Civic Education"
                    ]
                  },
                  {
                    stream: "Arts",
                    subjects: [
                      "English Language",
                      "Mathematics",
                      "Literature",
                      "Government",
                      "Islamic Studies",
                      "History",
                      "Arabic",
                      "Civic Education"
                    ]
                  }
                ].map((stream, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-bold text-blue-900 mb-4">{stream.stream} Stream</h4>
                    <ul className="space-y-2 text-gray-600">
                      {stream.subjects.map((subject, idx) => (
                        <li key={idx}>• {subject}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaCalendarAlt className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Calendar 2024/2025</h2>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  term: "First Term",
                  dates: "September - December",
                  events: [
                    "Term Begins: Sept 11, 2024",
                    "Mid-Term Break: Oct 20-24",
                    "Examinations: Dec 1-12",
                    "Term Ends: Dec 13, 2024"
                  ]
                },
                {
                  term: "Second Term",
                  dates: "January - April",
                  events: [
                    "Term Begins: Jan 8, 2025",
                    "Mid-Term Break: Feb 14-18",
                    "Examinations: Mar 24-Apr 4",
                    "Term Ends: Apr 5, 2025"
                  ]
                },
                {
                  term: "Third Term",
                  dates: "April - July",
                  events: [
                    "Term Begins: Apr 22, 2025",
                    "Mid-Term Break: May 30-Jun 3",
                    "Examinations: Jul 7-18",
                    "Term Ends: Jul 19, 2025"
                  ]
                }
              ].map((term, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{term.term}</h3>
                  <p className="text-gray-600 mb-4">{term.dates}</p>
                  <ul className="space-y-2 text-gray-600">
                    {term.events.map((event, idx) => (
                      <li key={idx}>• {event}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Support */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaChalkboardTeacher className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Support</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Tutorial Classes",
                  description: "Extra support classes for challenging subjects"
                },
                {
                  title: "Library Resources",
                  description: "Well-stocked library with study materials"
                },
                {
                  title: "Computer Lab",
                  description: "Modern ICT facilities for practical learning"
                },
                {
                  title: "Career Guidance",
                  description: "Professional guidance for course selection"
                }
              ].map((support, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{support.title}</h3>
                  <p className="text-gray-600">{support.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment System */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaUserGraduate className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment System</h2>
            </div>
            <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Continuous Assessment</h3>
                  <p className="text-gray-600">40% of final grade, including:</p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Class Assignments (10%)</li>
                    <li>• Tests and Quizzes (20%)</li>
                    <li>• Projects and Presentations (10%)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Examinations</h3>
                  <p className="text-gray-600">60% of final grade, including:</p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Mid-Term Examinations (20%)</li>
                    <li>• Final Examinations (40%)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NavWrapper>
  )
}

export default Academics
