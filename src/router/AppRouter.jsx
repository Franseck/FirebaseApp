import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../components/Login';

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
      <Navbar/>
            <Routes>
                  <Route  exact path="" element={<Home />} />
                  <Route   path="/Login" element={<Login/>} />
                  
                  <Route path="*" element={<NotFound />} />
            </Routes>
  </BrowserRouter>
    </div>
  )
}

export default AppRouter