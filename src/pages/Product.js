import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'

const Product = () => {
  return (
    <HomeLayout>
        <div>
            <Link to="cycle">Cycle button</Link>
            <Link to="bike">Bike Button</Link>
        </div>
        <Outlet/>
    </HomeLayout>
  )
}

export default Product