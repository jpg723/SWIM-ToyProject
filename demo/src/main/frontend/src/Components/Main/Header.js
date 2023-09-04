import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/swimming.png";
import { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { loginAtom } from "../../atoms";

function Header() {

  const [login, setLogin] = useRecoilState(loginAtom);

  useEffect(() => {
    if (sessionStorage.getItem("id") === null) {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
      console.log("로그인 실패");
    } else {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setLogin(true);
      console.log("로그인 성공");
    }
  });

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

          {login ? (<div></div>):
          (<Link to="/login" id="header-botton-box2">
            <button id="login-btn">Log in</button>
          </Link>)
          }
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
