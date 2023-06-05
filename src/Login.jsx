// Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username && password) {
      dispatch(login({ username }));
    } else {
      console.log("Invalid login");
      // Show error message or handle invalid login
    }
  };

  return (
    <div className="flex text-slate-50 items-center  justify-center h-screen">
      <div className="w-1/3 bg-slate-700 p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          className="w-full border text-black border-gray-400 rounded mb-4 p-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full border text-black border-gray-400 rounded mb-4 p-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
