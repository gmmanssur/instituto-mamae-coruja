interface GalleryCardProps {
  readonly image: string;
  readonly title: string;
  readonly description: string;
}

export function GalleryCard({
  image,
  title,
  description,
}: GalleryCardProps) {
  return (
    <div
      className="
      group relative
      w-full
      h-[360px]          /* altura fixa */
      rounded-3xl
      overflow-hidden
      shadow-lg
      cursor-pointer
      "
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
        "
      />
      
      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        bg-white/95
        backdrop-blur-sm
        p-4
        text-center
        "
      >

        <h3 className="text-lg font-bold text-[#5d9a94] leading-tight">
          {title}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-2 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}