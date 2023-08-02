import { useForm } from "react-hook-form";
import "./SignupForm.css";
import React from 'react';
import axios from 'axios'; 

function SignupForm({
  onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));

    axios(
      {
        url: '/member/register',
        method: 'post',
        data: {
          data1: data.id, data2: data.password, data3: data.name, data4: data.phone
        } , 
        baseURL: 'http://localhost:8080',
      }
    ).then(function (response) {
      console.log(response.data);
    });

    alert("백엔드 전달");
  },
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  return (
    <form id="sign-form" onSubmit={handleSubmit(onSubmit)}>
      {/*아이디 입력*/}
      <div>
        <input
          id="Signup-id"
          type="text"
          placeholder="ID"
          aria-invalid={!isDirty ? undefined : errors.id ? "true" : "false"}
          {...register("id", {
            required: "ID는 필수 입력입니다.",
          })}
        />
        {errors.id && <small role="alert">{errors.id.message}</small>}
      </div>
      {/*비밀번호 입력*/}
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
      {/*이름 입력*/}
      <div>
        <input
          id="Signup-name"
          type="text"
          placeholder="Name"
          aria-invalid={
            !isDirty ? undefined : errors.name ? "true" : "false"
          }
          {...register("name", {
            required: "이름은 필수 입력입니다.",
            minLength: {
              value: 2,
              message: "이름 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.name && (
          <small role="alert">{errors.name.message}</small>
        )}
      </div>
      {/*핸드폰 번호 입력*/}
      <div>
        <input
          id="Signup-phone"
          type="tel"
          placeholder="010-0000-0000"
          aria-invalid={
            !isDirty ? undefined : errors.phone ? "true" : "false"
          }
          {...register("phone", {
            required: "전화번호는 필수 입력입니다.",
            minLength: {
              value: 13,
              message: "전화번호 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.phone && (
          <small role="alert">{errors.phone.message}</small>
        )}
      </div>
      {/*SIGN UP 버튼*/}
      <button
        id="SignupForm-Signup_btn"
        type="submit" disabled={isSubmitting}>SIGN UP
      </button>
      {/*LOG IN 버튼*/}
      <button
        id="SignupForm-Login_btn"
        type="submit"
        disabled={isSubmitting}>LOG IN
      </button>
    </form>
  );
}

export default SignupForm;
