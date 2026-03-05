interface GalleryCardProps {
  readonly image: string;
  readonly badge: string;
  readonly title: string;
  readonly description: string;
}

export function GalleryCard({
  image,
  badge,
  title,
  description,
}: GalleryCardProps) {
  return (
    <div className="group relative w-full rounded-3xl overflow-hidden
      aspect-[4/5] md:aspect-square
      max-h-[260px] sm:max-h-[320px] md:max-h-none
      shadow-lg cursor-pointer">

      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5 md:p-6 text-white text-center opacity-95 group-hover:opacity-100 transition">

        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] sm:text-xs mb-2 mx-auto border border-white/30">
          {badge}
        </span>

        <h3 className="text-base text-[#5d9a94] sm:text-lg md:text-xl font-bold leading-tight mb-1">
          {title}
        </h3>

        <p className="text-[11px] sm:text-xs text-white/80 mb-2 line-clamp-2">
          {description}
        </p>

        <p className="text-[#ec4699] text-[10px] font-bold uppercase tracking-wider">
          Clique para ver fotos
        </p>

      </div>
    </div>
  );
}