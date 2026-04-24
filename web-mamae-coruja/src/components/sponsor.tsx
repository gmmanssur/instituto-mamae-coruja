import { useEffect, useRef, useState } from "react";

import pauloGasgonLogo from "../assets/sponsor/paulo-gasgon.jpeg";
import santosLogo from "../assets/sponsor/santos.jpeg"; 
import lionsLogo from "../assets/sponsor/lions.png"; 
import gpLogo from "../assets/sponsor/galinapires.jpeg"; 
import carvalhoLogo from "../assets/sponsor/carvalho.jpeg"; 
import sgLogo from "../assets/sponsor/sg.jpeg";
import rochaToolsLogo from "../assets/sponsor/rochatools.png";
import gmTruck from "../assets/sponsor/gmtruck.png";

export default function Sponsor() { 
  const [hovered, setHovered] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const animationRef = useRef<number | null>(null);

  const sponsors = [
    { src: pauloGasgonLogo, name: "Paulo Gasgon" },
    { src: santosLogo, name: "Santos" },
    { src: lionsLogo, name: "Lions" },
    { src: gpLogo, name: "Galina Pires" },
    { src: carvalhoLogo, name: "Carvalho" },
    { src: sgLogo, name: "SG" },
    { src: rochaToolsLogo, name: "Rocha Tools" },
    { src: gmTruck, name: "GM Truck" },
  ];

  const looped = [...sponsors, ...sponsors];

  useEffect(() => {
    const speed = 1;

    const animate = () => {
      if (!trackRef.current) return;

      if (hovered === null) {
        position.current -= speed;

        const width = trackRef.current.scrollWidth / 2;

        if (Math.abs(position.current) >= width) {
          position.current = 0;
        }

        trackRef.current.style.transform = `translateX(${position.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [hovered]);

  return ( 
    <section className="w-full bg-gray-100 py-10 overflow-hidden"> 
      <div className="max-w-5xl mx-auto px-4 text-center"> 
        
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-8"> 
          Apoiadores 
        </h2> 
        
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-100 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-100 to-transparent z-10" />

          <div
            ref={trackRef}
            className="flex gap-12 items-center"
          >
            {looped.map((item, index) => (
              <div 
                key={`${item.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center"
                onMouseEnter={() => window.innerWidth > 768 && setHovered(index)}
                onMouseLeave={() => window.innerWidth > 768 && setHovered(null)}
              >
                <img
                  className={`h-16 md:h-20 object-contain transition duration-300 `}
                  src={item.src}
                  alt={item.name}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section> 
  );
}