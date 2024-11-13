import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail]= useState("")
const [pass,setPass]= useState("")


    const handleSubmit =(e)=> {
        e.preventDefault()
        if (email.toLocaleLowerCase()=== "seckin@seckin.com" && pass === "1234") {}else {
      alert("Kullanici Bilgileri Yanlis")
        }
      }
    return (
        <div className="loginDiv font-second">
          <div className="h-[500px] w-11/12 sm:w-[475px] bg-five rounded-[20px] p-5 flex-col justify-center text-center">
    <div className="flex justify-center items-center mt-5 gap-2">
    <span className="w-[6px] h-[39px] bg-slate-700 animate-pulse"></span>
    <h1 className="text-[2rem]  text-teal-900 uppercase">Seckin's Restaurant</h1>
    </div>
    <div className="my-5">
        <h3 className="text-[1.5rem]">SIGN IN</h3>
        <p className="text-gray-500">Enter Your Credantials to access your account </p>
    </div>
    <form onSubmit={handleSubmit} className="flex flex-col text-left p-3 gap-5">
        <div className="flex flex-col gap-2">
    <label className="text-gray-600" htmlFor="email">Email</label>
    <input className="login-input" type="email" id="email"  placeholder="Enter your e-mail" onChange={(e)=>setEmail(e.target.value)}/>
    </div>
        <div className="flex flex-col gap-2">
    <label className="text-gray-600" htmlFor="">Password</label>
    <input className="login-input" type="text" id="password" placeholder="Enter your password" onChange={(e)=>setPass(e.target.value)} />
    </div>
    <div className="text-center">
    <button className=" w-[10rem] bg-blue-900 h-[2.5rem] uppercase hover:opacity-90 rounded-[7px] text-center justify-center">Sign in</button>
    <div className="flex justify-center items-center flex-wrap text-gray-600 mt-5 text-[0.8rem]">
       <span>Forgot your password?</span>
          <span className="text-teal-900 underline ml-3">Reset your password</span>
          </div>
          </div>
    </form>
    
                     
          </div>
        </div>
      );
}

export default Login