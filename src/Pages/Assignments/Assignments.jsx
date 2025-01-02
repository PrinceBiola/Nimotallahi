import React, { useState } from 'react'
import { FaFileUpload, FaCalendarAlt, FaBook, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

function Assignments() {
  const [activeTab, setActiveTab] = useState('pending') 

  
  const assignments = {
    pending: [
      {
        id: 1,
        subject: "Mathematics",
        title: "Quadratic Equations Problem Set",
        description: "Complete problems 1-10 from Chapter 5",
        dueDate: "March 25, 2024",
        teacher: "Mr. Salahudeen",
        status: "pending",
        timeLeft: "2 days left"
      },
      {
        id: 2,
        subject: "Physics",
        title: "Motion and Forces Lab Report",
        description: "Write a detailed lab report on the pendulum experiment",
        dueDate: "March 28, 2024",
        teacher: "Mr. Ibrahim",
        status: "pending",
        timeLeft: "5 days left"
      }
    ],
    submitted: [
      {
        id: 3,
        subject: "English Language",
        title: "Essay Writing Assignment",
        description: "Write a 500-word essay on 'The Impact of Technology'",
        submittedDate: "March 15, 2024",
        teacher: "Mrs. Aisha",
        status: "submitted",
        grade: "Pending Review"
      },
      {
        id: 4,
        subject: "Chemistry",
        title: "Periodic Table Quiz",
        description: "Complete the online quiz on periodic elements",
        submittedDate: "March 10, 2024",
        teacher: "Mr. Ahmed",
        status: "graded",
        grade: "85%"
      }
    ]
  }



  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Assignments</h1>
        <p className="text-gray-600">View and submit your assignments</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'pending'
                  ? 'border-b-2 border-blue-900 text-blue-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Pending Assignments
            </button>
            <button
              onClick={() => setActiveTab('submitted')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'submitted'
                  ? 'border-b-2 border-blue-900 text-blue-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Submitted Assignments
            </button>
          </nav>
        </div>

        {/* Assignment List */}
        <div className="p-6">
          <div className="space-y-6">
            {assignments[activeTab].map((assignment) => (
              <div
                key={assignment.id}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{assignment.title}</h3>
                    <p className="text-blue-900 font-medium">{assignment.subject}</p>
                  </div>
                  <div className="flex items-center">
                    {assignment.status === 'submitted' && (
                      <span className="flex items-center text-green-600">
                        <FaCheckCircle className="mr-2" />
                        Submitted
                      </span>
                    )}
                    {assignment.status === 'pending' && (
                      <span className="flex items-center text-orange-600">
                        <FaClock className="mr-2" />
                        {assignment.timeLeft}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{assignment.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <FaBook className="mr-2" />
                    Teacher: {assignment.teacher}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    {activeTab === 'pending' ? `Due: ${assignment.dueDate}` : `Submitted: ${assignment.submittedDate}`}
                  </div>
                </div>

                {activeTab === 'pending' ? (
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleFileUpload(assignment.id)}
                      className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                    >
                      <FaFileUpload className="mr-2" />
                      Upload Assignment
                    </button>
                    <button className="px-4 py-2 text-blue-900 border border-blue-900 rounded-md hover:bg-blue-50 transition-colors">
                      View Details
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-700">Grade:</span>
                      <span className={`${
                        assignment.grade === 'Pending Review' 
                          ? 'text-orange-600' 
                          : 'text-green-600'
                      }`}>
                        {assignment.grade}
                      </span>
                    </div>
                    <button className="px-4 py-2 text-blue-900 border border-blue-900 rounded-md hover:bg-blue-50 transition-colors">
                      View Submission
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assignments
