import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import ProductDetail from './components/ProductDetail'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import Top from './components/Top'

function App() {
  return (
    <div>
      <Navbar />
      <Top/>
      <Homepage/>
      <About/>
      <ProductDetail/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App