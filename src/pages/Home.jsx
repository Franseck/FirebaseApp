import React from 'react'
import pass from "../assets/pass.jpg"
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate("")
  
  return (
    <div className='bg-third'>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img  src={pass} className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-xl" alt="hero" />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-less">Firebase Authentication Tutorial</h1>
      <p className="mb-8 leading-relaxed text-primary font-less">This is an introductory Firebase tutorial, which covers the basics of the Firebase platform and explains how to deal with its various components and sub-components.</p>
      <div className="flex justify-center font-less ">
        <button className="inline-flex text-tex bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary 0 rounded text-lg" onClick={()=>navigate("/Register")}>Register</button>
        <button className="ml-4 inline-flex text-secondary bg-tex border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg" onClick={()=>navigate("/Login")}>Signin</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home