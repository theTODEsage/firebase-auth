import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
    // TODO: Add Firebase login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered border-2 border-black w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // ✅ added
              required
            />
          </div>

          {/* Password */}
          <div className="form-control w-full relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered border-2 border-black w-full pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // ✅ added
              required
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)} // ✅ toggle
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <label className="label">
              <a href="/forgot-password" className="label-text-alt text-blue-500 link link-hover">
                Forgot Password?
              </a>
            </label>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>

          {/* Social Login */}
          <button
            type="button"
            className="btn btn-outline btn-accent w-full flex items-center justify-center gap-2"
          >
            <FaGoogle /> Continue with Google
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className=" text-blue-500 font-semibold link-hover">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
