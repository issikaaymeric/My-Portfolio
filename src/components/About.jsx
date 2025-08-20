import React from 'react';

function About() {
  return (
    <section id="about" className="container">
      <h2>About Me</h2>
      <h3 style={{fontFamily: "Times New Roman, serif"}}> Issika Aymeric Theophile Cokanh Kouamé</h3>
      <p>
        I'm Aymeric Issika, a computer science student specializing in AI, Machine Learning, and Deep Learning.
        I am passionate about leveraging technology to solve real-world problems and connecting with entrepreneurs and finance professionals.
      </p>
      <p>
        Let's collaborate on innovative projects or discuss emerging trends in AI and fintech!
      </p>
      <a href="#connect" className="btn">Let's Connect</a>
    </section>
  );
}

export default About;
