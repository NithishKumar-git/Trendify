import React from 'react';
import Navbar from './components/Navbar.jsx';
import Homepage from './components/Homepage.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Top from './components/Top.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Top />
      <About />
      <ProductDetail />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
