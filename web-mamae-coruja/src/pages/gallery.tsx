import { useState } from "react";
import { GalleryCard } from "../components/galleryCard";
import { galleryData } from "../services/galleryData";
import GalleryModal from "../modal/galleryModal";

export function Gallery() {
  const [selected, setSelected] = useState<null | (typeof galleryData)[0]>(null);

  return (
    <section id="gallery" className="py-24 bg-pink-50/50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">
            Nossa Galeria
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Registros reais do nosso servir ao próximo.
            Clique em cada álbum para ver mais fotos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="cursor-pointer last:col-span-2 md:last:col-span-1"
            >
              <GalleryCard
                image={item.image}
                badge={item.badge}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
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