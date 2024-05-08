import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import './App.scss'
import Services from './Components/Services/Services';
const App = () => {
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
