import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <Link to={"/"} className="nav__item nav__link">
            Home
          </Link>
          <Link to={"/about"} className="nav__link nav__item">
            About
          </Link>
          <Link to={"/projects"} className="nav__item nav__link">
            My Projects
          </Link>
          <Link to={"/contact"} className="nav__item nav__link">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
