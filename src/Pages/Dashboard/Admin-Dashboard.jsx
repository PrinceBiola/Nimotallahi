import React from 'react'
import { 
  FaUserGraduate, 
  FaChalkboardTeacher, 
  FaMoneyBillWave, 
  FaCalendarCheck,
  FaChartLine,
  FaExclamationCircle,
  FaCheckCircle,
  FaClock
} from 'react-icons/fa'

function AdminDashboard() {
  // Sample data - replace with actual data from backend
  const stats = {
    totalStudents: 850,
    totalTeachers: 45,
    activeClasses: 24,
    attendance: "92%",
    revenue: "₦15.2M",
    pendingFees: "₦2.8M"
  }

  const recentActivities = [
    {
      type: "enrollment",
      message: "New student enrolled in SSS 2",
      time: "2 hours ago",
      icon: <FaUserGraduate className="text-blue-500" />
    },
    {
      type: "payment",
      message: "School fees payment received",
      time: "3 hours ago",
      icon: <FaMoneyBillWave className="text-green-500" />
    },
    {
      type: "staff",
      message: "New teacher added to Science department",
      time: "5 hours ago",
      icon: <FaChalkboardTeacher className="text-purple-500" />
    }
  ]

  const upcomingEvents = [
    {
      title: "Parent-Teacher Meeting",
      date: "March 25, 2024",
      time: "10:00 AM"
    },
    {
      title: "End of Term Examination",
      date: "March 30, 2024",
      time: "8:00 AM"
    },
    {
      title: "Staff Meeting",
      date: "April 2, 2024",
      time: "2:00 PM"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome to the admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Students */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Students</p>
              <h3 className="text-2xl font-bold text-gray-900">{stats.totalStudents}</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FaUserGraduate className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <FaChartLine className="text-green-500 mr-2" />
            <span className="text-green-500">4.5% increase</span>
            <span className="text-gray-500 ml-2">from last term</span>
          </div>
        </div>

        {/* Teachers */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Teachers</p>
              <h3 className="text-2xl font-bold text-gray-900">{stats.totalTeachers}</h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <FaChalkboardTeacher className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-gray-500">All positions filled</span>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Monthly Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">{stats.revenue}</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FaMoneyBillWave className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <FaExclamationCircle className="text-orange-500 mr-2" />
            <span className="text-orange-500">{stats.pendingFees}</span>
            <span className="text-gray-500 ml-2">fees pending</span>
          </div>
        </div>
      </div>

      {/* Activity and Events Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Recent Activities</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-gray-50 rounded-full">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600">{activity.message}</p>
                    <p className="text-sm text-gray-400 flex items-center mt-1">
                      <FaClock className="w-3 h-3 mr-1" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Upcoming Events</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <FaCalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {event.date} at {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
