import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <figure className="h-48 sm:h-56 lg:h-64 w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full h-full object-contain object-center"
        />
      </figure>

      {/* Content */}
      <div className="card-body flex flex-col justify-between p-4">
        <div>
          <h2 className="card-title text-lg sm:text-xl font-bold mb-2">
            {service.serviceName}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-2 line-clamp-3">
            {service.description}
          </p>

          {/* Rating + Price */}
          <div className="flex items-center justify-between mt-2">
            <span className="badge badge-primary text-black px-2 py-1 text-sm sm:text-base">
              ⭐ {service.rating}
            </span>
            <span className="text-lg sm:text-xl font-semibold">${service.price}</span>
          </div>
        </div>

        {/* View Details Button */}
        <div className="card-actions justify-end mt-4">
          <Link to={``} className="btn btn-sm sm:btn-md btn-outline btn-primary w-full sm:w-auto">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
