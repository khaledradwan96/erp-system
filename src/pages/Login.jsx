// =====   Login.jsx =====
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();

    if (userName === "admin" && password === "admin") {
      localStorage.setItem("user", "admin");
      navigate("/dashboard", { replace: true });
    } else {
      alert("incorrect username or password");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handelLogin}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-5xl font-bold mb-6 text-center text-teal-500">
          Login
        </h2>

        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            User Name
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Enter your username"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition duration-200"
        >
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
