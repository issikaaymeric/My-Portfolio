import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Connect from './components/Connect';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeDownload from './components/ResumeDownload';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
       <ResumeDownload />
      <Connect />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
