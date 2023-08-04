import { Link, Outlet } from "react-router-dom";
import "./Member_Header.css";

function Member_Header() {
  return (
    <div>
      <Link to="/" id="Member-header">
        <div id="Member-logo-image"></div>
        <text id="Member-logo-text">SWIM</text>
      </Link>
        <Outlet />
    </div>
  );
}

export default Member_Header;
