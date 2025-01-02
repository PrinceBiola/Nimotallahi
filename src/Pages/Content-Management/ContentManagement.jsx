import React, { useState } from 'react'
import { 
  FaNewspaper, 
  FaImages, 
  FaPlus, 
  FaEdit, 
  FaTrash,
  FaEye
} from 'react-icons/fa'

function ContentManagement() {
  const [activeTab, setActiveTab] = useState('news')

  
  const content = {
    news: [
      {
        id: 1,
        title: "School Wins State Science Competition",
        status: "published",
        author: "Admin",
        date: "2024-03-15",
        category: "Achievement"
      },
      {
        id: 2,
        title: "New Science Laboratory Inauguration",
        status: "draft",
        author: "Admin",
        date: "2024-03-20",
        category: "News"
      }
    ],
    pages: [
      {
        id: 1,
        title: "About Us",
        lastUpdated: "2024-03-10",
        status: "published"
      },
      {
        id: 2,
        title: "Admission Process",
        lastUpdated: "2024-03-12",
        status: "published"
      }
    ]
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600">Manage website content and media</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
          <FaPlus className="mr-2" />
          Add New Content
        </button>
      </div>

      {/* Content Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
            {[
              { name: 'news', icon: <FaNewspaper />, label: 'News & Updates' },
              { name: 'pages', icon: <FaImages />, label: 'Pages' }
            ].map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`${
                  activeTab === tab.name
                    ? 'border-blue-900 text-blue-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } flex items-center gap-2 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content List */}
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {activeTab === 'news' ? 'Author' : 'Last Updated'}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {activeTab === 'news' ? 'Category' : 'Type'}
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {content[activeTab].map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {activeTab === 'news' ? item.author : item.lastUpdated}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {activeTab === 'news' ? item.category : 'Page'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <FaEye />
                      </button>
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
      </div>
    </div>
  )
}

export default ContentManagement
