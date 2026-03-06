import { useState } from "react";
import { GalleryCard } from "../components/galleryCard";
import { galleryData } from "../services/galleryData";
import GalleryModal from "../modal/galleryModal";

export function Gallery() {
  const [selected, setSelected] = useState<null | (typeof galleryData)[0]>(null);

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

        {/* CARROSSEL */}
        <div className="flex justify-center px-4">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 max-w-5xl">
            {galleryData.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                className="snap-start flex-shrink-0 w-[280px] md:w-[320px]"
              >
                <GalleryCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
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

    </section>
  );
}

export default Gallery;