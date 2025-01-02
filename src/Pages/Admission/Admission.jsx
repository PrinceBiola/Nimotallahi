import React from 'react'
import NavWrapper from '../../Components/NavWrapper'
import { FaClipboardList, FaFileAlt, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa'

function Admission() {
  return (
    <NavWrapper>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Admission Process</h1>
            <p className="text-xl text-gray-300">Join our community of learners</p>
          </div>
        </div>

        {/* Admission Requirements */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaClipboardList className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We welcome students who are committed to academic excellence and moral values.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* JSS1 Requirements */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">JSS1 Entry Requirements</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Minimum age of 10 years</li>
                  <li>• Primary School Certificate</li>
                  <li>• Successful completion of common entrance examination</li>
                  <li>• Report card from previous school</li>
                  <li>• Birth certificate or age declaration</li>
                  <li>• Passport photographs</li>
                </ul>
              </div>

              {/* Transfer Admission */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Transfer Admission</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Transfer certificate from previous school</li>
                  <li>• Last three terms' academic records</li>
                  <li>• Character testimonial</li>
                  <li>• Entrance assessment test</li>
                  <li>• Interview with parents/guardians</li>
                  <li>• Previous school fees clearance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaFileAlt className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    step: "Step 1: Purchase Form",
                    description: "Obtain admission form from the school or download from our website"
                  },
                  {
                    step: "Step 2: Submit Application",
                    description: "Complete and submit the application form with all required documents"
                  },
                  {
                    step: "Step 3: Entrance Examination",
                    description: "Attend and pass the entrance examination"
                  },
                  {
                    step: "Step 4: Interview",
                    description: "Successful candidates and parents attend an interview"
                  },
                  {
                    step: "Step 5: Admission Offer",
                    description: "Receive admission offer and accept by paying required fees"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{step.step}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* School Fees */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaMoneyBillWave className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">School Fees Structure</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                Our fees are structured to provide quality education at affordable rates
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Junior Secondary (Per Term)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Tuition Fee</span>
                    <span className="font-semibold">₦25,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Development Levy</span>
                    <span className="font-semibold">₦5,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Books and Materials</span>
                    <span className="font-semibold">₦15,000</span>
                  </li>
                  <li className="border-t pt-2 mt-2 flex justify-between font-bold text-blue-900">
                    <span>Total</span>
                    <span>₦45,000</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Senior Secondary (Per Term)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Tuition Fee</span>
                    <span className="font-semibold">₦30,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Development Levy</span>
                    <span className="font-semibold">₦5,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Books and Materials</span>
                    <span className="font-semibold">₦20,000</span>
                  </li>
                  <li className="border-t pt-2 mt-2 flex justify-between font-bold text-blue-900">
                    <span>Total</span>
                    <span>₦55,000</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">Additional Information:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• One-time admission fee of ₦10,000 for new students</li>
                  <li>• Uniform fee: ₦15,000 (complete set)</li>
                  <li>• Payment plans available for termly fees</li>
                  <li>• Sibling discount of 10% available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Timeline */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FaCalendarAlt className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Timeline</h2>
            </div>
            <div className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-4 text-gray-600">
                <li className="flex justify-between items-center">
                  <span>Form Sales Begin</span>
                  <span className="font-semibold">March 1st, 2025</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Entrance Examination Date</span>
                  <span className="font-semibold">April 15th, 2025</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Interview Period</span>
                  <span className="font-semibold">April 25th - May 5th, 2025</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Admission List Release</span>
                  <span className="font-semibold">May 15th, 2025</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Payment Deadline</span>
                  <span className="font-semibold">June 1st, 2025</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </NavWrapper>
  )
}

export default Admission
