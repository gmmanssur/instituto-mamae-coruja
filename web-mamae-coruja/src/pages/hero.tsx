import { useState } from "react"
import { Copy, Check } from "lucide-react";

export default function Hero(){
    const [open,setOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const pixKey = "instituto.mamaecoruja@yahoo.com.br"

    async function copyPix() {
        await navigator.clipboard.writeText(pixKey);

        setCopied(true);

        setTimeout(() => {
        setCopied(false);
        }, 2000);
    }
    
    return(
        <section id="home" className="relative min-h-screen flex items-center pt-[84px] pb-24 overflow-hidden bg-linear-to-br 
            from-[#8200db] via-[#934ae8] to-[#EB4799]">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                
                <div className="text-white space-y-6 text-left">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4 border border-white/10">
                        Transformando o mundo com amor</span>

                        <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight text-white">
                            Instituto <br/>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ffae7c] via-[#ffff99] to-[#ff416c] animate-gradient-x drop-shadow-lg">
                                Mamãe Coruja
                            </span>
                        </h1>
                    </div>

                    <p className="text-lg text-purple-100 max-w-xl leading-relaxed">Transformando vidas através do amor, cuidado e apoio às famílias em situação de vulnerabilidade. 
                        Juntos, formamos uma legião do bem e contribuímos para amenizar o sofrimento da sociedade.</p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 
                        focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 
                        hover-elevate active-elevate-2 border border-[#ec4699]-border min-h-10 bg-[#ec4699] hover:bg-[#ff416c]/90 text-white rounded-full px-8 h-14 text-lg 
                        shadow-lg hover:shadow-pink-500/25 transition-all"
                        onClick={()=>setOpen(true)}>
                            Participar do Projeto
                        </button>
                        
                        <a href="#about" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none 
                            focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 
                            [&amp;_svg]:shrink-0 hover-elevate active-elevate-2 border [border-color:var(--button-outline)] shadow-xs active:shadow-none min-h-10 
                            bg-white text-[#8200db] border-white hover:bg-gray-100 rounded-full px-8 h-14 text-lg">
                                Saiba mais
                        </a>
                    </div>
                </div>

                <div className="relative flex justify-center !overflow-visible">
                    <div className="relative w-full max-w-lg aspect-square !overflow-visible">
                        <img alt="Mascote Mamãe Coruja" className="w-full h-full object-contain drop-shadow-2xl animate-[float_4s_ease-in-out_infinite] !overflow-visible" src="/src/assets/owl_hero.png"/>

                        <div className="absolute top-20 right-0 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50">
                            <div className="flex items-center gap-3">
                                <div className="bg-orange-100 p-2 rounded-lg text-orange-600 font-bold">
                                    <img alt="Ícone de doação" className="w-4 h-4" src="/src/assets/gift.png"/>
                                </div>
                                
                                <div>
                                    <div className="font-bold text-gray-900">
                                        <span>1000+</span>
                                    </div>
                                    
                                    <div className="text-xs text-gray-600">
                                        Doações realizadas
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="absolute bottom-20 left-0 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50">
                            <div className="flex items-center gap-3">
                                <div className="bg-pink-100 p-2 rounded-lg text-pink-600 font-bold">
                                    <img alt="Ícone de pessoas atendidas" className="w-4 h-4" src="/src/assets/family.png"/>
                                </div>
                                
                                <div>
                                    <div className="font-bold text-gray-900">
                                        <span>4000+</span>
                                    </div>
                                    
                                    <div className="text-xs text-gray-600">
                                        Pessoas atendidas
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-1">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white"
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
                </svg>
            </div>

            <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
            ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div onClick={()=>setOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm"/>

                <div className={`relative bg-white w-[95%] max-w-xl rounded-2xl shadow-2xl p-8 transition-all duration-500
                ${open ? "scale-100 translate-y-0" : "scale-90 translate-y-10"}`}>
                    <button
                    onClick={()=>setOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 text-xl">
                        ✕
                    </button>

                    <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
                        Faça Parte da Nossa Família
                    </h2>

                    <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center mb-6">

                        <img
                        src="src/assets/donation/qrcode_premium.png"
                        className="w-32 mb-4"
                        />

                        <span className="text-xs tracking-widest text-gray-500">
                            DOE VIA PIX AGORA MESMO
                        </span>

                        <button
                        onClick={copyPix}
                        className={`mt-2 flex items-center gap-2 bg-white px-4 py-2 rounded-lg border text-sm transition
                        ${copied ? "border-green-500 bg-green-50" : "hover:bg-gray-50"}`}
                        >
                            {pixKey}

                            {copied ? (
                                <Check size={20} className="text-green-500" />
                            ) : (
                                <Copy size={18} className="text-gray-500 hover:text-purple-600" />
                            )}
                        </button>

                        {copied && (
                            <span className="text-green-600 text-xs mt-2 animate-pulse">
                                Pix copiado!
                            </span>
                        )}
                    </div>

                    <div className="space-y-4">

                        <div className="text-left">
                            <label className="text-sm font-medium text-gray-700">
                                Nome Completo
                            </label>
                            <input
                            className="w-full mt-1 h-12 px-4 rounded-xl border focus:ring-2 focus:ring-pink-400 outline-none"
                            placeholder="Seu nome"
                            />
                        </div>

                        <div className="text-left">
                            <label className="text-sm font-medium text-gray-700">
                                E-mail
                            </label>
                            <input
                            className="w-full mt-1 h-12 px-4 rounded-xl border focus:ring-2 focus:ring-pink-400 outline-none"
                            placeholder="seu@email.com"
                            />
                        </div>

                        <div className="text-left">
                            <label className="text-sm font-medium text-gray-700">
                                Área de Interesse
                            </label>

                            <select
                            className="w-full mt-1 h-12 px-4 rounded-xl border focus:ring-2 focus:ring-pink-400 outline-none">

                                <option>Voluntariado</option>
                                <option>Doações</option>
                                <option>Eventos</option>

                            </select>
                        </div>

                        <button className="w-full h-14 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] transition">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}