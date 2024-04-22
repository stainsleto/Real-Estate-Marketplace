import React from 'react'
import './App.css'
import Home from './Home/Home'
import Property from './Property/index'
import SingleProperty from './SingleProperty/index'
import {Login} from './Login/index'
import  Dashboard  from './Dashboard/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Signup from './Signup'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<Signup />} />
        <Route  path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />

        <Route path='/property' element={<Property />} />
        <Route path='/property/:propertyId' element={<SingleProperty />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
