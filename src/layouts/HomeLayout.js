import React from 'react'
import Navbar from './Navbar'

const HomeLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <h1>This is footer</h1>
    </div>
  )
}

export default HomeLayout