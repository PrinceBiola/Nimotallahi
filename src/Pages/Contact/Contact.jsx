import React from "react";
import NavWrapper from "../../Components/NavWrapper";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <NavWrapper>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">Get in touch with us</p>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaPhone className="w-6 h-6 text-blue-900" />,
                  title: "Phone",
                  info: ["+234 803 439 5587", "+234 805 555 5555"],
                  action: "tel:+2348034395587",
                },
                {
                  icon: <FaWhatsapp className="w-6 h-6 text-blue-900" />,
                  title: "WhatsApp",
                  info: ["+234 803 439 5587"],
                  action: "https://wa.me/2348034395587",
                },
                {
                  icon: <FaEnvelope className="w-6 h-6 text-blue-900" />,
                  title: "Email",
                  info: ["info@nimotallahi.com", "admin@nimotallahi.com"],
                  action: "mailto:info@nimotallahi.com",
                },
                {
                  icon: <FaClock className="w-6 h-6 text-blue-900" />,
                  title: "School Hours",
                  info: ["Monday - Friday: 7:30 AM - 4:00 PM"],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm text-center"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <div className="space-y-1">
                    {item.info.map((line, idx) => (
                      <p key={idx} className="text-gray-600">
                        {item.action ? (
                          <a href={item.action} className="hover:text-blue-900">
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Location Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Location
                </h2>
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-6">
                  
                  <div className="aspect-video bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5267843506545!2d3.426196274047907!3d6.827257719560885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bc7804755b8bb%3A0x25f4076d9c2088d8!2sNimotallahi%20Memorial%20college!5e0!3m2!1sen!2sng!4v1735843620543!5m2!1sen!2sng"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Physical Address
                      </h3>
                      <p className="text-gray-600">
                        16, Daleko Street,
                        <br />
                        off Adesan Rd, Mowe 110113,
                        <br />
                        Ogun State, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NavWrapper>
  );
}

export default Contact;
