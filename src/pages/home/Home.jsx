import React from "react";
import "./Home.scss";
import "../../App.scss";

const Home = () => {
  return (
    <div>
      <div className="home-bgImg-container">
        <main className="home">
          <h2>Hi! My Name Is</h2>
          <h1 className="home__name">
            Wednesday <span className="home__name--last">Addams</span>
          </h1>
          <h2>Full Stack Web Developer</h2>
        </main>

        <footer className="horizontal">
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
    </div>
  );
};

export default Home;
