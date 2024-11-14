import React from 'react'
import Logo from "../assets/Logo.png"
import { useNavigate } from 'react-router-dom'
import {  signOut } from "firebase/auth"
import { auth } from './Firebase'

const Navbar = () => {

const navigate = useNavigate("")

const logout = async()=> {
    signOut(auth);
  alert("Signed out !");
  navigate("/Login");
}

  return (
    <>
       <nav
             className=" w-full bg-secondaryDark  py-4 sm:py-0 font-dot "
      >
        <div className="container text-five ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-2xl">
              <img src={Logo} alt="" onClick={()=>navigate("/")}  className="w-11 cursor-pointer" />
              <span className='font-second text-3xl text-primary ' >Fire</span>BASE
            </div>
            <div className=" hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 font-bold">
                <li>
                  <a href="/" className='hover:text-primary'>Home</a>
                </li>
                <li>
                  <a className='hover:text-primary' href="/Login">Signin</a>
                </li>
                <li>
                  <a className='hover:text-primary' href="/Register">Signup</a>
                </li>
                <li>
                <a className='hover:text-primary' href="/About">About</a>
                </li>
              </ul>
            </div>
            <div className='flex items-center'>
              <button onClick={logout} className="  border-2 border-gray-400 px-3 py-1 rounded-md hover:text-primary hover:bg-third">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>


       
</>
    
  )
}

export default Navbar