import { useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/footer.jsx'

function App() {

  return (
    <div className = "App">
      <Navbar />
      <div className="flex flex-row items-center justify-center">
        <Hero />
      </div>
      <Footer/>

    </div>

 
  );
};

export default App