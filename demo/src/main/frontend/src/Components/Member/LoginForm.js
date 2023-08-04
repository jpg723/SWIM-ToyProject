import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./LoginForm.css";

function LoginForm({
  onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
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
          aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
          {...register("email", {
            required: "ID는 필수 입력입니다.",
          })}
        />
        <div class="login-error">{errors.email && <small role="alert">{errors.email.message}</small>}</div>
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
