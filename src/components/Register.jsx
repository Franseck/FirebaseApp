import React from 'react'
import Logo from "../assets/Logo.png"

const Register = () => {
  return (

<div className="flex flex-col justify-center sm:h-screen bg-sixth p-4 font-second">
      <div className="max-w-md w-full mx-auto border border-gray-300 bg-fifth rounded-2xl p-8 ">
        <div className="text-center mb-12">
          <a href="/"><img
            src={Logo }alt="logo" className='w-40 inline-block rounded-xl' />
          </a>
        </div>

        <form>
          <div className="space-y-6">
            <div>
              <label className="text-three text-sm mb-2 block">Email</label>
              <input name="email" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-third" placeholder="Enter email" />
            </div>
            <div>
              <label className="text-three text-sm mb-2 block">Password</label>
              <input name="password" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-third" placeholder="Enter password" />
            </div>
            <div>
              <label className="text-three text-sm mb-2 block">Confirm Password</label>
              <input name="cpassword" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
            </div>

            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-third focus:ring-third border-gray-300 rounded" />
              <label for="remember-me" className="text-gray-800 ml-3 block text-sm">
                I accept the <a href="javascript:void(0);" className="font-semibold hover:underline ml-1 text-tex">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div className="!mt-12">
            <button type="button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-primary bg-tex hover:bg-third focus:outline-none">
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="/Login" className="text-three font-semibold hover:underline ml-1">Login here</a></p>
        </form>
      </div>
    </div>
    
  )
}

export default Register