import { useState } from "react";

export default function Login() {
  const [inputValue, setInputValue] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Info:", { inputValue, pin });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:w-[400px] p-8 flex flex-col justify-center items-center gap-5"
    >
      <h1 className="text-gradient text-center text-5xl font-bold drop-shadow">
        LogIn
      </h1>
      <div>
        <label
          htmlFor="emailOrMobile"
          className="block text-sm font-medium text-gray-700"
        >
          Mobile Number or Email
        </label>
        <input
          type="text"
          id="emailOrMobile"
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
      </div>
      <div>
        <label
          htmlFor="pin"
          className="block text-sm font-medium text-gray-700"
        >
          PIN
        </label>
        <input
          type="password"
          id="pin"
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Login
      </button>
    </form>
  );
}
