import React from 'react'
import { FaBook, FaUserTie, FaClock } from 'react-icons/fa'

function Subjects() {
  // Sample subjects data - replace with actual data
  const subjects = [
    {
      name: "Mathematics",
      teacher: "Mr. Salahudeen",
      schedule: "Monday, Wednesday, Friday",
      time: "8:00 AM - 9:30 AM",
      topics: ["Algebra", "Geometry", "Trigonometry", "Calculus"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "English Language",
      teacher: "Mrs. Aisha",
      schedule: "Tuesday, Thursday",
      time: "9:45 AM - 11:15 AM",
      topics: ["Grammar", "Literature", "Comprehension", "Essay Writing"],
      color: "bg-green-50 border-green-200"
    },
    {
      name: "Physics",
      teacher: "Mr. Ibrahim",
      schedule: "Monday, Wednesday",
      time: "11:30 AM - 1:00 PM",
      topics: ["Mechanics", "Electricity", "Optics", "Modern Physics"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      name: "Chemistry",
      teacher: "Mr. Ahmed",
      schedule: "Tuesday, Thursday",
      time: "1:45 PM - 3:15 PM",
      topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      name: "Biology",
      teacher: "Mrs. Fatima",
      schedule: "Wednesday, Friday",
      time: "10:00 AM - 11:30 AM",
      topics: ["Cell Biology", "Genetics", "Ecology", "Human Anatomy"],
      color: "bg-red-50 border-red-200"
    },
    {
      name: "Islamic Studies",
      teacher: "Ustadh Abdullah",
      schedule: "Monday, Thursday",
      time: "2:00 PM - 3:30 PM",
      topics: ["Quran", "Hadith", "Fiqh", "Islamic History"],
      color: "bg-indigo-50 border-indigo-200"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Subjects</h1>
        <p className="text-gray-600">View your enrolled subjects and course materials</p>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <div 
            key={index} 
            className={`${subject.color} border rounded-lg overflow-hidden hover:shadow-md transition-shadow`}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{subject.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <FaUserTie className="w-5 h-5 mr-3" />
                  <span>{subject.teacher}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <FaBook className="w-5 h-5 mr-3" />
                  <span>{subject.schedule}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <FaClock className="w-5 h-5 mr-3" />
                  <span>{subject.time}</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {subject.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 w-full bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors border border-blue-900">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Subjects
