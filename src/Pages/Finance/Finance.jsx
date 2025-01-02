import React, { useState } from 'react'
import { 
  FaMoneyBillWave, 
  FaChartLine, 
  FaFileInvoice, 
  FaDownload,
  FaPlus,
  FaFilter,
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaWallet
} from 'react-icons/fa'

function Finance() {
  const [activeTab, setActiveTab] = useState('overview')
  
 

  
  const financialOverview = {
    totalRevenue: "₦25,500,000",
    pendingFees: "₦3,200,000",
    expenses: "₦18,700,000",
    balance: "₦6,800,000"
  }

  const recentTransactions = [
    {
      id: "TRX001",
      student: "Abiola Mahmud",
      type: "School Fees",
      amount: "₦150,000",
      date: "2024-03-15",
      status: "paid",
      class: "SSS 2"
    },
    {
      id: "TRX002",
      student: "Fatima Hassan",
      type: "Registration",
      amount: "₦50,000",
      date: "2024-03-14",
      status: "pending",
      class: "SSS 1"
    }
  ]

  const expenses = [
    {
      id: "EXP001",
      category: "Salaries",
      description: "Staff March Salaries",
      amount: "₦2,500,000",
      date: "2024-03-25",
      status: "scheduled"
    },
    {
      id: "EXP002",
      category: "Utilities",
      description: "Electricity Bill",
      amount: "₦150,000",
      date: "2024-03-20",
      status: "paid"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Financial Management</h1>
        <p className="text-gray-600">Track and manage school finances</p>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">{financialOverview.totalRevenue}</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FaMoneyBillWave className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <FaChartLine className="text-green-500 mr-2" />
            <span className="text-green-500">8.2% increase</span>
            <span className="text-gray-500 ml-2">from last term</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Fees</p>
              <h3 className="text-2xl font-bold text-gray-900">{financialOverview.pendingFees}</h3>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <FaFileInvoice className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-orange-500">
            <FaTimesCircle className="mr-2" />
            <span>25 students with pending fees</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Expenses</p>
              <h3 className="text-2xl font-bold text-gray-900">{financialOverview.expenses}</h3>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <FaWallet className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>All bills up to date</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current Balance</p>
              <h3 className="text-2xl font-bold text-gray-900">{financialOverview.balance}</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FaChartLine className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-blue-500">
            <FaCheckCircle className="mr-2" />
            <span>Healthy financial status</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['overview', 'transactions', 'expenses', 'reports'].map((tab) => (
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

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search transactions..."
              
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="date"
              
              
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex justify-end">
            <button className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
              <FaDownload className="mr-2" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
          <button className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
            <FaPlus className="mr-2" />
            New Transaction
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{transaction.student}</div>
                    <div className="text-sm text-gray-500">{transaction.class}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.status === 'paid' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Finance
