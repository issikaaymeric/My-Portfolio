import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    image: "/opencv-python.png",
    title: "Face Recognition",
    description: "A facial recognition system built with Python and TensorFlow.",
    tech: ["Python", "TensorFlow", "CNN"],
    github: "https://github.com/issikaaymeric/Face-Recognition",
    demo: "#",
  },
  {
    image: "/handwritten-recognition.jpeg",
    title: "Handwritten Digit Recognition",
    description: "Deep learning model to classify handwritten digits.",
    tech: ["Python", "CNN", "TensorFlow", "scikit-learn"],
    github: "https://github.com/issikaaymeric/handwritten-digit-recognition-with-scikit-learn",
    demo: "#",
  },
  {
    image: "/Stock Price Prediction with Machine Learning in Python.jpeg",
    title: "Stock Price Predictor",
    description: "ML model predicting stock prices using historical data.",
    tech: ["Python", "scikit-learn", "TensorFlow"],
    github: "https://github.com/issikaaymeric/Stock-Price-Prediction",
    demo: "#",
  },
  {
    image: "/javascript-screenshort.png",
    title: "JavaScript Tutorial Website",
    description: "Tutorial website for learning JavaScript in French & English.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/issikaaymeric/Apprendre-les-Bases-de-JavaScript",
    demo: "https://issikaaymeric.github.io/Apprendre-les-Bases-de-JavaScript/index.html",
  },
  {
    image: "/python-tutorial-screenshot.png",
    title: "Python Tutorial Website",
    description: "Tutorial website for learning Python.",
    tech: ["Python", "HTML", "CSS"],
    github: "https://github.com/issikaaymeric/Python-Tutorial",
    demo: "https://issikaaymeric.github.io/Python-Tutorial/",
  },
  {
    video: "/arduino-project-video.mp4",
    title: "Arduino Rover",
    description: "A remote-controlled rover built with Arduino and C++.",
    tech: ["Arduino", "C++", "Electronics"],
  }
];

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "12px",
  padding: "1rem",
  background: "white",
};

const Projects = () => {
  return (
    <section id="projects" style={{ padding: "3rem 1rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Projects</h2>

      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {projects.map((p, idx) => (
          <div key={idx} style={cardStyle}>
            {/* Image or Video */}
            {p.video ? (
              <video
                src={p.video}
                muted
                controls
                autoPlay
                loop
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "fill",
                  borderRadius: "12px",
                  marginBottom: "1rem",
                }}
              />
            ) : (
              p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginBottom: "1rem",
                  }}
                />
              )
            )}

            {/* Title */}
            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              {p.title}
            </h3>

            {/* Description */}
            <p style={{ marginBottom: "0.5rem" }}>{p.description}</p>

            {/* Tech Stack */}
            {p.tech && (
              <p style={{ marginBottom: "0.5rem", fontStyle: "italic" }}>
                Tech: {p.tech.join(", ")}
              </p>
            )}

            {/* Links */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <Github size={18} /> GitHub
                </a>
              )}

              {p.demo && p.demo !== "#" && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <ExternalLink size={18} /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
