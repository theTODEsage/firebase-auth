import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const MyProfile = () => {
    const { user } = use(AuthContext);

    if (!user) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">My Profile</h1>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">

                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img
                                src={
                                    user.photoURL ||
                                    "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                                }
                                alt="User Avatar"
                            />
                        </div>
                    </div>




                    <div className="mt-6 space-y-4 w-full max-w-md">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <div className="input input-bordered flex items-center">
                                {user.displayName || "Not provided"}
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <div className="input input-bordered flex items-center">
                                {user.email}
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <div className="input input-bordered flex items-center overflow-x-auto text-sm">
                                {user.photoURL || "Not provided"}
                            </div>
                        </div>
                    </div>




                    <div className="card-actions mt-6">
                        <Link to="/update-profile" className="btn btn-primary">
                            Update Profile
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;