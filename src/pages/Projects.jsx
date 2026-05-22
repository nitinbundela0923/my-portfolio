// Projects.jsx

import React from "react";
import "./Projects.css";

function Projects() {

  return (

    <div className="projects">

      <h1 className="heading">My Projects</h1>

      <div className="project-container">

        {/* CARD 1 */}

        <div className="card">

          <img
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop"
            alt="IPL"
          />

          <div className="card-content">

            <h2>IPL Data Analysis</h2>

            <p>
              Exploratory data analysis using Python,
              Pandas, Matplotlib and Seaborn.
            </p>

            <div className="tech">
              <span>Python</span>
              <span>Pandas</span>
              <span>Matplotlib</span>
              <span>Seaborn</span>
            </div>

            <div className="buttons">
              <a href="https://github.com/nitinbundela0923/IPL-Matches-data-analysis" className="github">GitHub</a>
              <a
                  href="/reports/ipl-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details"
              >
                View Details
              </a>
            </div>

          </div>

        </div>

        {/* CARD 2 */}

        <div className="card">

          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
            alt="FIFA"
          />

          <div className="card-content">

            <h2>FIFA Players Analysis</h2>

            <p>
              Visualized player statistics using NumPy,
              Pandas and Plotly dashboards.
            </p>

            <div className="tech">
              <span>Python</span>
              <span>NumPy</span>
              <span>Pandas</span>
              <span>Plotly</span>
            </div>

            <div className="buttons">
              <a href="https://github.com/nitinbundela0923/FIFA-players-data-analysis" className="github">GitHub</a>
              <a
                  href="/reports/fifa-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details"
              >
                View Details
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Projects;