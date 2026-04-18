import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { GalleryCard } from "../components/galleryCard";
import { galleryData } from "../services/galleryData";
import GalleryModal from "../modal/galleryModal";
import GalleryVideos from "../components/galleryVideos";

export function Gallery() {
  const [selected, setSelected] = useState<null | (typeof galleryData)[0]>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const CARD_WIDTH = 344;

  function updateButtons() {
    const el = scrollRef.current;
    if (!el) return;

    const left = el.scrollLeft;
    const max = el.scrollWidth - el.clientWidth;

    setCanLeft(left > 10);
    setCanRight(left < max - 10);
  }

  function scrollLeft() {
    scrollRef.current?.scrollBy({
      left: -CARD_WIDTH,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({
      left: CARD_WIDTH,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateButtons();

    el.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    const autoSlide = setInterval(() => {
      const currentEl = scrollRef.current;
      if (!currentEl) return;

      /* autoplay apenas desktop */
      if (window.innerWidth < 768) return;

      const max = currentEl.scrollWidth - currentEl.clientWidth;
      const end = currentEl.scrollLeft >= max - 10;

      if (end) {
        currentEl.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        currentEl.scrollBy({
          left: CARD_WIDTH,
          behavior: "smooth",
        });
      }
    }, 5500);

    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
      clearInterval(autoSlide);
    };
  }, []);

  return (
    <section id="gallery" className="py-24 bg-pink-50/50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16 text-[#5d9a94]">
          <h2 className="text-4xl font-bold mb-4">
            Nossa Galeria
          </h2>

          <p className="max-w-2xl mx-auto">
            Registros reais do nosso servir ao próximo.
            Clique em cada álbum para ver mais fotos.
          </p>
        </div>

        <div className="flex items-center justify-center gap-5">

          {/* LEFT BUTTON - desktop only */}
          <div className="hidden md:flex w-14 justify-center">
            {canLeft && (
              <button
                onClick={scrollLeft}
                className="bg-white/90 backdrop-blur-md shadow-xl rounded-full p-3 hover:scale-110 transition-all duration-500"
              >
                <ChevronLeft size={24} />
              </button>
            )}
          </div>

          {/* CAROUSEL */}
          <div className="max-w-6xl overflow-hidden w-full">
            <div
              ref={scrollRef}
              className="
                flex gap-6 pb-4
                overflow-x-auto md:overflow-x-hidden
                snap-x snap-mandatory
                scrollbar-hide
              "
              style={{
                scrollBehavior: "smooth",
                transition: "all 0.8s ease-in-out",
              }}
            >
              {galleryData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className="
                    flex-shrink-0
                    w-[280px] md:w-[320px]
                    snap-center
                    transition-all duration-700 ease-out
                    hover:scale-[1.02]
                  "
                >
                  <GalleryCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    idealizado={item.idealizado}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT BUTTON - desktop only */}
          <div className="hidden md:flex w-14 justify-center">
            {canRight && (
              <button
                onClick={scrollRight}
                className="bg-white/90 backdrop-blur-md shadow-xl rounded-full p-3 hover:scale-110 transition-all duration-500"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

        </div>
      </div>

      {selected && (
        <GalleryModal
          images={selected.images}
          title={selected.title}
          onClose={() => setSelected(null)}
        />
      )}

      <GalleryVideos />
    </section>
  );
}

export default Gallery;