import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { use, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, setUser, signInWithGoogle } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUpperCase) {
      return "Password must contain at least one uppercase letter";
    }
    if (!hasLowerCase) {
      return "Password must contain at least one lowercase letter";
    }
    if (!hasMinLength) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;


    const error = validatePassword(password);
    if (error) {
      setPasswordError(error);
      toast.error(error);
      return;
    }

    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;


        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registration successful!");
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered border-2 border-black w-full"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Your Photo URL"
              className="input border-2 border-black input-bordered w-full"
            />
          </div>

          {/* Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input border-2 border-black input-bordered w-full"
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
              placeholder="Enter your password"
              name="password"
              className="input border-2 border-black input-bordered w-full pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-12 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Password Error Message */}
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}

          {/* Password Requirements */}
          <div className="text-xs text-gray-600 space-y-1">
            <p>Password must contain:</p>
            <ul className="list-disc list-inside">
              <li>At least one uppercase letter</li>
              <li>At least one lowercase letter</li>
              <li>At least 6 characters</li>
            </ul>
          </div>

          {/* Register Button */}
          <button type="submit" className="btn btn-primary w-full">
            Register
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

        {/* Login Link */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-primary font-semibold link-hover"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;