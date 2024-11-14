import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../components/Login';
import Register from '../components/Register';



const AppRouter = () => {
  return (
<>
<BrowserRouter>
  
      <Navbar/>
            <Routes>

<Route   path="/" element={<Home />} />
<Route   path="/Login" element={<Login/>} />
<Route   path="/Register" element={<Register/>} />
      <Route path="*" element={<NotFound />} />
</Routes>

  </BrowserRouter>
</>
  )
}

export default AppRouter