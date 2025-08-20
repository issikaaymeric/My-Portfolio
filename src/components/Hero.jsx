import React from 'react';
import avatar from '../assets/avatar.jpg'; // replace with your photo

function Hero() {
  return (
    <section id = "top" className="hero"  style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <img 
        src={avatar} 
        alt="Aymeric Issika" 
        style={{borderRadius: "50%", width: "150px", marginBottom: "1rem" }}
      />
      <h1>AI / ML | Cybersecurity | Tech & Finance</h1>
      <p>Hi! I'm Aymeric, a computer science student passionate about AI, machine learning, and deep learning. Let's innovate together in tech & finance!</p>
      <a href="#connect" className="btn" style={{fontFamily: "'Arial', 'Helvetica', sans-serif"}}>Connect with me</a>
    </section>
  );
}


export default Hero;
