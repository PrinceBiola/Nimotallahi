import React, { useState } from 'react'
import { FaChartLine, FaBook, FaTrophy, FaChartBar } from 'react-icons/fa'

function Grades() {
  const [selectedTerm, setSelectedTerm] = useState('First Term')

  
  const grades = {
    "First Term": {
      subjects: [
        {
          name: "Mathematics",
          assignments: 85,
          tests: 78,
          exam: 92,
          total: 85,
          grade: "A",
          teacher: "Mr. Salahudeen",
          comment: "Excellent performance in problem-solving"
        },
        {
          name: "English Language",
          assignments: 75,
          tests: 82,
          exam: 88,
          total: 82,
          grade: "A",
          teacher: "Mrs. Aisha",
          comment: "Good writing skills, needs improvement in grammar"
        },
        {
          name: "Physics",
          assignments: 90,
          tests: 85,
          exam: 95,
          total: 90,
          grade: "A",
          teacher: "Mr. Ibrahim",
          comment: "Outstanding grasp of concepts"
        },
        {
          name: "Chemistry",
          assignments: 78,
          tests: 75,
          exam: 85,
          total: 79,
          grade: "B",
          teacher: "Mr. Ahmed",
          comment: "Good practical work, theory needs attention"
        },
        {
          name: "Islamic Studies",
          assignments: 95,
          tests: 92,
          exam: 96,
          total: 94,
          grade: "A",
          teacher: "Ustadh Abdullah",
          comment: "Excellent understanding of Islamic principles"
        }
      ],
      summary: {
        average: 86,
        position: "5th",
        totalStudents: 40,
        remarks: "Very good performance. Keep it up!"
      }
    }
  }

  const terms = ["First Term", "Second Term", "Third Term"]

  return (
    <div className="space-y-6">
      {/* Header with Summary */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Academic Performance</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              title: "Term Average",
              value: `${grades[selectedTerm].summary.average}%`,
              icon: <FaChartLine className="text-blue-600" />,
              color: "bg-blue-50"
            },
            {
              title: "Class Position",
              value: grades[selectedTerm].summary.position,
              icon: <FaTrophy className="text-yellow-600" />,
              color: "bg-yellow-50"
            },
            {
              title: "Total Students",
              value: grades[selectedTerm].summary.totalStudents,
              icon: <FaChartBar className="text-green-600" />,
              color: "bg-green-50"
            },
            {
              title: "Subjects",
              value: grades[selectedTerm].subjects.length,
              icon: <FaBook className="text-purple-600" />,
              color: "bg-purple-50"
            }
          ].map((stat, index) => (
            <div key={index} className={`${stat.color} rounded-lg p-4`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">{stat.title}</span>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Term Selector */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex space-x-4">
          {terms.map((term) => (
            <button
              key={term}
              onClick={() => setSelectedTerm(term)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTerm === term
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Grades Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignments (40%)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tests (20%)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam (40%)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {grades[selectedTerm].subjects.map((subject, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{subject.name}</div>
                    <div className="text-sm text-gray-500">{subject.teacher}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{subject.assignments}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{subject.tests}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{subject.exam}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-gray-900">{subject.total}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      subject.grade === 'A' ? 'bg-green-100 text-green-800' :
                      subject.grade === 'B' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {subject.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{subject.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Term Remarks */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Term Remarks</h3>
          <p className="text-gray-600">{grades[selectedTerm].summary.remarks}</p>
        </div>
      </div>
    </div>
  )
}

export default Grades
