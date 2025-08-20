import React from 'react';

const skills = [
  "Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch",
  "JavaScript", "React","React Native", "Dart", "Flutter", "Node.js","C++",
  "Arduino", "Problem Solving","Collaboration"
];

function Skills() {
  return (
    <section id="skills" className="container">
      <h2>Programming Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
