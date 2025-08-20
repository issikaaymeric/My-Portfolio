import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Face Recognition",
    description: "A facial recognition system built with Python and TensorFlow.",
    tech: ["Python", "TensorFlow", "CNN"],
    github: "https://github.com/issikaaymeric/Face-Recognition",
    demo: "#",
  },
  {
    title: "Handwritten Digit Recognition",
    description: "Deep learning model to classify handwritten digits.",
    tech: ["Python", "CNN", "TensorFlow", "scikit-learn"],
    github: "https://github.com/issikaaymeric/handwritten-digit-recognition-with-scikit-learn",
    demo: "#",
  },
  {
    title: "Stock Price Predictor",
    description: "ML model predicting stock prices using historical data.",
    tech: ["Python", "scikit-learn", "TensorFlow"],
    github: "https://github.com/issikaaymeric/Stock-Price-Prediction",
    demo: "#",
  },
];

const Projects = () => (
  <section id="projects" style={{ padding: "3rem 1rem" }}>
    <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Projects</h2>
    <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
      {projects.map((p, idx) => (
        <div key={idx} style={{ border: "1px solid #ccc", borderRadius: "12px", padding: "1rem" }}>
          <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{p.title}</h3>
          <p style={{ marginBottom: "0.5rem" }}>{p.description}</p>
          <p style={{ marginBottom: "0.5rem", fontStyle: "italic" }}>Tech: {p.tech.join(", ")}</p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.25rem", textDecoration: "none" }}>
                <Github /> GitHub
              </a>
            )}
            {p.demo && p.demo !== "#" && (
              <a href={p.demo} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.25rem", textDecoration: "none" }}>
                <ExternalLink /> Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
