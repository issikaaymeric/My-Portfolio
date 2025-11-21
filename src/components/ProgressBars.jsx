import React from "react";

export default function ProgressBars() {
  const languages = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      fill: "fill green",
      id: "fill_python",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      fill: "fill green",
      id: "fill_javascript",
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      fill: "fill green",
      id: "fill_csharp",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      fill: "fill yellow",
      id: "fill_cpp",
    },
    {
      name: "HTML / CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      fill: "fill green",
      id: "fill_html_css",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      fill: "fill yellow",
      id: "fill_php",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      fill: "fill red",
      id: "fill_myspl",
    },
  ];

  return (
    <div className="programming-languages">
      {languages.map((lang, index) => (
        <li key={index} className="language-item">

          <div className="language-header">
            <img src={lang.logo} alt={lang.name} className="language-logo" />
            <span className="language-label">{lang.name}</span>
          </div>

          <div className="bar">
            <div className={lang.fill} id={lang.id}></div>
          </div>

        </li>
      ))}
    </div>
  );
}
