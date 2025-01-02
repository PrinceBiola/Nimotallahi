import React from 'react'
import { Link } from 'react-router-dom'
import { FaCalendar, FaAward, FaNewspaper, FaClock, FaArrowRight } from 'react-icons/fa'
import Logo from '../../assets/Images/Logo.png'

function Blog() {
  const posts = [
    {
      type: 'event',
      icon: <FaCalendar className="w-5 h-5" />,
      category: "Upcoming Event",
      title: "Annual Islamic Quiz Competition",
      date: "March 30, 2024",
      description: "Join us for our annual Islamic quiz competition featuring students from all classes showcasing their knowledge.",
      image: Logo,
      link: "/news/islamic-quiz-2024"
    },
    {
      type: 'news',
      icon: <FaNewspaper className="w-5 h-5" />,
      category: "Latest News",
      title: "New Science Laboratory Inauguration",
      date: "March 15, 2024",
      description: "State-of-the-art science laboratory equipped with modern facilities to enhance practical learning.",
      image: Logo,
      link: "/news/new-science-lab"
    },
    {
      type: 'achievement',
      icon: <FaAward className="w-5 h-5" />,
      category: "Achievement",
      title: "Students Excel in WAEC Examinations",
      date: "March 10, 2024",
      description: "Our students achieve outstanding results with 95% distinction rate in WAEC examinations.",
      image: Logo,
      link: "/news/waec-results-2024"
    }
  ]

  const upcomingEvents = [
    {
      title: "Parent-Teacher Meeting",
      date: "April 5, 2024",
      time: "10:00 AM"
    },
    {
      title: "Sports Day",
      date: "April 12, 2024",
      time: "8:00 AM"
    },
    {
      title: "Career Guidance Seminar",
      date: "April 15, 2024",
      time: "11:00 AM"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Keep up with the latest news, events, and achievements at Nimotallahi Memorial College.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News Grid */}
          <div className="lg:col-span-2 grid gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center gap-2 text-sm text-blue-900 mb-2">
                      {post.icon}
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link
                        to={post.link}
                        className="text-blue-900 hover:text-blue-800 font-medium text-sm"
                      >
                        Read More 
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events Widget */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-900">
                      <FaClock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.date}</p>
                      <p className="text-sm text-gray-600">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-900 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Stay Connected</h3>
              <p className="text-blue-100 mb-4">
                Subscribe to our newsletter for regular updates about school activities and events.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 mb-4"
              />
              <button className="w-full bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
          >
            View All News & Events
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
