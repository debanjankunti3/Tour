import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import About from './Routes/About'
import Services from './Routes/Services'
function App() {
  return (
    <div className='App'>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
  

      {/* <Navbar /> */}

    </div>
  )
}

export default App