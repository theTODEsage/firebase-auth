import React from "react";
import img1 from '../assets/Hfd97bc64a658453291c13e5225bedef0k_1024x1024.webp';
import img2 from '../assets/PAGG251591_p_37_LL.webp';
import img3 from '../assets/product-image-1151048637_1024x.webp';
import img4 from '../assets/product-image-1183116274_1024x.webp';

const HeroSlider = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <div className="carousel w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden relative">
        {images.map((src, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative w-full h-full flex items-center justify-center bg-gray-100"
          >
            {/* Use object-contain instead of object-cover */}
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="max-h-full max-w-full object-contain"
            />

            {/* Optional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>

            {/* Navigation buttons */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${(index - 1 + images.length) % images.length}`}
                className="btn btn-circle bg-white/80 hover:bg-white text-black border-none shadow-lg"
              >
                ❮
              </a>
              <a
                href={`#slide${(index + 1) % images.length}`}
                className="btn btn-circle bg-white/80 hover:bg-white text-black border-none shadow-lg"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
