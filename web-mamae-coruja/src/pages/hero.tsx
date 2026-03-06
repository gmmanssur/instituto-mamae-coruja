import { useState } from "react"
import { Copy, Check } from "lucide-react";
import owl from "../assets/owl_hero.png"
import familyIcon from "../assets/family.png"
import giftIcon from "../assets/gift.png"
import qrCodePremium from "../assets/donation/qrcode_premium.png"
import bgImgOwl from "../assets/img-hero-title.png"

export default function Hero(){
    const [open,setOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const pixKey = "instituto.mamaecoruja@yahoo.com"
    const [name, setName] = useState("")
    const [interest, setInterest] = useState("Voluntariado")
    const [error,setError] = useState("")

    async function copyPix() {
        await navigator.clipboard.writeText(pixKey);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    function sendToWhatsapp() {

        if(!name){
            setError("Preencha com seu nome para continuar.")
            return
        }

        const phone = "5511983829301"

        const message =
    `Olá! Vim pelo site do Instituto Mamãe Coruja.

    Nome: ${name}
    Interesse: ${interest}`

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

        window.open(url, "_blank")
    }
    
    return(
        <section id="home" className="relative min-h-screen flex items-center pt-[84px] pb-24 overflow-hidden bg-cover ">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="text-white space-y-6 text-left">
                    <div>
                        <span className="inline-block text-[#8200db] px-4 py-1.5 rounded-full bg-[#8200db]/20 backdrop-blur-sm text-sm font-medium mb-4 border border-white/10">
                        Juntos fortalecemos vidas</span>

                        <div className="flex flex-row items-center gap-6 w-full">
                            <img
                                alt="owls"
                                src={bgImgOwl}
                                className="w-40 sm:w-52 md:w-64 lg:w-72 h-auto"
                            />

                            <h1 className="text-3xl text-left sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight text-center lg:text-left text-[#5d9a94]">
                                Instituto <br />

                                <span className="text-[#a9dfcb] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                                Mamãe Coruja
                                </span>
                            </h1>
                        </div>
                        <p className="text-lg text-[#8200db]/100 leading-relaxed text-justify text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                            <h2 className="text-[#8200db] font-bold text-[30px] text-center sm:text-[50px] sm:text-left">Apoiando mães solo</h2>
                            
                            <span className="!font-bold">Bem-vindo(a)</span> ao <span className="!font-bold">Instituto Mamãe Coruja.</span> Transformamos vidas através do amor, cuidado e apoio às famílias em situação de vulnerabilidade social. 
                            Juntos, formamos uma legião do bem e contribuímos para fortalecer a sociedade.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex flex-col sm:flex-row gap-4 bg-[#934ae84f] rounded-full">
                            <button
                            className="inline-flex items-center cursor-pointer justify-center gap-2 font-medium min-h-10 bg-[#b671d4] hover:bg-[#934ae8]/90 text-white rounded-full px-8 h-14 text-lg shadow-lg hover:shadow-[#934ae8]-500/25 transition-all"
                            onClick={()=>setOpen(true)}>
                                Junte-se a Nós!
                            </button>
                            
                            <a href="#about" className="inline-flex items-center justify-center font-medium bg-white text-[#5d9a94] border-white hover:bg-gray-100 rounded-full px-8 h-14 text-lg">
                                Saiba mais {'>'}
                            </a>
                        </div>    
                    </div>
                </div>

                <div className="relative flex justify-center !overflow-visible">
                    <div className="relative w-full max-w-lg aspect-square !overflow-visible">

                        <img
                        alt="Mascote Mamãe Coruja"
                        className="w-full h-full object-contain drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]"
                        src={owl}/>

                        <div className="hidden sm:block absolute top-20 right-0 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50">
                            <div className="flex items-center gap-3">
                                <div className="bg-orange-100 p-2 rounded-lg">
                                    <img alt="Ícone de doação" className="w-4 h-4" src={giftIcon}/>
                                </div>
                                
                                <div>
                                    <div className="font-bold text-gray-900">
                                        1000+
                                    </div>
                                    
                                    <div className="text-xs text-gray-600">
                                        Doações realizadas
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="hidden sm:block absolute bottom-20 left-0 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50">
                            <div className="flex items-center gap-3">
                                <div className="bg-pink-100 p-2 rounded-lg">
                                    <img alt="Ícone de pessoas atendidas" className="w-4 h-4" src={familyIcon}/>
                                </div>
                                
                                <div>
                                    <div className="font-bold text-gray-900">
                                        4000+
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

            <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
            ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>

                <div
                onClick={()=>setOpen(false)}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"/>

                <div
                className={`relative bg-white w-[95%] max-w-xl rounded-2xl shadow-2xl
                p-5 sm:p-8
                max-h-[90vh] overflow-y-auto
                transition-all duration-500
                ${open ? "scale-100 translate-y-0" : "scale-90 translate-y-10"}`}>

                    <button
                    onClick={()=>setOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 text-xl">
                        ✕
                    </button>

                    <h2 className="text-2xl font-bold text-center text-[#5d9a94] mb-6">
                        Faça Parte da Nossa Família
                    </h2>

                    <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center mb-6">

                        <img
                        alt="QR Code Premium"
                        src={qrCodePremium}
                        className="w-24 sm:w-32 mb-4"/>

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
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="w-full mt-1 h-12 px-4 rounded-xl border focus:ring-2 focus:ring-pink-400 outline-none"
                            placeholder="Seu nome"
                            />
                        </div>

                        <div className="text-left">
                            <label className="text-sm font-medium text-gray-700">
                                Área de Interesse
                            </label>

                            <select
                            value={interest}
                            onChange={(e)=>setInterest(e.target.value)}
                            className="w-full mt-1 h-12 px-4 rounded-xl border focus:ring-2 focus:ring-pink-400 outline-none">
                                <option>Voluntariado</option>
                                <option>Doações</option>
                                <option>Especialista</option>
                            </select>
                        </div>

                        <button
                        onClick={sendToWhatsapp}
                        className="w-full h-14 rounded-xl bg-[#b671d4] text-white font-semibold 
                        text-lg shadow-lg hover:scale-[1.02] transition cursor-pointer">
                            Enviar
                        </button>

                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}