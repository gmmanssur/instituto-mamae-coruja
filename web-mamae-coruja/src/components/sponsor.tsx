export default function Sponsor() {
  return (
    <section className="w-full bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-6">
          Apoiadores & Patrocinadores
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <img
            className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition cursor-pointer"
            src="../assets/sponsor/santos.jpeg"
            alt="Sponsor Santos Logo"
          />
          <img
            className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition cursor-pointer"
            src="../assets/sponsor/lions.png"
            alt="Sponsor Lions Logo"
          />
        </div>
      </div>
    </section>
  );
}