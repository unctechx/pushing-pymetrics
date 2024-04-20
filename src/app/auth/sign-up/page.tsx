"use client"
import {useState} from "react"
import {signup} from "@/lib/actions/auth"
export default function SignUp() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmPass,setConfirmPass]=useState("");

  const isFormValid = () => email.length>0 && password.length>0 && (confirmPass==password)
  const handleSignup = async(
    event: React.MouseEvent<HTMLButtonElement,MouseEvent>
  )=>{
    alert("Handle Signup")
    try{
      await signup({email,password});
      console.log("Check your email to verify your account")

    }
    catch (err: any){
      alert(err.message)
    }
  }
  
  return (
    <div className="flex flex-col min-h-screen width-full justify-between bg-gray-100 ">
      <nav className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
          <a href="/app/page">
            <img
              src="/pymetrics-removebg-preview.png"
              className="h-8 w-8"
              alt="Logo"
            />
            <h1 className="text-3xl font-bold">PyMetrics</h1>
          </a>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-purple-300 transition-colors">
            Sign Up/In
          </a>
        </div>
      </nav>

      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Sign up component */}
        <div className="flex flex-1 items-center justify-center">
          <div className="p-6 border-2 border-gray-200 border-opacity-60 rounded-lg shadow-lg">
            <div className="flex flex-col">
              <h2 className="text-2xl font-medium text-purple-800 mb-3">
                Create an Account
              </h2>

              <form>
                <input
                  className="mb-3 p-2 border rounded"
                  placeholder="Email Address:"
                  required
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  autoCorrect="off"
                  autoComplete="email"
                  type="email"
                />
                <input
                  className="mb-3 p-2 border rounded"
                  placeholder="Password:"
                  required
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  autoCorrect="off"
                  autoComplete="password"
                  type="password"
                />
                <input
                  className="mb-3 p-2 border rounded"
                  placeholder="Confirm Password:"
                  required
                  value={confirmPass}
                  onChange={(e)=>{setConfirmPass(e.target.value)}}
                  autoCorrect="off"
                  autoComplete="password"
                  type="password"
                />

                <button disabled={!isFormValid()} onClick={handleSignup} className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 ">
                  Create
                </button>
              </form>
              

              <div className="flex mt-3 justify-end">
                <p className="mr-1">Already have an account?</p>
                <a
                  href="/auth/sign-in"
                  className="mr-2 text-purple-600 underline hover:text-purple-300 transition-colors"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-purple-900 text-white py-6 px-8 text-center">
        <p>&copy; {new Date().getFullYear()} PyMetrics. All rights reserved.</p>
      </footer>
    </div>
  );
}
