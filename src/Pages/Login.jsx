import { use } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {signIn} = use(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value 
    const password = e.target.password.value 
    
    signIn(email, password)
    .then(result =>{
      const user = result.user
      console.log(user)
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage)
  });
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
              required
            />
          </div>

          {/* Password */}
          <div className="form-control w-full relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              placeholder="Enter your password"
              className="input input-bordered border-2 border-black w-full pr-10"
              required
            />
            
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
          <a href="/auth/register" className=" text-blue-500 font-semibold link-hover">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
