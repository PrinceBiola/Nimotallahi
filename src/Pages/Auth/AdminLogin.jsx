import React, { useState } from 'react'
import NavWrapper from '../../Components/NavWrapper'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
 

  return (
    <NavWrapper>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <form  className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium bg-blue-900 text-white hover:bg-blue-800 rounded-md transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </NavWrapper>
  );
}

export default AdminLogin
