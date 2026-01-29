import { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
    const { user, setUser } = use(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        setLoading(true);

        const name = e.target.name.value;
        const photoURL = e.target.photo.value;

        updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
        })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoURL });
                toast.success("Profile updated successfully!");
                setLoading(false);
                navigate("/profile");
            })
            .catch((error) => {
                toast.error(error.message);
                setLoading(false);
            });
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Update Profile</h1>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                        <div className="flex justify-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        src={
                                            user?.photoURL ||
                                            "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                                        }
                                        alt="Current Avatar"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.displayName || ""}
                                placeholder="Enter your name"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                defaultValue={user?.photoURL || ""}
                                placeholder="Enter photo URL"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    "Update Profile"
                                )}
                            </button>
                        </div>
                    </form>

                    <button
                        onClick={() => navigate("/profile")}
                        className="btn btn-outline w-full mt-2"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;