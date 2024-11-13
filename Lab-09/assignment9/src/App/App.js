import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Jobs from './pages/Jobs/Jobs';
import Home from './pages/Home/Home';
import Company from './pages/Company/Company';
// import Layout from './components/layout';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
   
    <BrowserRouter>
    
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;