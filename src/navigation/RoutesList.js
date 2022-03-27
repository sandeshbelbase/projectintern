import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bike from '../components/products/Bike'
import Cycle from '../components/products/Cycle'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Product from '../pages/Product'

const RoutesList = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>}>
            <Route index element={<Cycle/>}/>
            <Route path="cycle" element={<Cycle/>} />
            <Route path="bike" element={<Bike/>} />
        </Route>
    </Routes>
  )
}

export default RoutesList