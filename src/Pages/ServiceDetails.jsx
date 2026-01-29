import { use, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const ServiceDetails = () => {
    const { id } = useParams();
    const { user } = use(AuthContext);
    const navigate = useNavigate();
    const [service, setService] = useState(null);

    useEffect(() => {

        fetch("/service.json")
            .then((res) => res.json())
            .then((data) => {
                const foundService = data.find(
                    (s) => s.serviceId === parseInt(id)
                );
                setService(foundService);
            })
            .catch((err) => console.error(err));
    }, [id]);

    const handleBooking = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        toast.success(`Service booked successfully! We'll contact you at ${email}`);
        e.target.reset();
    };

    if (!service) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="lg:w-1/2">
                    <img
                        src={service.image}
                        alt={service.serviceName}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-3xl font-bold">
                        {service.serviceName}
                    </h2>

                    <div className="space-y-3 mt-4">
                        <p className="text-lg">
                            <span className="font-semibold">Provider:</span>{" "}
                            {service.providerName}
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">Email:</span>{" "}
                            {service.providerEmail}
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">Category:</span>{" "}
                            <span className="badge badge-primary">{service.category}</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">Price:</span>{" "}
                            <span className="text-2xl font-bold text-primary">
                                ${service.price}
                            </span>
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">Rating:</span>{" "}
                            <span className="text-yellow-500">⭐ {service.rating}</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">Slots Available:</span>{" "}
                            <span className="badge badge-success">
                                {service.slotsAvailable} slots
                            </span>
                        </p>
                    </div>

                    <div className="divider"></div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Description</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                </div>
            </div>



            <div className="card bg-base-100 shadow-xl mt-8">
                <div className="card-body">
                    <h3 className="card-title text-2xl font-bold mb-4">
                        Book This Service
                    </h3>

                    <form onSubmit={handleBooking} className="space-y-4">
                        <div className="form-control mr-4">
                            <label className="label">
                                <span className="label-text font-semibold">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.displayName || ""}
                                placeholder="Enter your name"
                                className="input  border-2 border-black input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control mr-4">
                            <label className="label">
                                <span className="label-text font-semibold">Your Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email || ""}
                                placeholder="Enter your email"
                                className="input  border-2 border-black input-bordered"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-full">
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;