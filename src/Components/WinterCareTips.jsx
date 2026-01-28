import React from "react";

const tips = [
  {
    id: 1,
    title: "Keep Pets Warm Indoors",
    description: "Provide heated beds or cozy blankets for pets during winter."
  },
  {
    id: 2,
    title: "Protect Paws",
    description: "Use paw wax or booties to prevent cracking from snow and salt."
  },
  {
    id: 3,
    title: "Winter Grooming",
    description: "Regular grooming keeps the fur clean and reduces matting."
  },
  {
    id: 4,
    title: "Stay Hydrated",
    description: "Even in cold weather, pets need fresh water daily."
  }
];

const WinterCareTips = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Winter Care Tips for Pets</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-600 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WinterCareTips;
