import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/" exact>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" exact>
          About
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
