import React from "react";
import { FileText } from "lucide-react";
import "../index.css";

// Correct Google Docs export link (must end with /export?format=pdf)
const config = {
  resumeFile:
    "https://docs.google.com/document/d/18shjFWBk23Khke32lWi4tDlc_m8DCtXp/export?format=pdf",
};

const ResumeDownload = () => (
  <section id="resume" className="resume-section">
    <div className="container">
      <h2>Resume</h2>
      <p>Download my resume or view it in your browser.</p>

      <div className="resume-card">
        <div className="resume-info">
          <FileText className="resume-icon" />
          <p>
            Here’s a concise overview of my education, projects, and experience.
            I’m open to roles in AI/ML/DL and general tech roles.
          </p>
        </div>

        <div className="resume-buttons">
          {/* VIEW BUTTON */}
          <a
            href={config.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FileText className="icon-small" /> View
          </a>

          {/* DOWNLOAD BUTTON (Google Docs requires "download" workaround) */}
          <a
            href={config.resumeFile}
            className="btn outline"
            download="Aymeric_Issika_Resume.pdf"
          >
            <FileText className="icon-small" /> Download
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ResumeDownload;

