

const Projects = () => {
  return (
    <div>
    <div class="project-bgImg-container">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="index.html" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="about.html" class="nav__link">About Me</a>
          </li>
          <li class="nav__item">
            <a href="projects.html" class="nav__link nav__link--active"
              >My Projects</a
            >
          </li>
          <li class="nav__item">
            <a href="contact.html" class="nav__link">Contact</a>
          </li>
        </ul>
      </nav>

      <div class="projects__bio-image">
        <h1>My Projects</h1>
      </div>
    </div>

    <main class="projects">
      <div class="projects__items">
        <div class="projects__item">
          <img src="img/project-1.jpg" alt="My Project" />
        </div>

        <div class="projects__item">
          <img src="img/project-2.jpg" alt="My Project" />
        </div>
        <div class="projects__item">
          <img src="img/project-3.jpg" alt="My Project" />
        </div>
        <div class="projects__item">
          <img src="img/project-4.jpg" alt="My Project" />
        </div>

        <div class="projects__item">
          <img src="img/project-5.jpg" alt="My Project" />
        </div>
        <div class="projects__item">
          <img src="img/project-6.jpg" alt="My Project" />
        </div>
      </div>
    </main>

    <footer class="vertical">
      <div class="social-icons">
        <a href="#">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
        <a href="#">
          <i class="fab fa-facebook fa-2x"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a href="#">
          <i class="fab fa-github fa-2x"></i>
        </a>
      </div>

      <div class="copyright">&copy; Copyright 2023</div>
    </footer>
    </div>
  )
}

export default Projects