import { useForm } from "react-hook-form";
import "./SignupForm.css";

function SignupForm({
  onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  },
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        {errors.email && <small role="alert">{errors.email.message}</small>}
      </div>

      <div>
        <input
          id="Signup-password"
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
        {errors.password && (
          <small role="alert">{errors.password.message}</small>
        )}
      </div>
      <div>
        <input id="Signup-name" type="text" placeholder="Name" />
      </div>
      <div>
        <input id="Signup-phone" type="tel" placeholder="Phone" />
      </div>

      <button id="SignupForm-Signup_btn" type="submit" disabled={isSubmitting}>
        SIGN UP
      </button>
      <button id="SignupForm-Login_btn" type="submit" disabled={isSubmitting}>
        LOG IN
      </button>
    </form>
  );
}

export default SignupForm;
