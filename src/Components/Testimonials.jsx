import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            text: "The winter coat fitting service was amazing! My dog looks adorable and stays warm during our walks.",
            service: "Winter Coat Fitting",
        },
        {
            id: 2,
            name: "Michael Chen",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            text: "Professional grooming with great attention to detail. My cat's paws have never been healthier!",
            service: "Winter Grooming",
        },
        {
            id: 3,
            name: "Emily Davis",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 5,
            text: "The heated bed setup is perfect! My elderly dog loves it and sleeps comfortably all night.",
            service: "Heated Pet Bed",
        },
        {
            id: 4,
            name: "James Wilson",
            image: "https://randomuser.me/api/portraits/men/22.jpg",
            rating: 4,
            text: "Great service and friendly staff. My pets always look forward to their appointments!",
            service: "Paw Treatment",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
            <h2
                className="text-3xl sm:text-4xl font-bold text-center mb-4"
                data-aos="fade-up"
            >
                What Our Happy Customers Say
            </h2>
            <p
                className="text-center text-gray-600 mb-8 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                Don't just take our word for it - hear from pet parents who trust us
                with their furry friends!
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="card-body">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={testimonial.image} alt={testimonial.name} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold">{testimonial.name}</h3>
                                    <div className="flex text-yellow-500">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i}>⭐</span>
                                        ))}
                                    </div>
                                </div>
                            </div>


                            <p className="text-gray-600 text-sm mb-2">"{testimonial.text}"</p>
                            <div className="badge badge-primary badge-sm">
                                {testimonial.service}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;