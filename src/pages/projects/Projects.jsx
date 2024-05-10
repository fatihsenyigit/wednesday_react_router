import React from "react";
import "./Projects.scss";

const Projects = () => {
  return (
    <div>
      <div className="project-bgImg-container">
        <div className="projects__bio-image">
          <h1>My Projects</h1>
        </div>
      </div>

      <main className="projects">
        <div className="projects__items">
          <div className="projects__item">
            <img src="img/project-1.jpg" alt="My Project" />
          </div>

          <div className="projects__item">
            <img src="img/project-2.jpg" alt="My Project" />
          </div>
          <div className="projects__item">
            <img src="img/project-3.jpg" alt="My Project" />
          </div>
          <div className="projects__item">
            <img src="img/project-4.jpg" alt="My Project" />
          </div>

          <div className="projects__item">
            <img src="img/project-5.jpg" alt="My Project" />
          </div>
          <div className="projects__item">
            <img src="img/project-6.jpg" alt="My Project" />
          </div>
        </div>
      </main>

      <footer className="vertical">
        <div className="social-icons">
          <a href="#twitter">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#facebook">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#instagram">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#github">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>

        <div className="copyright">&copy; Copyright 2023</div>
      </footer>
    </div>
  );
};

export default Projects;
