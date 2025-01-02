import React from 'react'
import NavWrapper from '../../Components/NavWrapper'
import { FaCalendarAlt, FaClock, FaUserGraduate, FaTrophy, FaNewspaper } from 'react-icons/fa'
import Logo from '../../assets/Images/Logo.png'

function Blog() {
  return (
    <NavWrapper>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">News & Events</h1>
            <p className="text-xl text-gray-300">Stay updated with our school activities</p>
          </div>
        </div>

        {/* Featured News */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaNewspaper className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Outstanding WAEC Results",
                  date: "August 15, 2024",
                  category: "Academic Achievement",
                  image: Logo,
                  desc: "Our students achieved exceptional results in the 2024 WAEC examinations, with 95% distinction rate.",
                  icon: <FaTrophy className="text-yellow-500" />
                },
                {
                  title: "New Computer Lab Inauguration",
                  date: "July 30, 2024",
                  category: "Facility Update",
                  image: Logo,
                  desc: "State-of-the-art computer laboratory equipped with modern facilities inaugurated.",
                  icon: <FaUserGraduate className="text-blue-500" />
                },
                {
                  title: "Inter-House Sports Competition",
                  date: "July 25, 2024",
                  category: "Sports",
                  image: Logo,
                  desc: "Annual inter-house sports competition showcasing athletic excellence and team spirit.",
                  icon: <FaTrophy className="text-green-500" />
                }
              ].map((news, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-48 bg-gray-200">
                    {/* Replace with actual images */}
                    <div className="w-full h-full bg-gray-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      {news.icon}
                      <span className="text-sm text-gray-600 ml-2">{news.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.desc}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="mr-2" />
                      {news.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaCalendarAlt className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "Parent-Teacher Meeting",
                  date: "September 5, 2024",
                  time: "10:00 AM - 2:00 PM",
                  location: "School Assembly Hall",
                  description: "Discussion of student progress and academic planning for the new term."
                },
                {
                  title: "Science Fair 2024",
                  date: "September 15, 2024",
                  time: "9:00 AM - 4:00 PM",
                  location: "School Laboratory Complex",
                  description: "Annual science exhibition showcasing student projects and innovations."
                },
                {
                  title: "Islamic Knowledge Competition",
                  date: "September 20, 2024",
                  time: "11:00 AM - 2:00 PM",
                  location: "School Mosque",
                  description: "Inter-class Quranic recitation and Islamic knowledge competition."
                },
                {
                  title: "Career Day",
                  date: "September 25, 2024",
                  time: "10:00 AM - 3:00 PM",
                  location: "School Auditorium",
                  description: "Professional guidance and career counseling for SS3 students."
                }
              ].map((event, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="space-y-1">
                        <div className="flex items-center text-gray-500">
                          <FaCalendarAlt className="mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <FaClock className="mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <span className="font-medium mr-2">Location:</span>
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* School Announcements */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaNewspaper className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Announcements</h2>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                {[
                  {
                    title: "2024/2025 Academic Calendar",
                    date: "August 10, 2024",
                    content: "The new academic calendar has been released. Please check the academics section for detailed information."
                  },
                  {
                    title: "School Fees Payment Deadline",
                    date: "August 12, 2024",
                    content: "Reminder: First term school fees payment deadline is September 1st, 2024."
                  },
                  {
                    title: "New Uniform Policy",
                    date: "August 15, 2024",
                    content: "Updated school uniform policy will be effective from the new academic session."
                  }
                ].map((announcement, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{announcement.title}</h3>
                      <span className="text-sm text-gray-500">{announcement.date}</span>
                    </div>
                    <p className="text-gray-600">{announcement.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </NavWrapper>
  )
}

export default Blog
