import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import './index.css';
import Skill from './components/skill';
import Projects from './components/Projects';
import Footer from './components/footer';
import Contact from './pages/contact'; 

const App = () => {
  return (
    <div className='bg-neutral-100 min-h-screen min-w-screen'>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skill />
            <Projects />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
