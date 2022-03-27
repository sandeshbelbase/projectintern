import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'

const Home = () => {
    const navigate = useNavigate()
     const handleButton=() =>{
        navigate('/contact')
    }
  return (
    <HomeLayout>
    <h1>This is a home page </h1>
    <button onClick={handleButton}>Click me</button>
    </HomeLayout>
    )
}

export default Home