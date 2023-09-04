import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import axios from 'axios'; 

function LoginForm({

  /*로그인 버튼 클릭시*/
  onSubmit = async (data) => {  

    axios(
        {
        url: '/member/login',
        method: 'post',
        data: {
            user_id: data.id , password: data.password
        } , 
        baseURL: 'http://localhost:8080',
        }
    ).then(function (response) {
        if (response.data.user_id === undefined) {
          alert("입력하신 아이디 또는 비밀번호가 일치하지 않습니다");
        }
        else if(response.data.password === undefined){
          alert("입력하신 아이디 또는 비밀번호가 일치하지 않습니다");
        }
        else{

          alert(response.data.user_name+"님 환영합니다!");
          sessionStorage.setItem("id", response.data.user_id); // sessionStorage에 id라는 key 값으로 저장
          sessionStorage.setItem("name", response.data.user_name);
          document.location.href = "/";
        }
      }
    );
  }
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  return (
    <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          id="id"
          type="text"
          placeholder="ID"
          aria-invalid={!isDirty ? undefined : errors.id ? "true" : "false"}
          {...register("id", {
            required: "ID는 필수 입력입니다.",
          })}
        />
        <div class="login-error">{errors.id && <small role="alert">{errors.id.message}</small>}</div>
      </div>

      <div>
        <input
          id="password"
          type="password"
          placeholder="PassWord"
          aria-invalid={
            !isDirty ? undefined : errors.password ? "true" : "false"
          }
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 사용하세요.",
            },
          })}
        />
        <div class="login-error">{errors.password && (
          <small role="alert">{errors.password.message}</small>
        )}</div>
      </div>

      <button id="LoginForm-Login_btn" type="submit" disabled={isSubmitting}>Log in</button>
      <Link to="/sign-up" id="Login-Sinup-btn">
        <button id="Login-Sinup-btn"><text>Sign Up</text></button>
      </Link>
    </form>
  );
}

export default LoginForm;
