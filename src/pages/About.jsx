import "./About.css";
import { FaUser } from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        {/* ABOUT TEXT */}

        <div className="about-text">

          <h4>ABOUT ME</h4>

          <p>
            Hello! I'm Nitin Bundela, a passionate Data Science and Analytics enthusiast with a strong interest in transforming raw data into meaningful insights and interactive visualizations. I enjoy working with data, building modern web projects, and continuously learning new technologies in the field of data science and development.
          </p>

          <p>
            I have hands-on experience with tools and technologies like Python, Pandas, NumPy, SQL, Power BI, React, and GitHub. I love creating projects that combine creativity with analytical thinking, including sports analytics and dashboard development.
          </p>

          <p>
            I have also earned certifications from IBM and Kaggle, which helped strengthen my skills in data analysis, machine learning, and practical problem-solving.
          </p>

          <p>
            My goal is to grow as a data professional and build impactful solutions through technology and innovation.
          </p>

          {/* CARDS */}

          <div className="about-cards">

            <div className="card">
              <h2>📊</h2>
              <h3>Data Analysis</h3>
              <p>Transforming raw data into meaningful insights.</p>
            </div>

            <div className="card">
              <h2>🤖</h2>
              <h3>Machine Learning</h3>
              <p>Learning AI technologies and intelligent systems.</p>
            </div>

            <div className="card">
              <h2>💻</h2>
              <h3>Web Development</h3>
              <p>Building modern and responsive websites.</p>
            </div>

            <div className="card">
              <h2>🚀</h2>
              <h3>Problem Solver</h3>
              <p>Creating innovative and scalable solutions.</p>
            </div>

          </div>


          {/* LEARNING PLATFORMS */}

          <section className="learning-section">

            <h1>Platforms I Learn From</h1>

            <div className="learning-container">

              <div className="learning-card">
                <img src="public/images/kaggle.png" alt="Kaggle" />
                <h2>Kaggle</h2>
                <p>Data Science, Machine Learning & Real Datasets</p>
              </div>

              <div className="learning-card">
                <img src="public/images/ibm.png" alt="IBM" />
                <h2>IBM</h2>
                <p>Professional Certifications & Data Analytics</p>
              </div>

              <div className="learning-card">
                <img src="public/images/youtube.png" alt="YouTube" />
                <h2>YouTube</h2>
                <p>Web Development & Programming Tutorials</p>
              </div>

              <div className="learning-card">
                <img src="public/images/chronosphere.png" alt="Chronosphere" />
                <h2>Chronosphere</h2>
                <p>Training & Technical Skills</p>
              </div>

            </div>

          </section>

          {/* BUTTON */}

          <div className="btn-center">

            <a href="/projects" className="btn primary-btn">
              <FaUser />
               VIEW PROJECTS
            </a>

            <a href="/Chronosphere-Feedback.pdf" download className="btn feedback-btn">
              DOWNLOAD FEEDBACK FROM CHRONOSPHERE
            </a>

          </div>
        </div>

      </div>

    </section>
  );
}

export default About;