import React, {  useState } from 'react'
import {  signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup} from "firebase/auth";
import { auth } from "../components/Firebase";
import { Link, useNavigate } from 'react-router-dom';
import { toastErrorNotify, toastSuccessNotify } from '../helpers/Toast';



const Login = () => {

    const [email, setEmail]= useState("")
const [password,setPassword]= useState("")
const navigate = useNavigate("")

const loginWithGoogle = ()=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
   navigate("/")
   toastSuccessNotify("Logged in Successfully")

  }).catch((error) => {
toastErrorNotify(error.message)

  });
}


const login =async()=>{
  try {
      const response= await  signInWithEmailAndPassword (auth, email, password);
    const user = response.user;
  if(user){
<Link to="/"/>
 alert("Giris Yapildi!")
   setEmail("");
  setPassword("");
  }
  } catch (error) {
      alert("Giris Yapilamadi!" + error.message)
  }
  
    }

  

    return (
        <div className="loginDiv font-second">
          <div className="h-[500px] w-11/12 sm:w-[475px] bg-five rounded-[20px] p-5 flex-col justify-center text-center">
    <div className="flex justify-center items-center mt-5 gap-2">
    <span className="w-[6px] h-[39px] bg-slate-700 animate-pulse"></span>
    <h1 className="text-[2rem]  text-teal-900 uppercase">FireBase Tutorial</h1>
    </div>
    <div className="my-5">
        <h3 className="text-[1.5rem]">SIGN IN</h3>
        <p className="text-gray-500">Enter Your Credantials to access your account </p>
    </div>
    <form className="flex flex-col text-left p-3 gap-5">
        <div className="flex flex-col gap-2">
    <label className="text-gray-600" htmlFor="email">Email</label>
    <input className="login-input" type="email" value={email} id="email" 
    autoComplete='email' placeholder="Enter your e-mail = (test@test.com)" onChange={(e)=>setEmail(e.target.value)}/>
    </div>
        <div className="flex flex-col gap-2">
    <label className="text-gray-600" htmlFor="password">Password</label>
    <input className="login-input" type="text" id="password" value={password} placeholder="Enter your password = (123456)" onChange={(e)=>setPassword(e.target.value)} />
    </div>
    <div className="flex flex-col text-center justify-center items-center">

    <button   onClick={login}  className=" w-[10rem] bg-blue-900 h-[2.3rem] uppercase hover:opacity-90 rounded-[7px] hover:text-primary text-center justify-center">Sign in</button>

    <div className="">
    <button onClick={loginWithGoogle} className=" flex items-center justify-center text-center mt-1 w-[12rem] bg-blue-900 h-[2.5rem] uppercase hover:opacity-90 rounded-[7px] hover:text-primary">
        <img className="w-6 h-6 mr-2" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>Login with Google
            </button>
</div>

    <div className="flex justify-center items-center flex-wrap text-gray-600 mt-3 text-[0.8rem]">
       <span>Don't have an account?</span>
          <span className="text-teal-900 underline ml-3"> <Link to="/Register">Create a New Account</Link> </span>
          </div>
          </div>
    </form>
   
                     
          </div>
        </div>
      );
}

export default Login