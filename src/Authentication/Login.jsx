// components/LoginForm.js
import { login } from "@/Redux/Action/action";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state?.login);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(username, password));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  useEffect(() => {
    if (user) {
        alert("Login Successful")
      navigate("/overview"); // Redirect to /overview on successful login
    }
  }, [user]);

  return (
    <div className="w-full max-w-xs mx-auto mt-8">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow  bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow  bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
