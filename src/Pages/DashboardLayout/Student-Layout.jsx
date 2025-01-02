import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { 
  FaHome, 
  FaBook, 
  FaUserGraduate, 
  FaFileAlt,
  FaClipboardList,
  FaChartBar,
  FaBars,
  FaTimes,
  FaSignOutAlt
} from 'react-icons/fa'

import Logo from '../../assets/Images/Logo.png'

function StudentLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { 
      icon: <FaHome />, 
      title: 'Dashboard', 
      path: '/student',
      description: 'Overview of your academic progress'
    },
    { 
      icon: <FaBook />, 
      title: 'Subjects', 
      path: '/student/subjects',
      description: 'View your enrolled subjects'
    },
    { 
      icon: <FaClipboardList />, 
      title: 'Assignments', 
      path: '/student/assignments',
      description: 'View and submit assignments'
    },
    { 
      icon: <FaChartBar />, 
      title: 'Grades', 
      path: '/student/grades',
      description: 'Check your academic performance'
    },
    { 
      icon: <FaUserGraduate />, 
      title: 'Profile', 
      path: '/student/profile',
      description: 'Manage your account'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar - Fixed position */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-blue-900 text-white transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 overflow-y-auto`}
      >
        {/* School Logo */}
        <div className="p-5 border-b border-blue-800">
          <Link to="/student" className="flex items-center space-x-3">
            <img 
              src={Logo} 
              alt="School Logo" 
              className="w-8 h-8"
            />
            <div>
              <h1 className="text-xl font-bold">Student Portal</h1>
              <p className="text-xs text-gray-300">Nimotallahi College</p>
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
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-800 text-white'
                      : 'hover:bg-blue-800 text-gray-300 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <div>
                    <span className="block">{item.title}</span>
                    <span className="text-xs text-gray-400">{item.description}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-4 border-t border-blue-800">
          <button 
            
            className="flex items-center gap-4 px-4 py-3 w-full text-left rounded-lg hover:bg-blue-800 transition-colors text-gray-300 hover:text-white"
          >
            <FaSignOutAlt />
            <div>
              <span className="block">Logout</span>
              <span className="text-xs text-gray-400">Exit your account</span>
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content - Scrollable */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* Top Navigation - Fixed */}
        <header className="sticky top-0 z-30 bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="block text-sm font-medium text-gray-900">Abiola Mahmud</span>
                <span className="block text-xs text-gray-500">SSS 2</span>
              </div>
              <img
                src={Logo}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-blue-900"
              />
            </div>
          </div>
        </header>

        {/* Main Content Area - Scrollable */}
        <main className="flex-grow p-6 overflow-y-auto">
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

export default StudentLayout
