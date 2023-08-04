import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [idChange, setIdChange] = useState("");
  const [passwordValidate, setPasswordValidate] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onChange = (e) => {
    const value = e.target.value;
    setIdChange(value);
  };

  const onSubmit = (data) => {
    if (data.password !== data.passwordCheck) {
      alert("비밀번호가 맞지 않습니다");
      setPasswordValidate("비밀번호를 확인하세요");
      return;
    }
    setPasswordValidate("");
    alert("회원가입에 성공했습니다");
    navigate("/welcome");
  };

  return (
    <div className=" bg-slate-100 flex flex-col justify-center items-center text-center">
      <div className="w-[50vw] bg-slate-500 mt-[100px] flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[30vw] flex flex-col items-center justify-center gap-16 py-10"
        >
          <label className="h-[100px] items-center flex flex-col text-center gap-5 text-slate-50 font-bold">
            아이디
            <input
              className="p-3 rounded w-[350px] text-slate-900"
              {...register("id", {
                required: "아이디를 입력해주세요",
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "이메일 형식을 지켜주세요",
                },
                validate: {
                  noneSpace: (value) =>
                    !value.match(/\s/g) || "이메일에 공백이 있어서는 안됩니다",
                },
              })}
              type="text"
              placeholder="이메일을 입력하세요"
              onChange={onChange}
            />
            {errors.id && <p className="text-[13px]"> {errors.id.message}</p>}
          </label>
          <label className="h-[100px] flex flex-col items-center text-center gap-5 text-slate-50 font-bold">
            비밀번호
            <input
              className={
                errors.password || errors.passwordCheck
                  ? "p-3 w-[350px] rounded text-slate-900 border-red-600 border-4 border-rounded"
                  : "p-3 w-[350px] rounded text-slate-900 border"
              }
              type="password"
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: { value: 8, message: "8자 이상 입력해주세요" },
                pattern: {
                  value:
                    /^(?=.*[!@#$%^&*()_+\-\[\]{};':"\\|,.<>\/?])(.*[!@#$%^&*()_+\-\[\]{};':"\\|,.<>\/?]){2,}.*$/,
                  message:
                    "비밀번호에 특수기호를 2개 이상 조합해서 사용하세요.",
                },
              })}
              placeholder="비밀번호를 입력하세요"
            />
            {errors.password && (
              <p className="text-[13px]">{errors.password.message}</p>
            )}
          </label>
          <label className="h-[100px] items-center flex flex-col text-center gap-5 text-slate-50 font-bold">
            비밀번호 확인
            <input
              type="password"
              placeholder="한번 더 비밀번호를 입력하세요"
              className="p-3 w-[350px] rounded text-slate-900"
              {...register("passwordCheck", {
                required: true,
                minLength: { value: 8, message: "8자 이상 입력해주세요" },
              })}
            />
          </label>
          {passwordValidate.length ? (
            <p className="text-slate-50">{passwordValidate}</p>
          ) : null}
          <button className="p-4 px-9 mt-10 rounded font-slate-50 bg-slate-50">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
