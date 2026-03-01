import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (navbarRef.current && !navbarRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-md"
          : ""
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        
        <a href="#home" className="flex items-center gap-2">
          <span
            className={`font-heading font-bold text-xl transition-colors
            ${scrolled ? "text-[#8200db]" : "text-white"}`}
          >
            Instituto Mamãe Coruja
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          <a
            href="#home"
            className={`font-medium text-sm transition-colors
            ${scrolled ? "text-black hover:text-[#8200db]" : "text-white/90 hover:text-[#EB4799]"}`}
          >
            Início
          </a>

          <a
            href="#about"
            className={`font-medium text-sm transition-colors
            ${scrolled ? "text-black hover:text-[#8200db]" : "text-white/90 hover:text-[#EB4799]"}`}
          >
            Sobre Nós
          </a>

          <a
            href="#founder"
            className={`font-medium text-sm transition-colors
            ${scrolled ? "text-black hover:text-[#8200db]" : "text-white/90 hover:text-[#EB4799]"}`}
          >
            Fundadora
          </a>

          <a
            href="#donation"
            className={`font-medium text-sm transition-colors
            ${scrolled ? "text-black hover:text-[#8200db]" : "text-white/90 hover:text-[#EB4799]"}`}
          >
            Doação
          </a>

          <a
            href="#gallery"
            className={`font-medium text-sm transition-colors
            ${scrolled ? "text-black hover:text-[#8200db]" : "text-white/90 hover:text-[#EB4799]"}`}
          >
            Galeria
          </a>

          <a
            href="#volunteer"
            className={`font-medium text-sm transition-colors
            ${scrolled ? "text-black hover:text-[#8200db]" : "text-white/90 hover:text-[#EB4799]"}`}
          >
            Voluntários
          </a>

          <a
            href="#donation"
            className="bg-[#EB4799] hover:bg-white hover:text-[#EB4799] text-white rounded-full px-6 py-2 text-sm shadow-lg transition-all"
          >
            Apoiar Agora
          </a>
        </div>

        <button
          className={`md:hidden transition-transform duration-300
          ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
      >
        <div className="flex flex-col gap-5 p-6 backdrop-blur-xl bg-white/90 shadow-xl border-t">
          <a href="#home" onClick={() => setOpen(false)}>Início</a>
          <a href="#about" onClick={() => setOpen(false)}>Sobre Nós</a>
          <a href="#founder" onClick={() => setOpen(false)}>Fundadora</a>
          <a href="#donation" onClick={() => setOpen(false)}>Doação</a>
          <a href="#gallery" onClick={() => setOpen(false)}>Galeria</a>
          <a href="#volunteers" onClick={() => setOpen(false)}>Voluntários</a>

          <a
            href="#donation"
            onClick={() => setOpen(false)}
            className="bg-[#EB4799] text-white rounded-full px-6 py-2 text-center"
          >
            Apoiar Agora
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;