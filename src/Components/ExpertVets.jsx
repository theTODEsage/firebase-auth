import React from "react";

const experts = [
  {
    id: 1,
    name: "Dr. Emily White",
    specialty: "Veterinary Surgeon",
    photo: "https://imgs.search.brave.com/tkb2rJu4KnBMPd_82Ou7g7limwHvoZGGaD6W6Ps7pUE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2l1bWVkLmVkdS9z/aXRlcy9kZWZhdWx0/L2ZpbGVzL3N0eWxl/cy9zcXVhcmVfNTQw/L3B1YmxpYy8yMDI0/LTA3L1doaXRlX0Vt/aWx5LmpwZz9oPTQz/MDc0N2U4Jml0b2s9/em5Ma2J0WHU"
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    specialty: "Animal Nutritionist",
    photo: "https://imgs.search.brave.com/zwDOzJG8dPv-KNXNYLBZzPl8JLDgL6546yg4ggW5gn4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kb3hp/bWl0eS1yZXMuY2xv/dWRpbmFyeS5jb20v/aW1hZ2VzL2ZfYXV0/byxxX2F1dG8sdF9w/dWJsaWNfcHJvZmls/ZV9waG90b18zMjB4/MzIwL29leWlzdW4x/emR6aXk2bHlzempw/L21pY2hhZWwtbGVl/LW1kLWxvcy1hbmdl/bGVzLWNhLmpwZw"
  },
  {
    id: 3,
    name: "Dr. Sarah Kim",
    specialty: "Pet Dermatologist",
    photo: "https://imgs.search.brave.com/iTs4qy3cC8oVMDwfOFhZxf0DFSq0IP1Hd3Ey-A06f6w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaGlu/dGVybmV0LmJsb2Iu/Y29yZS53aW5kb3dz/Lm5ldC9kb2N0b3Jz/LzE5NzI4OTExMTdf/U2FyYWhfS2ltXzI3/MHgyOTAuanBn"
  },
  {
    id: 4,
    name: "Dr. Daniel Brown",
    specialty: "General Vet Practitioner",
    photo: "https://imgs.search.brave.com/75aO3xzEhgTU51FEFESQ37uAAG6p9mcfGopeio75Zwk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kYW5p/ZWxicm93bm1kLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvc2l0/ZXMvNTAvMjAyNS8w/Ny9Cb2FyZC1DZXJ0/aWZpZWQtUGxhc3Rp/Yy1TdXJnZW9uLUZv/dW5kZXItYW5kLU1l/ZGljYWwtRGlyZWN0/b3ItRHIuLURhbmll/bC1Ccm93bi0yLTEw/MjF4MTAyNC5qcGc"
  }
];

const ExpertVets = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Expert Vets</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {experts.map((vet) => (
          <div
            key={vet.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 text-center p-4"
          >
            <img
              src={vet.photo}
              alt={vet.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{vet.name}</h3>
            <p className="text-gray-600">{vet.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertVets;
