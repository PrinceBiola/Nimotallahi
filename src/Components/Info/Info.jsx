import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaWhatsapp,
  FaGraduationCap,
  FaArrowRight
} from 'react-icons/fa'

function Info() {
  const contactInfo = {
    phone: "+234 803 439 5587",
    whatsapp: "+234 803 439 5587",
    email: "info@nimotallahi.com",
    socialMedia: {
      facebook: "https://facebook.com/nimotallahicollege",
      twitter: "https://twitter.com/nimotallahicollege",
      instagram: "https://instagram.com/nimotallahicollege"
    }
  }

  return (
    <div className="bg-blue-900 text-white">
      {/* Top Banner - Admissions */}
      <div className="bg-blue-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2">
            <div className="flex items-center gap-2 text-sm">
              <FaGraduationCap className="text-blue-400" />
              <span>Admissions Open for 2024/2025 Academic Session</span>
            </div>
            <Link
              to="/admissions"
              className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
            >
              Apply Now
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Info Bar */}
      <div className="container mx-auto px-4">
        <div className="py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Contact Information */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href='#'
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaPhone className="text-blue-400" />
                <span>{contactInfo.phone}</span>
              </a>

              <a
                href='#'
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaWhatsapp className="text-blue-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href='#'
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope className="text-blue-400" />
                <span>{contactInfo.email}</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={contactInfo.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Quick Actions */}
      <div className="md:hidden border-t border-blue-800">
        <div className="container mx-auto px-4">
          <div className="py-3 flex justify-around">
            <Link
              to="/contact"
              className="flex flex-col items-center text-xs hover:text-blue-400 transition-colors"
            >
              <FaPhone className="text-lg mb-1" />
              Contact
            </Link>
            <Link
              to="/admissions"
              className="flex flex-col items-center text-xs hover:text-blue-400 transition-colors"
            >
              <FaGraduationCap className="text-lg mb-1" />
              Apply
            </Link>
            <a
              href='#'
              className="flex flex-col items-center text-xs hover:text-blue-400 transition-colors"
            >
              <FaEnvelope className="text-lg mb-1" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
