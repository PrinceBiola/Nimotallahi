import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaBars, 
  FaTimes, 
  FaGraduationCap, 
  FaBook,
  FaNewspaper,
  FaImages,
  FaPhone,
  FaUserGraduate,
  FaUserShield
} from 'react-icons/fa'
import Logo from '../../assets/Images/Logo.png'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Admissions',
      path: '/admissions',
      icon: <FaGraduationCap />
    },
    {
      title: 'Academics',
      path: '/academics',
      icon: <FaBook />
    },
    {
      title: 'News',
      path: '/news',
      icon: <FaNewspaper />
    },
    {
      title: 'Gallery',
      path: '/gallery',
      icon: <FaImages />
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: <FaPhone />
    }
  ]

//   const handlePortalClick = (path) => {
//     window.location.href = path
//   }

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="School Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium"
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.title}
              </Link>
            ))}

            {/* Portal Links */}
            <div className="flex items-center space-x-4">
              <Link
                to="/student-login"
                className="flex items-center px-4 py-2 text-sm font-medium bg-blue-900 text-white hover:bg-blue-800 rounded-md transition-colors"
              >
                <FaUserGraduate className="mr-2" />
                Student Portal
              </Link>
              <Link
                to="/admin-login"
                className="flex items-center px-4 py-2 text-sm font-medium bg-blue-900 text-white hover:bg-blue-800 rounded-md transition-colors"
              >
                <FaUserShield className="mr-2" />
                Admin Portal
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-900"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.title}
              </Link>
            ))}

            {/* Mobile Portal Links */}
            <div className="border-t border-gray-200 pt-4 space-y-2 px-2">
              <Link
                to="/student-login"
                className="w-full flex items-center px-4 py-2 text-sm font-medium bg-blue-900 text-white hover:bg-blue-800 rounded-md transition-colors"
              >
                <FaUserGraduate className="mr-2" />
                Student Portal
              </Link>
              <Link
                to="/admin-login"
                className="w-full flex items-center px-4 py-2 text-sm font-medium bg-blue-900 text-white hover:bg-blue-800 rounded-md transition-colors"
              >
                <FaUserShield className="mr-2" />
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
