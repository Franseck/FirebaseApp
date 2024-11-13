import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
      <Navbar/>
            <Routes>
                  <Route  exact path="" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
            </Routes>
  </BrowserRouter>
    </div>
  )
}

export default AppRouter