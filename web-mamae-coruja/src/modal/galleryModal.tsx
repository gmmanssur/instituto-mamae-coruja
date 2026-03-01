import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
  images: string[];
  title: string;
  onClose: () => void;
}

export default function GalleryModal({ images, title, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const nextIndex = (index + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex];
  }, [index]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;

    if (touchStartX.current - touchEndX.current > 50) next();
    if (touchEndX.current - touchStartX.current > 50) prev();
  };

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-sm md:text-base">{title}</h2>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <X />
          </button>
        </div>

        <div
          className="relative bg-black flex items-center justify-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={prev}
            className="absolute left-2 md:left-4 z-10 bg-white/80 backdrop-blur p-2 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          <img
            src={images[index]}
            onClick={() => setZoom(!zoom)}
            className={`
              transition duration-300
              ${zoom ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"}
              max-h-[75vh] w-auto object-contain
            `}
          />

          <button
            onClick={next}
            className="absolute right-2 md:right-4 z-10 bg-white/80 backdrop-blur p-2 rounded-full hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto p-3 bg-gray-50 snap-x">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setIndex(i)}
              className={`
                h-16 w-24 object-cover rounded cursor-pointer border-2 snap-start
                transition
                ${index === i ? "border-pink-500 scale-105" : "border-transparent"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}