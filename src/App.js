import { useState } from "react";
import { useForm } from "react-hook-form";
function App() {
  const [idChange, setIdChange] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm();

  const onChange = (e) => {
    const value = e.target.value;
    setIdChange(value);
  };

  const onSubmit = (data) => {
    const passwordValue = getValues("password");
    const passwordChcekValue = getValues("passwordCheck");
    console.log(data);
    console.log(passwordValue, passwordChcekValue);
    if (passwordValue !== passwordChcekValue) {
      setError("passwordValidate", {
        type: "manual",
        message: "비밀번호가 같지 않습니다",
      });
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-100 flex flex-col items-center text-center">
      <div className="w-[50vw] bg-slate-500 mt-[200px] flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[30vw] flex flex-col items-center justify-center gap-10 py-10"
        >
          <label className=" flex flex-col text-center gap-5 text-slate-50 font-bold">
            아이디
            <input
              className="p-3 rounded w-[350px] text-slate-900"
              {...register("id", { required: "아이디를 입력해주세요" })}
              type="text"
              placeholder="아이디를 입력하세요"
              onChange={onChange}
            />
            {errors.id && <p>{errors.id.message}</p>}
          </label>
          <label className="flex flex-col text-center  gap-5 text-slate-50 font-bold">
            비밀번호
            <input
              className="p-3 w-[350px] rounded text-slate-900"
              type="password"
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: { value: 8, message: "8자 이상 입력해주세요" },
              })}
              placeholder="비밀번호를 입력하세요"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </label>
          <label className="flex flex-col text-center gap-5 text-slate-50 font-bold">
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
          {errors.passwordValidate && (
            <p className="text-slate-50">{errors.passwordValidate.message}</p>
          )}
          <button className="p-4 px-9 mt-10 rounded font-slate-50 bg-slate-50">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
