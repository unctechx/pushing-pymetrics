"use client"
import React, { useState } from 'react';

const SignIn = () => {
  // State to toggle between login and signup forms

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
     

      {/* Main content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="p-6 border-2 border-gray-200 border-opacity-60 rounded-lg shadow-lg">
          
            <div className="flex flex-col">
              <h2 className="text-2xl font-medium text-purple-800 mb-3">Create an Account</h2>
              <input className="mb-3 p-2 border rounded" placeholder="Username:" />
              <input className="mb-3 p-2 border rounded" placeholder="Password:"  />
              <input className="mb-3 p-2 border rounded" placeholder="Confirm Password:"  />


              <button className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 ">
                Create
              </button>
             
              <div className="flex mt-3 justify-end"> 
              <p className="mr-1">Already have an account?</p>
              <a href="/auth/sign-in" className="mr-2 text-purple-600 underline hover:text-purple-300 transition-colors">Sign In</a>
              </div>
         </div>
  
        </div>
      </div>

    
    </div>
  );
};

export default SignIn;