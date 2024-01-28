import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './pages/admin'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Login from './pages/login'
import ProtectedRoute from './components/protectedRoute'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/add-product' element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<p>page not found</p>} />
      </Routes>
    </div>
  )
}

export default AllRoutes