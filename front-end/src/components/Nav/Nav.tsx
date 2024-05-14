import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/">
        Home
      </Link>

      <Link className="nav__item" to="/tvShows">
        TV Shows
      </Link>

      <Link className="nav__item" to="/tvShow/create">
        Add TV Shows
      </Link>
    </div>
  );
};

export default Nav;
