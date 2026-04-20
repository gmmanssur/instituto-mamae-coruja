import { useEffect, useMemo, useRef, useState } from "react";
import { SkipBack, Pause, Play, SkipForward } from "lucide-react";

/*
Vite + React
Carrega todos .mp3 da pasta:
../assets/music
*/

const musicFiles = Object.values(
  import.meta.glob("../assets/music/*.mp3", {
    eager: true,
    query: "?url",
    import: "default",
  })
) as string[];

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const playlist = useMemo(() => {
    return [...musicFiles].sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || playlist.length === 0) return;

    audio.volume = 0.2;
    audio.src = playlist[currentIndex];
    audio.load();

    const tryPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    };

    tryPlay();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || playlist.length === 0) return;

    audio.src = playlist[currentIndex];
    audio.load();

    if (playing) {
      audio.play().catch(() => {});
    }
  }, [currentIndex]);

  function nextTrack() {
    setCurrentIndex((prev) =>
      prev + 1 >= playlist.length ? 0 : prev + 1
    );
  }

  function previousTrack() {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? playlist.length - 1 : prev - 1
    );
  }

  async function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        onEnded={nextTrack}
        preload="auto"
      />

      <div className="fixed bottom-2 left-2 sm:bottom-6 sm:left-4 z-50 flex items-center gap-2 sm:gap-3 scale-90 sm:scale-100 origin-bottom-left">
        
        {/* voltar */}
        <button
          onClick={previousTrack}
          className="bg-white/90 backdrop-blur-md shadow-xl rounded-full p-2 sm:p-4 hover:scale-110 transition-all duration-300"
          aria-label="Música anterior"
        >
          <SkipBack className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* play / pause */}
        <button
          onClick={togglePlay}
          className="bg-white/90 backdrop-blur-md shadow-xl rounded-full p-2 sm:p-4 hover:scale-110 transition-all duration-300"
          aria-label="Controlar música ambiente"
        >
          {playing ? <Pause className="w-4 h-4 sm:w-6 sm:h-6" /> : <Play className="w-4 h-4 sm:w-6 sm:h-6" />}
        </button>

        {/* avançar */}
        <button
          onClick={nextTrack}
          className="bg-white/90 backdrop-blur-md shadow-xl rounded-full p-2 sm:p-4 hover:scale-110 transition-all duration-300"
          aria-label="Próxima música"
        >
          <SkipForward className="w-4 h-4 sm:w-6 sm:h-6"/>
        </button>
      </div>
    </>
  );
}

export default BackgroundMusic;