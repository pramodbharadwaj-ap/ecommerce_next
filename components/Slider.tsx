import { useState } from "react";
import Image from "next/image";

const sliderImages = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1509057199576-632a47484ece?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <div className="relative w-full h-[60vh] max-h-[720px] mb-10 overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900">
      {/* Image fills the container (reduced height) */}
      <div className="relative w-full h-full">
        <Image
          src={sliderImages[current]}
          alt={`Slider ${current + 1}`}
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Prev / Next buttons - smaller */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/40 rounded-full p-3 text-xl shadow-md hover:scale-105 transition"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/40 rounded-full p-3 text-xl shadow-md hover:scale-105 transition"
        aria-label="Next"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-blue-600 scale-110" : "bg-gray-300 dark:bg-gray-600"} transition`}
          />
        ))}
      </div>
    </div>
  );
}
