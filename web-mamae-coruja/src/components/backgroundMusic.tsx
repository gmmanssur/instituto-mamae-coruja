import { useEffect, useMemo, useRef, useState } from "react";
import {
  SkipBack,
  Pause,
  Play,
  SkipForward,
  X,
} from "lucide-react";

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
  const [showHint, setShowHint] = useState(true);

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
        setShowHint(false);
      } catch {
        setPlaying(false);
        setShowHint(true);
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
      setShowHint(false);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <>
      <audio ref={audioRef} onEnded={nextTrack} preload="auto" />

      {/* aviso flutuante */}
      {showHint && !playing && (
        <div className="fixed bottom-20 left-3 sm:bottom-24 sm:left-4 z-50 animate-bounce">
          <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-2xl rounded-2xl px-5 py-3 pr-10 text-sm sm:text-base max-w-[260px] border border-white/30 backdrop-blur-md">

            <p className="font-semibold flex items-center gap-2 drop-shadow">
              🎵 Clique no play para ouvir música
            </p>

            {/* seta apontando pro botão */}
            <div className="absolute -bottom-2 left-16 w-4 h-4 bg-purple-500 rotate-45"></div>

            {/* brilho */}
            <div className="absolute inset-0 rounded-2xl bg-white/10 pointer-events-none"></div>

            {/* fechar */}
            <button
              onClick={() => setShowHint(false)}
              className="absolute top-2 right-2 text-white/80 hover:text-white transition"
              aria-label="Fechar aviso"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* controles */}
      <div className="fixed bottom-3 left-3 sm:bottom-6 sm:left-4 z-50 flex items-center gap-2 sm:gap-3 scale-100 sm:scale-100 origin-bottom-left">
        {/* voltar */}
        <button
          onClick={previousTrack}
          className="bg-white/90 backdrop-blur-md shadow-xl rounded-full p-3 sm:p-4 hover:scale-110 transition-all duration-300"
          aria-label="Música anterior"
        >
          <SkipBack className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* play / pause */}
        <button
          onClick={togglePlay}
          className="bg-white/90 backdrop-blur-md shadow-xl rounded-full p-3 sm:p-4 hover:scale-110 transition-all duration-300"
          aria-label="Controlar música ambiente"
        >
          {playing ? (
            <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Play className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>

        {/* avançar */}
        <button
          onClick={nextTrack}
          className="bg-white/90 backdrop-blur-md shadow-xl rounded-full p-3 sm:p-4 hover:scale-110 transition-all duration-300"
          aria-label="Próxima música"
        >
          <SkipForward className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </>
  );
}

export default BackgroundMusic;