import "./Home.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaDownload,
  FaUser,
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  FaDatabase,
  FaChartColumn,
  FaRocket,
  FaCode,
  FaBookOpen,
  FaCube,
} from "react-icons/fa6";

function Home() {
  return (
    <>
      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          {/* LEFT SIDE */}

          <div className="hero-text">

            <h1>
              Hi, I am <span>NITIN BUNDELA</span>
            </h1>

            <p className="subtitle">
              AI & Data Science Learner
            </p>

            <p className="description">
              I am passionate about turning data into actionable insights
              and building intelligent solutions using AI and Machine Learning.
            </p>

            {/* BUTTONS */}

            <div className="hero-buttons">

              <a href="/about" className="btn primary-btn">
                <FaUser />
                MORE ABOUT ME
              </a>

              <a  
                  href="RESUME.pdf"
                  download = "RESUME"
                  className="btn secondary-btn"
              >
              <FaDownload />
                DOWNLOAD RESUME
              </a>

            </div>

            {/* SOCIAL ICONS */}

            <div className="social-icons">

              <a 
                  href="https://github.com/nitinbundela0923"
                  target="_blank"
                  rel="noreferrer">
                <FaGithub />
              </a>

              <a 
                  href="https://linkedin.com/in/nitin-bundela-a66912405"
                  target="_blank"
                  rel="noreferrer">
                <FaLinkedin />
              </a>

              <a 
                  href="https://instagram.com/nit_incore"
                  target="_blank"
                  rel="noreferrer">
                <FaInstagram />
              </a>

              <a href="mailto:nitinbundela09@gmail.com">
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}

          <div className="hero-image">

            <div className="circle">

              <img
                src="public/nitin.png"
                alt="Profile"
              />

            </div>

          </div>

        </div>

      </section>

      {/* STATS SECTION */}

      <section className="stats">

        <div className="stat-box">
          <FaCode className="icon" />
          <h2>10+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-box">
          <FaRocket className="icon" />
          <h2>5+</h2>
          <p>Technologies Used</p>
        </div>

        <div className="stat-box">
          <FaBookOpen className="icon" />
          <h2>AI / DS</h2>
          <p>Data Science Learner</p>
        </div>

        <div className="stat-box">
          <FaPython className="icon" />
          <h2>Python</h2>
          <p>Python Developer</p>
        </div>

      </section>

      {/* SKILLS SECTION */}

      <section className="skills">

        <h1>
          SKILLS & <span>TOOLS</span>
        </h1>

        <div className="skills-grid">

          <div className="skill-card">
            <FaPython className="skill-icon" />
            <h3>Python</h3>
          </div>

          <div className="skill-card">
            <FaChartColumn className="skill-icon" />
            <h3>Pandas</h3>
          </div>

          <div className="skill-card">
            <FaCube className="skill-icon" />
            <h3>NumPy</h3>
          </div>

          <div className="skill-card">
            <FaDatabase className="skill-icon" />
            <h3>SQL</h3>
          </div>

          <div className="skill-card">
            <FaChartColumn className="skill-icon" />
            <h3>Power BI</h3>
          </div>

          <div className="skill-card">
            <FaReact className="skill-icon" />
            <h3>React</h3>
          </div>

          <div className="skill-card">
            <FaGithub className="skill-icon" />
            <h3>GitHub</h3>
          </div>

          <div className="skill-card">
            <FaCode className="skill-icon" />
            <h3>VS Code</h3>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;