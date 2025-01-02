import React, { useState } from 'react'
import { 
  FaSearch, 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaDownload,
  FaFilter,
  FaCheckCircle,
  FaTimesCircle,
  FaMoneyBillWave
} from 'react-icons/fa'

function StaffManagement() {
  
  

  
  const staffMembers = [
    {
      id: "STF001",
      name: "Mr. Salahudeen",
      department: "Science",
      subject: "Mathematics",
      qualification: "B.Sc., PGDE",
      joinDate: "2020-09-01",
      phone: "+234 803 439 5587",
      email: "salahudeen@nimotallahi.com",
      salary: "₦150,000",
      status: "active",
      attendance: "95%"
    },
    {
      id: "STF002",
      name: "Mrs. Aisha",
      department: "Languages",
      subject: "English",
      qualification: "B.A., M.Ed.",
      joinDate: "2019-03-15",
      phone: "+234 805 555 1234",
      email: "aisha@nimotallahi.com",
      salary: "₦145,000",
      status: "active",
      attendance: "98%"
    }
  ]

  const departments = ["All", "Science", "Languages", "Islamic Studies", "Arts", "Social Science"]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
          <p className="text-gray-600">Manage staff records and information</p>
        </div>
        <button
          className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
        >
          <FaPlus className="mr-2" />
          Add New Staff
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search staff..."
             
              
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Department Filter */}
          <div className="relative">
            <select
             
              
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept.toLowerCase()}>{dept}</option>
              ))}
            </select>
            <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Quick Stats */}
          <div className="md:col-span-2 flex justify-end space-x-4">
            <div className="px-4 py-2 bg-blue-50 rounded-md">
              <span className="text-sm text-blue-900">Total Staff: 45</span>
            </div>
            <div className="px-4 py-2 bg-green-50 rounded-md">
              <span className="text-sm text-green-900">Active: 42</span>
            </div>
            <div className="px-4 py-2 bg-orange-50 rounded-md">
              <span className="text-sm text-orange-900">On Leave: 3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Staff ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name & Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Qualification
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Salary
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {staffMembers.map((staff) => (
                <tr key={staff.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {staff.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                    <div className="text-sm text-gray-500">{staff.email}</div>
                    <div className="text-sm text-gray-500">{staff.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{staff.department}</div>
                    <div className="text-sm text-gray-500">{staff.subject}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {staff.qualification}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{staff.salary}</div>
                    <div className="text-xs text-gray-500">Monthly</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {staff.attendance}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      staff.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {staff.status}
                    </span>
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

        {/* Pagination */}
        <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
              <span className="font-medium">45</span> results
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Previous</button>
              <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffManagement
