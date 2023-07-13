import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <div id="Header">
        <Link to="/" id="header-content1">
          <div id="logo-image"></div>
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
      <div id="header-line"></div>
      <Outlet />
    </div>
  );
}

export default Header;
