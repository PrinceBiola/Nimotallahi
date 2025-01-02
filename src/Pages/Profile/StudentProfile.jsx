import React, { useState } from 'react'
import { FaUser, FaPhone, FaEnvelope, FaCalendar, FaMapMarkerAlt, FaEdit, FaKey } from 'react-icons/fa'
import Logo from '../../assets/Images/Logo.png'

function StudentProfile() {
  const [activeTab, setActiveTab] = useState('personal')

  
  const studentData = {
    personal: {
      name: "Abiola Mahmud",
      admissionNumber: "2023/001",
      class: "SSS 2",
      gender: "Male",
      dateOfBirth: "15 March 2008",
      bloodGroup: "O+",
      address: "16, Daleko Street, off Adesan Rd, Mowe",
      phone: "+234 803 439 5587",
      email: "abiola.m@student.nimotallahi.com",
      parentName: "Mr. Mahmud Ibrahim",
      parentPhone: "+234 805 555 5555",
      parentEmail: "mahmud.i@gmail.com"
    },
    academic: {
      class: "SSS 2",
      section: "Science",
      admissionDate: "September 2023",
      currentTerm: "First Term",
      session: "2024/2025",
      houseColor: "Blue House",
      attendance: "95%",
      subjects: [
        "Mathematics",
        "English Language",
        "Physics",
        "Chemistry",
        "Biology",
        "Islamic Studies"
      ]
    }
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <img
              src={Logo}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-900"
            />
            <button className="absolute bottom-0 right-0 bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition-colors">
              <FaEdit />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-900">{studentData.personal.name}</h1>
            <p className="text-gray-600">Student ID: {studentData.personal.admissionNumber}</p>
            <p className="text-blue-900 font-medium">{studentData.academic.class} - {studentData.academic.section}</p>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'personal'
                  ? 'border-b-2 border-blue-900 text-blue-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Personal Information
            </button>
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'academic'
                  ? 'border-b-2 border-blue-900 text-blue-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Academic Information
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'settings'
                  ? 'border-b-2 border-blue-900 text-blue-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Account Settings
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Personal Information */}
          {activeTab === 'personal' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Student Details</h3>
                <div className="space-y-3">
                  {[
                    { icon: <FaUser />, label: "Full Name", value: studentData.personal.name },
                    { icon: <FaCalendar />, label: "Date of Birth", value: studentData.personal.dateOfBirth },
                    { icon: <FaMapMarkerAlt />, label: "Address", value: studentData.personal.address },
                    { icon: <FaPhone />, label: "Phone", value: studentData.personal.phone },
                    { icon: <FaEnvelope />, label: "Email", value: studentData.personal.email }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-blue-900">{item.icon}</span>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="text-gray-900">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Parent/Guardian Details</h3>
                <div className="space-y-3">
                  {[
                    { icon: <FaUser />, label: "Parent Name", value: studentData.personal.parentName },
                    { icon: <FaPhone />, label: "Phone", value: studentData.personal.parentPhone },
                    { icon: <FaEnvelope />, label: "Email", value: studentData.personal.parentEmail }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-blue-900">{item.icon}</span>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="text-gray-900">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Academic Information */}
          {activeTab === 'academic' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Class", value: studentData.academic.class },
                  { label: "Section", value: studentData.academic.section },
                  { label: "Admission Date", value: studentData.academic.admissionDate },
                  { label: "Current Term", value: studentData.academic.currentTerm },
                  { label: "Session", value: studentData.academic.session },
                  { label: "House Color", value: studentData.academic.houseColor }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-medium text-gray-900">{item.value}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Enrolled Subjects</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {studentData.academic.subjects.map((subject, index) => (
                    <div key={index} className="bg-blue-50 text-blue-900 px-4 py-2 rounded-lg">
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Account Settings */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Change Password</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
                  >
                    Update Password
                  </button>
                </form>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Notification Settings</h3>
                <div className="space-y-3">
                  {[
                    "Email notifications for new assignments",
                    "Email notifications for grades",
                    "SMS notifications for important announcements"
                  ].map((setting, index) => (
                    <label key={index} className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
                      <span className="ml-2 text-gray-700">{setting}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StudentProfile
