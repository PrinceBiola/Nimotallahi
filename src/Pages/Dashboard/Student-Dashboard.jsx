import React from 'react'
import { FaUserGraduate, FaBookReader, FaChartLine, FaCalendarCheck } from 'react-icons/fa'

function Dashboard() {
  
  const studentInfo = {
    name: "Abiola Mahmud",
    class: "SSS 2",
    admissionNumber: "2023/001",
    term: "First Term",
    session: "2024/2025"
  }

  const attendance = {
    present: 45,
    total: 50,
    percentage: 90
  }

  const recentGrades = [
    { subject: "Mathematics", score: 85, grade: "A" },
    { subject: "English", score: 78, grade: "B" },
    { subject: "Physics", score: 92, grade: "A" },
    { subject: "Chemistry", score: 88, grade: "A" }
  ]

  const upcomingAssignments = [
    {
      subject: "Mathematics",
      title: "Quadratic Equations",
      dueDate: "March 25, 2024"
    },
    {
      subject: "English",
      title: "Essay Writing",
      dueDate: "March 27, 2024"
    },
    {
      subject: "Physics",
      title: "Motion Problems",
      dueDate: "March 28, 2024"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome back, {studentInfo.name}
        </h1>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <span>Class: {studentInfo.class}</span>
          <span>•</span>
          <span>Admission No: {studentInfo.admissionNumber}</span>
          <span>•</span>
          <span>{studentInfo.term}, {studentInfo.session}</span>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Attendance Rate",
            value: `${attendance.percentage}%`,
            icon: <FaCalendarCheck className="w-6 h-6 text-green-600" />,
            detail: `${attendance.present}/${attendance.total} Days`,
            color: "bg-green-50"
          },
          {
            title: "Current Average",
            value: "85.7%",
            icon: <FaChartLine className="w-6 h-6 text-blue-600" />,
            detail: "Term Average",
            color: "bg-blue-50"
          },
          {
            title: "Subjects",
            value: "9",
            icon: <FaBookReader className="w-6 h-6 text-purple-600" />,
            detail: "Enrolled Subjects",
            color: "bg-purple-50"
          },
          {
            title: "Position",
            value: "5th",
            icon: <FaUserGraduate className="w-6 h-6 text-orange-600" />,
            detail: "Class Ranking",
            color: "bg-orange-50"
          }
        ].map((stat, index) => (
          <div key={index} className={`${stat.color} rounded-lg p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-700 font-medium">{stat.title}</h3>
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.detail}</div>
          </div>
        ))}
      </div>

      {/* Recent Grades and Assignments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Grades */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Recent Grades</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentGrades.map((grade, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{grade.subject}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">{grade.score}%</span>
                    <span className={`font-medium ${
                      grade.grade === 'A' ? 'text-green-600' : 
                      grade.grade === 'B' ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {grade.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Upcoming Assignments</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingAssignments.map((assignment, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{assignment.subject}</h4>
                    <p className="text-sm text-gray-600">{assignment.title}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    Due: {assignment.dueDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "View Full Results",
            "Download Timetable",
            "Submit Assignment",
            "Contact Teacher"
          ].map((action, index) => (
            <button
              key={index}
              className="px-4 py-2 text-sm text-blue-900 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
