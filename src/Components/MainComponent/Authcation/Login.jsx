import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSource from "../../CustomHooks/useAxiousSorce";
import Swal from "sweetalert2";
// import { useState } from "react";

export default function Login() {
  const { axiosSource } = useAxiosSource();
  const navigate = useNavigate();
  // const [pin, setPin] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // setPin(data.password);
    axiosSource
      .post("/login", data)
      .then((result) => {
        localStorage.setItem("UserLogedIn", result.data.email);
        localStorage.setItem("userPin", data.password);
        reset();
        console.log(result.data);
        Swal.fire({
          icon: "success",
          title: "Logged in Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location.state : "/DeshboardHome");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:w-[400px] p-8 flex flex-col justify-center items-center gap-5"
    >
      <h1 className="text-4xl text-gradient2 font-bold text-center">Login</h1>

      {/* Email field */}
      <div className="w-full">
        <label className="block w-full text-sm font-medium text-gradient">
          Your email
        </label>
        <input
          type="email"
          className="w-full px-4 text-gradient py-2 bg-[rgba(0,0,0,0)] placeholder:text-[#cfb56b] border-0 outline-0 border-b border-[#fdc55d]"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Pin field */}
      <div className="w-full">
        <label className="block w-full text-sm font-medium text-gradient">
          Enter 5-Digit Pin
        </label>
        <input
          type="password"
          className="w-full text-gradient px-4 py-2 bg-[rgba(0,0,0,0)] mt-1 placeholder:text-[#cfb56b] border-0 outline-0 border-b border-[#fdc55d]"
          {...register("password", {
            required: "This field is required",
            pattern: {
              value: /^\d{5}$/,
              message: "Pin must be a 5-digit number",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="!w-full button !rounded-md bg-gradient-bg border-1 border-[#00f7ffa1] relative"
      >
        <span className="absolute text-gradient">Login</span>
      </button>
      <div className="w-full">
        <small className="text-gradient">
          I don`t have an account!{" "}
          <Link className="font-bold underline" to="/signup">
            Signup
          </Link>
        </small>
      </div>
    </form>
  );
}
