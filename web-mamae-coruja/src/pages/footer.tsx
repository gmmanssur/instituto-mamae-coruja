import logo from "../assets/owl.png";

export function Footer() {
  return (
    <footer className="bg-[#8a3ef4] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 justify-center">
              <img src={logo} alt="Logo" className="h-10 w-10"/>

              <span className="font-bold text-xl">
                Instituto Mamãe Coruja
              </span>
            </div>

            <p className="text-center text-white/80 text-sm leading-relaxed">
              Transformando vidas através do amor, cuidado e apoio às famílias
              em situação de vulnerabilidade. Juntos, construímos um futuro melhor.
            </p>

            <div className="flex gap-4 pt-2 text-center justify-center">
              <a
                href="https://www.instagram.com/instituto.mamaecoruja/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@projetosocialmamaecoruja"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-bold mb-4 text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#home" className="hover:text-white hover:pl-1 transition-all">Início</a></li>
              <li><a href="#gallery" className="hover:text-white hover:pl-1 transition-all">Galeria</a></li>
              <li><a href="#donation" className="hover:text-white hover:pl-1 transition-all">Doação</a></li>
              <li><a href="#founder" className="hover:text-white hover:pl-1 transition-all">Fundadora</a></li>
              <li><a href="#about" className="hover:text-white hover:pl-1 transition-all">Sobre Nós</a></li>
              <li><a href="#volunteer" className="hover:text-white hover:pl-1 transition-all">Voluntários</a></li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-bold mb-4 text-lg">Contato</h3>

            <ul className="space-y-3 text-white/80 text-center">
              <li className="flex justify-center gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                <span className="text-sm">instituto.mamaecoruja@yahoo.com</span>
              </li>

              <li className="flex justify-center gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                <span className="text-sm">(11) 98382-9301</span>
              </li>

              <li className="flex justify-center gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-sm">
                  R. Rogê Ferreira, 5205 - Jardim Suarão, Itanhaém - SP
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-48 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.027056868661!2d-46.77259652391672!3d-24.03010777850849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1d8481498707%3A0xe7c56898436b7720!2sR.%20Rog%C3%AA%20Ferreira%2C%205205%20-%20Jardim%20Suar%C3%A3o%2C%20Itanha%C3%A9m%20-%20SP%2C%2011740-000!5e0!3m2!1sen!2sbr!4v1709425557762!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map Location"
            />
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-[10px] text-white/60">
          <p>© 2026 Instituto Mamãe Coruja. Todos os direitos reservados.</p>

          <p className="mt-2">
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/gustavo-manssur-1a4b5a1a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ec4699] transition-colors font-medium"
            >
              Gustavo Manssur
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;