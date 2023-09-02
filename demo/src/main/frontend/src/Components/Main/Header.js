import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/swimming.png";

function Header() {
  return (
    <div>
      <div id="Header">
      <div id="logo-image"><img src={logo} id="logo-image-swim"></img></div>
        <Link to="/" id="header-content1">
          <text id="logo-text">SWIM</text>
        </Link>
        <div id="header-content2">
          <Link to="/write-form" id="header-botton-box1">
            <button id="new-wirte-btn">새 글쓰기</button>
          </Link>
          <Link to="/login" id="header-botton-box2">
            <button id="login-btn">Log in</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
