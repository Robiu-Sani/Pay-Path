import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CashinForm() {
  const [callNext, setCallNext] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setCallNext(false);
  };

  return (
    <form
      className="w-[500px] p-5 overflow-hidden sm:w-full h-[280px] relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={`w-full p-5 absolute ${
          callNext ? "right-[100%]" : "right-0"
        } `}
      >
        <div className="w-full mb-4">
          <label className="block w-full text-sm font-medium text-gradient">
            Agent number
          </label>
          <input
            type="number"
            className="w-full px-4 text-gradient py-2 bg-[rgba(0,0,0,0)] placeholder:text-[#cfb56b] border-0 outline-0 border-b border-[#fdc55d]"
            {...register("number", {
              required: "Mobile number is required",
            })}
          />
          {errors.number && (
            <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>
          )}
        </div>
        <div className="w-full mb-4">
          <label className="block w-full text-sm font-medium text-gradient">
            Amount
          </label>
          <input
            type="number"
            className="w-full px-4 text-gradient py-2 bg-[rgba(0,0,0,0)] placeholder:text-[#cfb56b] border-0 outline-0 border-b border-[#fdc55d]"
            {...register("amount", {
              required: "Amount is required",
              min: {
                value: 50,
                message: "Amount must be at least 50",
              },
            })}
          />
          {errors.amount && (
            <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
          )}
        </div>

        <button
          onClick={() => setCallNext(!callNext)}
          className="!w-full button !rounded-md bg-gradient-bg border-1 border-[#00f7ffa1] relative"
        >
          <span className="absolute text-gradient">Next</span>
        </button>
      </div>
      <div
        className={`w-full p-5 absolute ${
          callNext ? "left-0" : "left-[100%]"
        } `}
      >
        <button
          onClick={() => setCallNext(!callNext)}
          className=" button mb-4 !rounded-md bg-gradient-bg border-1 border-[#00f7ffa1] relative"
        >
          <span className="absolute text-gradient">Back</span>
        </button>
        <div className="w-full mb-4">
          <label className="block w-full text-sm font-medium text-gradient">
            Enter 5-Digit Pin
          </label>
          <input
            type="password"
            className="w-full text-gradient px-4 py-2 bg-[rgba(0,0,0,0)] mt-1 placeholder:text-[#cfb56b] border-0 outline-0 border-b border-[#fdc55d]"
            {...register("pin", {
              required: "5-digit pin is required",
              pattern: {
                value: /^\d{5}$/,
                message: "Pin must be a 5-digit number",
              },
            })}
          />
          {errors.pin && (
            <p className="text-red-500 text-sm mt-1">{errors.pin.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="!w-full button !rounded-md bg-gradient-bg border-1 border-[#00f7ffa1] relative"
        >
          <span className="absolute text-gradient">Apply for cash in</span>
        </button>
      </div>
    </form>
  );
}
