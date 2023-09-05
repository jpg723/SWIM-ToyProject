import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/swimming.png";
import profile from "../../img/profile.png";
import { useState, useEffect } from 'react';
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

  /*프로필 클릭 시 */
  const [profile_open, setProfile_open] = useState(false);

  function profile_modal() {

    if(profile_open === false && login === true)
      setProfile_open(true);
    else
      setProfile_open(false);
  }

  /*로그아웃 클릭 시 */
  function logout(){
    sessionStorage.clear();
    setLogin(false);
    setProfile_open(false);
  }

  return (
    <div>
      <div id="Header">
      <div id="logo-image"><img src={logo} id="logo-image-swim"></img></div>
        <Link to="/" id="header-content1">
          <text id="logo-text">SWIM</text>
        </Link>
        <div id="header-content2">
          {login ? 
            (<Link to="/write-form" id="header-botton-box1">
            <button id="new-wirte-btn">새 글쓰기</button>
            </Link>)
              :(<Link to="/login" id="header-botton-box1">
              <button id="new-wirte-btn">새 글쓰기</button>
            </Link>)
          }

          {login ? 
            (<div id="header_profile" onClick={profile_modal}><img src={profile} id="image-profile"></img></div>)
            :(<Link to="/login" id="header-botton-box2">
              <button id="login-btn">Log in</button>
            </Link>)
          }

          {profile_open ? 
            (<div id="profile_modal">
              <span class="profile_list">내 작성글</span>
              <span class="profile_list">내 관심글</span>
              <span class="profile_list">내 정보 수정</span>
              <span class="profile_list" onClick={logout}>로그아웃</span>
            </div>)
            :(<div></div>)
          }
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
