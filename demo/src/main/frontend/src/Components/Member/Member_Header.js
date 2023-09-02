import { Link, Outlet } from "react-router-dom";
import "./Member_Header.css";
import logo from "../../img/swimming.png";

function Member_Header() {
  return (
    <div>
      <Link to="/" id="Member-header">
        <img src={logo} id="Member-logo-image"></img>
        <text id="Member-logo-text">SWIM</text>
      </Link>
        <Outlet />
    </div>
  );
}

export default Member_Header;
