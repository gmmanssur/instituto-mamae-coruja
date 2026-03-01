const modules = import.meta.glob(
  "../assets/gallery/**/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

export function loadGallery(folder: string) {
  const images: string[] = [];

  for (const path in modules) {
    if (path.includes(`/gallery/${folder}/`)) {
      const mod = modules[path] as { default: string };
      images.push(mod.default);
    }
  }

  return images.sort();
}