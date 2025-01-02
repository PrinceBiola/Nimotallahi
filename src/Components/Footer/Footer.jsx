import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Nimotallahi Memorial College
            </h3>
            <p className="text-gray-300">Empowering minds, building futures.</p>
            <div className="mt-4">
              <p className="text-gray-300">16, Daleko Street,</p>
              <p className="text-gray-300"> off Adesan Rd, Mowe 110113</p>
              <p className="text-gray-300">Phone: (+234) 8034395587</p>
              <p className="text-gray-300">Email: info@Nimotallahi.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-gray-300 hover:text-white"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-gray-300 hover:text-white"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Student Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/student-login"
                  className="text-gray-300 hover:text-white"
                >
                  Student Portal
                </Link>
              </li>
              <li>
                <Link to="/library" className="text-gray-300 hover:text-white">
                  Library
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-gray-300 hover:text-white">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-300 hover:text-white"
                >
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Nimotallahi Memorial College. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
