import { Link } from "react-router-dom";
import "./Login.css";
import LoginForm from "./LoginForm";

function Login() {
  /*id는 요소가 하나인 경우 많이 사용, css가 비슷한 요소가 많은 경우 사용*/
  return (
      <div className="Login-body">
        <div className="Login-box">
          <Link to="/" id="Login-box-back_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="24"
              viewBox="0 0 36 24"
              fill="none"
            >
              <path
                d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM36 10.5L2 10.5V13.5L36 13.5V10.5Z"
                fill="#27272B"
              />
            </svg>
          </Link>

          <div id="Login-box-login">LOG IN</div>
          <div id="Login-box-login_txt">
            Sign in if you already have an account.
          </div>

          <LoginForm />

          <Link to="/sign-up" id="Login-Sinup-Link">
            <button id="Login-Sinup-Link-btn">
              <text>Sign Up</text>
            </button>
          </Link>

          {/* 아이디 찾기, 비번 찾기 */}
          <div id="search">
          <Link to="/search_id">
            <button id="search-id">
              <text>아이디 찾기</text>
            </button>
            </Link>
            <Link to="/search_password">
            <button id="search-password">
              <text>비번 찾기</text>
            </button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Login;
