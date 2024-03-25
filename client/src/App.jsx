import React from 'react'
import './App.css'
import Home from './Home/Home'
import Property from './Property/index'
import SingleProperty from './SingleProperty/index'
import {Login} from './Login/index'
import { Dashboard } from './Dashboard/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/property' element={<Property />} />
        <Route path='/property/:propertyId' element={<SingleProperty />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
