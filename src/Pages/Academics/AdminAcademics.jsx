import React, { useState } from 'react'
import { 
  FaBook, 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaDownload,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaClock
} from 'react-icons/fa'

function AdminAcademics() {
  const [activeTab, setActiveTab] = useState('classes')

  
  const classes = [
    {
      id: "CLS001",
      name: "SSS 2",
      students: 45,
      classTeacher: "Mr. Salahudeen",
      subjects: ["Mathematics", "English", "Physics", "Chemistry", "Biology"],
      schedule: "Morning Session",
      room: "Block A - Room 201"
    },
    {
      id: "CLS002",
      name: "SSS 1",
      students: 50,
      classTeacher: "Mrs. Aisha",
      subjects: ["Mathematics", "English", "Physics", "Chemistry", "Biology"],
      schedule: "Morning Session",
      room: "Block A - Room 101"
    }
  ]

  const subjects = [
    {
      id: "SUB001",
      name: "Mathematics",
      teacher: "Mr. Salahudeen",
      classes: ["SSS 1", "SSS 2", "SSS 3"],
      students: 140,
      schedule: "Mon, Wed, Fri",
      curriculum: "WAEC Aligned"
    },
    {
      id: "SUB002",
      name: "English Language",
      teacher: "Mrs. Aisha",
      classes: ["SSS 1", "SSS 2", "SSS 3"],
      students: 140,
      schedule: "Tue, Thu",
      curriculum: "WAEC Aligned"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Academic Management</h1>
        <p className="text-gray-600">Manage classes, subjects, and curriculum</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Classes</p>
              <h3 className="text-2xl font-bold text-gray-900">12</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FaChalkboardTeacher className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Subjects</p>
              <h3 className="text-2xl font-bold text-gray-900">15</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FaBook className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Teaching Hours</p>
              <h3 className="text-2xl font-bold text-gray-900">180</h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <FaClock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Academic Term</p>
              <h3 className="text-2xl font-bold text-gray-900">2nd Term</h3>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <FaCalendarAlt className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['classes', 'subjects', 'curriculum'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? 'border-blue-900 text-blue-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Sections */}
      {activeTab === 'classes' && (
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Class Management</h2>
            <button className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
              <FaPlus className="mr-2" />
              Add New Class
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class Teacher</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subjects</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Schedule</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {classes.map((cls) => (
                  <tr key={cls.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {cls.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {cls.students} students
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {cls.classTeacher}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {cls.subjects.join(", ")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {cls.schedule}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {cls.room}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'subjects' && (
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Subject Management</h2>
            <button className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
              <FaPlus className="mr-2" />
              Add New Subject
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Teacher</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Classes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Schedule</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Curriculum</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subjects.map((subject) => (
                  <tr key={subject.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {subject.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {subject.teacher}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {subject.classes.join(", ")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {subject.students} students
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {subject.schedule}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {subject.curriculum}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'curriculum' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center py-12">
            <FaBook className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Curriculum Management</h3>
            <p className="text-gray-500 mb-6"> I Am Tired</p>
            <button className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
              <FaPlus className="mr-2" />
              Add Curriculum
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminAcademics
