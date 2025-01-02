import React, { useState } from 'react'
import { 
  FaCalendarPlus, 
  FaEdit, 
  FaTrash, 
  FaCalendarAlt,
  FaClock,
  FaUsers
} from 'react-icons/fa'

function Calender() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  
  const events = [
    {
      id: 1,
      title: "First Term Begins",
      date: "2024-01-08",
      type: "academic",
      description: "School resumes for first term"
    },
    {
      id: 2,
      title: "Parent-Teacher Meeting",
      date: "2024-03-25",
      type: "meeting",
      description: "Term progress review with parents"
    },
    {
      id: 3,
      title: "Inter-House Sports",
      date: "2024-04-15",
      type: "sports",
      description: "Annual inter-house sports competition"
    }
  ]

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Academic Calendar</h1>
          <p className="text-gray-600">Manage school events and activities</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
          <FaCalendarPlus className="mr-2" />
          Add Event
        </button>
      </div>

      {/* Calendar Navigation */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {months.map((month, index) => (
                <option key={month} value={index}>{month}</option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {[2023, 2024, 2025].map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 rounded-md">Today</button>
            <button className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 rounded-md">Month</button>
            <button className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 rounded-md">Week</button>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {events.map((event) => (
            <div key={event.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <FaCalendarAlt className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.description}</p>
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaClock className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUsers className="w-4 h-4" />
                        All Students
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:text-blue-900">
                    <FaEdit />
                  </button>
                  <button className="p-2 text-red-600 hover:text-red-900">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calender
