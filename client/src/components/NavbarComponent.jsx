import { Link, withRouter } from "react-router-dom";
import { getUsername, logout } from "../services/authorize";

const NavbarComponent = (props) => {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item pr-3 pt-3 pb-3">
          <Link to="/" className="nav-link">
            Blogs
          </Link>
        </li>
        {!getUsername() && (
          <li className="nav-item pr-3 pt-3 pb-3">
            <Link to="/Login" className="nav-link">
              Login
            </Link>
          </li>
        )}
        {getUsername() && (
          <li className="nav-item pr-3 pt-3 pb-3">
            <Link to="/create" className="nav-link">
              Create
            </Link>
          </li>
        )}
        {getUsername() && (
          <li className="nav-item pr-3 pt-3 pb-3">
            <button className="nav-link" onClick={() => logout(() => props.history.push("/"))}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default withRouter(NavbarComponent);
