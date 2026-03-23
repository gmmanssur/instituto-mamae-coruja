import { useState } from "react";

import pauloGasgonLogo from "../assets/sponsor/paulo-gasgon.jpeg";
import santosLogo from "../assets/sponsor/santos.jpeg"; 
import lionsLogo from "../assets/sponsor/lions.png"; 
import gpLogo from "../assets/sponsor/galinapires.jpeg"; 
import carvalhoLogo from "../assets/sponsor/carvalho.jpeg"; 
import sgLogo from "../assets/sponsor/sg.jpeg"; 

export default function Sponsor() { 
  const [hovered, setHovered] = useState<number | null>(null);

  const sponsors = [
    { src: pauloGasgonLogo, name: "Paulo Gasgon" },
    { src: santosLogo, name: "Santos" },
    { src: lionsLogo, name: "Lions" },
    { src: gpLogo, name: "Galina Pires" },
    { src: carvalhoLogo, name: "Carvalho" },
    { src: sgLogo, name: "SG" },
  ];

  return ( 
    <section className="w-full bg-gray-100 py-10 overflow-hidden"> 
      <div className="max-w-5xl mx-auto px-4 text-center"> 
        
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-8"> 
          Apoiadores 
        </h2> 
        
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-100 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-100 to-transparent z-10" />

          <div
            className="flex w-max gap-12 items-center whitespace-nowrap animate-scroll"
            style={{
              "--speed": "35s",
              animationPlayState: hovered !== null ? "paused" : "running",
            } as React.CSSProperties}
          >
            {[...sponsors, ...sponsors].map((item, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  className={`h-20 object-contain transition duration-300 cursor-pointer ${
                    hovered === index
                      ? "grayscale-0 opacity-100"
                      : "grayscale opacity-70"
                  }`}
                  src={item.src}
                  alt={item.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section> 
  );
}