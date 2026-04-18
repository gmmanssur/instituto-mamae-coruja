import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import video1 from "../assets/gallery/videos/1.mp4";
import video2 from "../assets/gallery/videos/2.mp4";
import video3 from "../assets/gallery/videos/3.mp4";
import video4 from "../assets/gallery/videos/4.mp4";
import video5 from "../assets/gallery/videos/5.mp4";

const videoData = [
  { id: 1, src: video1 },
  { id: 2, src: video2 },
  { id: 3, src: video3 },
  { id: 4, src: video4 },
  { id: 5, src: video5 },
];

export function GalleryVideos() {
  const [current, setCurrent] = useState(0);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const canLeft = current > 0;
  const canRight = current < videoData.length - 1;

  function stopAllVideos() {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  function changeVideo(index: number) {
    stopAllVideos();
    setCurrent(index);
  }

  function prevVideo() {
    if (canLeft) {
      changeVideo(current - 1);
    }
  }

  function nextVideo() {
    if (canRight) {
      changeVideo(current + 1);
    }
  }

  return (
    <section className="mt-20">

      <div className="flex items-center justify-center gap-5">

        {/* LEFT */}
        <div className="w-14 flex justify-center">
          {canLeft && (
            <button
              onClick={prevVideo}
              className="bg-white shadow-xl rounded-full p-3 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
          )}
        </div>

        {/* PLAYER */}
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl shadow-2xl bg-black">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {videoData.map((video, index) => (
              <div
                key={video.id}
                className="min-w-full flex items-center justify-center bg-black"
              >
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-[260px] md:h-[520px] object-contain bg-black"
                >
                  <source src={video.src} type="video/mp4" />
                  Seu navegador não suporta vídeo.
                </video>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="w-14 flex justify-center">
          {canRight && (
            <button
              onClick={nextVideo}
              className="bg-white shadow-xl rounded-full p-3 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

      </div>

      {/* indicadores */}
      <div className="flex justify-center gap-3 mt-6">
        {videoData.map((_, index) => (
          <button
            key={index}
            onClick={() => changeVideo(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-[#5d9a94]"
                : "w-3 bg-gray-300"
            }`}
            aria-label={`Ir para vídeo ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

export default GalleryVideos;