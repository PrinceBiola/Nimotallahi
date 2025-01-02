import React from "react";
import { FaGraduationCap, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import NavWrapper from "../../Components/NavWrapper";

function About() {
  return (
    <NavWrapper>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">About Our School</h1>
            <p className="text-xl text-gray-300">
              Nurturing Excellence, Building Character
            </p>
          </div>
        </div>

        {/* History Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaGraduationCap className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our History
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 mb-4">
                  Founded in 2005, Nimotallahi Memorial College has been a
                  beacon of academic excellence and moral values in Mowe,
                  Ogun State for over two decades.
                </p>
                <p className="text-gray-600">
                  What started as a small institution with just 20 students has
                  grown into a respected secondary school serving over 100 students,
                  while maintaining our commitment to quality education and
                  Islamic values.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Management Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaUsers className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                School Management
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Mr. Ibraheem Bello",
                  position: "Principal",
                  description:
                    "An experienced educator with over 20 years in secondary school administration",
                },
                {
                  name: "Mr. Salahudeen Yusuf",
                  position: "Vice Principal (Academics)",
                  description:
                    "Dedicated to maintaining high academic standards and student performance",
                },
                {
                  name: "Mr. Mahmud Abiola",
                  position: "Vice Principal (Administration)",
                  description:
                    "Oversees school operations and student affairs management",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-900 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Structure */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaChalkboardTeacher className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Academic Structure
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                Our school follows the Nigerian Educational Curriculum with additional
                focus on Islamic studies and moral education.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Junior Secondary (JSS 1-3)",
                  description:
                    "Foundation years focusing on core subjects and character development",
                  features: "BECE Preparation",
                },
                {
                  title: "Senior Secondary (SSS 1-3)",
                  description:
                    "Specialized education in Science, Commercial, or Arts streams",
                  features: "WAEC & NECO Preparation",
                },
                {
                  title: "Islamic Studies",
                  description:
                    "Comprehensive Islamic education integrated with regular curriculum",
                  features: "Quranic Studies & Arabic Language",
                },
                {
                  title: "Extra-Curricular",
                  description:
                    "Sports, Clubs, and Leadership Development Programs",
                  features: "Inter-House Sports & Competitions",
                },
                {
                  title: "Guidance & Counseling",
                  description:
                    "Career guidance and personal development support",
                  features: "University & Career Planning",
                },
                {
                  title: "Examination Preparation",
                  description:
                    "Intensive preparation for external examinations and university admission",
                  features: "JAMB, POST-UTME & GCE Support",
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{section.description}</p>
                  <p className="text-blue-900 font-medium">{section.features}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-white text-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 mb-8">
                  To provide quality education that develops intellectual
                  capabilities, builds character, and prepares students for
                  lifelong success while upholding Islamic values and
                  traditions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    "Academic Excellence",
                    "Islamic Values",
                    "Character Development",
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="border border-blue-800 p-4 rounded-lg"
                    >
                      <p className="font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NavWrapper>
  );
}

export default About;
