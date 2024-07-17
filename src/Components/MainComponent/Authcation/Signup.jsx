import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAxiosSource from "../../CustomHooks/useAxiousSorce";
import Cookies from "js-cookie";

export default function Signup() {
  const { axiosSource } = useAxiosSource();
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    const updatedData = { ...data, status: "pending" };
    console.log(updatedData);
    axiosSource
      .post("/users", updatedData)
      .then((result) => {
        console.log(result.data);
        const { token } = result.data;
        // Set token in cookies
        Cookies.set("token", token, { expires: 1 }); // expires in 1 day
        // user Loged in information
        localStorage.setItem("UserLogedIn", "UserLogedIn");
        // Reset the form only after the response
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:w-[400px] p-8 flex flex-col justify-center items-center gap-5"
    >
      <h1 className="text-4xl text-gradient2 font-bold text-center">Signup</h1>

      {/* Full name field */}
      <div className="w-full">
        <label className="block w-full text-sm font-medium text-gradient">
          Your full name
        </label>
        <input
          type="text"
          className="w-full px-4 text-gradient py-2 bg-[rgba(0,0,0,0)] placeholder:text-[#cfb56b] border-0 outline-0 border-b border-[#fdc55d]"
          {...register("fullname", { required: "Full name is required" })}
        />
        {errors.fullname && (
          <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>
        )}
      </div>

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

      {/* Mobile number field */}
      <div className="w-full">
        <label className="block w-full text-sm font-medium text-gradient">
          Your number
        </label>
        <input
          type="text"
          className="w-full px-4 text-gradient py-2 bg-[rgba(0,0,0,0)] placeholder:text-[#cfb56b] border-0 outline-0 border-b border-[#fdc55d]"
          {...register("number", {
            required: "Mobile number is required",
          })}
        />
        {errors.number && (
          <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>
        )}
      </div>

      {/* 5-Digit Pin field */}
      <div className="w-full">
        <label className="block w-full text-sm font-medium text-gradient">
          Enter 5-Digit Pin
        </label>
        <input
          type="password"
          className="w-full text-gradient px-4 py-2 bg-[rgba(0,0,0,0)] mt-1 placeholder:text-[#cfb56b] border-0 outline-0 border-b border-[#fdc55d]"
          {...register("password", {
            required: "5-digit pin is required",
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

      {/* Submit button */}
      <button
        type="submit"
        className="!w-full button !rounded-md bg-gradient-bg border-1 border-[#00f7ffa1]"
      >
        <span className="absolute text-gradient">Signup</span>
      </button>

      {/* Link to login page */}
      <div className="w-full">
        <small className="text-gradient">
          I have an account!{" "}
          <Link className="font-bold underline" to="/login">
            Login
          </Link>
        </small>
      </div>
    </form>
  );
}
