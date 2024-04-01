

"use client"
import React, { useState } from 'react';

const SignUp = () => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
     

      {/* Main content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="p-6 border-2 border-gray-200 border-opacity-60 rounded-lg shadow-lg">
          
            <div className="flex flex-col">
              <h2 className="text-2xl font-medium text-purple-800 mb-3">Sign In</h2>
              <input className="mb-3 p-2 border rounded" placeholder="Username:" />
              <input className="mb-3 p-2 border rounded" placeholder="Password:"  />
            


              <button className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 ">
                Sign In
              </button>
             
             
            </div>
         
  
        </div>
      </div>

    
    </div>
  );
};

export default SignUp;