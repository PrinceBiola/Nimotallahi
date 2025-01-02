import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { 
  FaHome, 
  FaUserGraduate, 
  FaChalkboardTeacher, 
  FaFileAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaNewspaper,
  FaCog,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaBell,
  FaChartBar
} from 'react-icons/fa'

import Logo from '../../assets/Images/Logo.png'

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { 
      icon: <FaHome />, 
      title: 'Dashboard', 
      path: '/admin',
      description: 'Overview and statistics'
    },
    { 
      icon: <FaUserGraduate />, 
      title: 'Students', 
      path: '/admin/students',
      description: 'Manage student records'
    },
    { 
      icon: <FaChalkboardTeacher />, 
      title: 'Staff', 
      path: '/admin/staff',
      description: 'Manage staff records'
    },
    { 
      icon: <FaFileAlt />, 
      title: 'Academics', 
      path: '/admin/academics',
      description: 'Manage classes and subjects'
    },
    { 
      icon: <FaMoneyBillWave />, 
      title: 'Finance', 
      path: '/admin/finance',
      description: 'Fees and payments'
    },
    { 
      icon: <FaCalendarAlt />, 
      title: 'Calendar', 
      path: '/admin/calendar',
      description: 'School events and schedule'
    },
    { 
      icon: <FaNewspaper />, 
      title: 'Content', 
      path: '/admin/content',
      description: 'Manage website content'
    },
    { 
      icon: <FaCog />, 
      title: 'Settings', 
      path: '/admin/settings',
      description: 'System configuration'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-blue-900 text-white transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 overflow-y-auto scrollbar-hide`}
      >
        {/* School Logo */}
        <div className="p-4 border-b border-blue-800">
          <Link to="/admin" className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="School Logo"
              className="w-10 h-10"
            />
            <div>
              <h1 className="font-bold">Admin Portal</h1>
              <p className="text-xs text-blue-300">Nimotallahi Memorial College</p>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-800 text-white'
                      : 'hover:bg-blue-800/50'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <span className="block">{item.title}</span>
                    <span className="text-xs text-blue-300">{item.description}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* Top Navigation */}
        <header className="sticky top-0 z-30 bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Quick Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <FaBell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Admin Profile */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <span className="block text-sm font-medium text-gray-900">Admin User</span>
                  <span className="block text-xs text-gray-500">administrator</span>
                </div>
                <img
                  src={Logo}
                  alt="Admin"
                  className="w-10 h-10 rounded-full border-2 border-blue-900"
                />
              </div>

              {/* Logout Button */}
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600">
                <FaSignOutAlt />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow p-6 overflow-y-auto scrollbar-hide">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-600">
          <p>© 2024 Nimotallahi Memorial College. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default AdminLayout
