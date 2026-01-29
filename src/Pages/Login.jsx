import { use, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const { signIn, signInWithGoogle, setUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("Invalid email or password");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered border-2 border-black w-full"
              required
            />
          </div>

          {/* Password with Toggle */}
          <div className="form-control w-full relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered border-2 border-black w-full pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-12 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

            <label className="label">
              <a
                href={`/auth/forgot-password?email=${email}`}
                className="label-text-alt text-blue-500 link link-hover"
              >
                Forgot Password?
              </a>
            </label>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Social Login */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-accent w-full flex items-center justify-center gap-2"
          >
            <FaGoogle /> Continue with Google
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <a
            href="/auth/register"
            className=" text-blue-500 font-semibold link-hover"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;