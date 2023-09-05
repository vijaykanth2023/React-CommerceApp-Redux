import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from '../container/Home'
// import Product from '../container/Product'
const Routerpath = () => {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routerpath
