import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Popular Winter Care Services
      </h1>

      {/* Responsive grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Service;
