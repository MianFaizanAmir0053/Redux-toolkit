// MainScreen.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./authSlice";

const MainScreen = () => {
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 bg-gray-200 p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Welcome, {username}!</h2>
        <p>This is the main screen of your app.</p>
        <button
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
