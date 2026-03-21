import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/owl_hero.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      className="fixed top-0 left-0 w-full z-50 bg-[#5d9a94] text-white shadow-md"
    >
      <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo Instituto Mamãe Coruja"
            className="w-10 h-10"
          />

          <span className="hidden lg:block font-bold text-lg">
            Instituto Mamãe Coruja
          </span>
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home">Início</a>
          <a href="#gallery">Galeria</a>
          <a href="#donation">Doação</a>
          <a href="#founder">Fundadora</a>
          <a href="#about">Sobre Nós</a>
          <a href="#volunteer">Voluntários</a>

          <a
            href="#donation"
            className="bg-[#a9dfcb] hover:bg-white hover:text-[#5d9a94] text-white rounded-full px-5 py-2 transition"
          >
            Apoiar Agora
          </a>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white text-[#5d9a94] shadow-lg transition-all duration-300 ${
          open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-3"
        }`}
      >
        <nav className="flex flex-col gap-6 p-6 text-sm font-medium">
          <a href="#home" onClick={() => setOpen(false)}>Início</a>
          <a href="#gallery" onClick={() => setOpen(false)}>Galeria</a>
          <a href="#donation" onClick={() => setOpen(false)}>Doação</a>
          <a href="#founder" onClick={() => setOpen(false)}>Fundadora</a>
          <a href="#about" onClick={() => setOpen(false)}>Sobre Nós</a>
          <a href="#volunteer" onClick={() => setOpen(false)}>Voluntários</a>

          <a
            href="#donation"
            onClick={() => setOpen(false)}
            className="bg-[#5d9a94] text-white rounded-full px-6 py-3 text-center"
          >
            Apoiar Agora
          </a>
        </nav>
      </div>
    </header>
  );
}