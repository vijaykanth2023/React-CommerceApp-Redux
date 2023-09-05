import React from 'react'
// import Dashboard from './Dashboard'
import { Routes, Route  } from 'react-router-dom'
import Header from '../component/Header'
import Cart from './Cart'
import Checkout from './Checkout'
import Dashboard from './Dashboard'
import Product from './Product'

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/">
          <Route path="" element={<Checkout/>} />
          <Route path=":id" element={<Checkout/>} />
        </Route>
    </Routes>
    </div>
  )
}

export default Home
