import { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router";

const ForgotPassword = () => {
    const { resetPassword } = use(AuthContext);
    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState("");

    useEffect(() => {
        const emailParam = searchParams.get("email");
        if (emailParam) {
            setEmail(emailParam);
        }
    }, [searchParams]);

    const handleResetPassword = (e) => {
        e.preventDefault();
        const emailValue = e.target.email.value;

        resetPassword(emailValue)
            .then(() => {
                toast.success("Password reset email sent! Check your inbox.");
                window.open("https://mail.google.com", "_blank");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Forgot Password
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Enter your email address and we'll send you a link to reset your
                    password.
                </p>

                <form onSubmit={handleResetPassword} className="space-y-4">
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



                    <button type="submit" className="btn btn-primary w-full">
                        Reset Password
                    </button>
                </form>




                <p className="text-center mt-4 text-gray-600">
                    Remember your password?{" "}
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

export default ForgotPassword;