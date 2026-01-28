import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";

const Register = () => {

  const { createUser, setUser } = use(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value 
    const photo = e.target.photo.value 
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(name, photo, email, password)
    createUser(email, password)
      .then(result => {
        const user = result.user
        setUser(user)
  
      })
      .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
          });
  };

  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
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

          {/* Password */}
          <div className="form-control w-full relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="input border-2 border-black input-bordered w-full pr-10"
              required
            />

          </div>

          {/* Register Button */}
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>

          {/* Social Login */}
          <button
            type="button"
            className="btn btn-outline btn-accent w-full flex items-center justify-center gap-2"
          >
            <FaGoogle /> Continue with Google
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/auth/login" className="text-primary font-semibold link-hover">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
