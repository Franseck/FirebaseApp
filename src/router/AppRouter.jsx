import React from 'react'

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