import foto from "../assets/img-founder.jpg"

export function Founder(){
    return(
        <section
        id="founder"
        className="py-12 md:py-16 bg-yellow-50/50 relative overflow-hidden"
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-4xl font-bold text-[#5d9a94] mb-2">
                        Nossa Fundadora
                    </h2>
                    <p className="text-[#5d9a94]">
                        Conheça a história inspiradora por trás do Instituto Mamãe Coruja
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
                    <div className="lg:col-span-5 lg:col-start-1 relative px-4 sm:px-0">
                        <img
                        src={foto}
                        alt="Samara - Fundadora"
                        className="w-full h-[50vh] object-contain mx-auto drop-shadow-2xl rounded-[2rem]"
                        style={{ opacity: 1, transform: "none" }}
                        />

                        <div
                        className="absolute -bottom-4 -right-2 md:right-4 bg-white p-3 md:p-4 rounded-2xl shadow-xl max-w-[200px] md:max-w-[240px] border-l-4 border-[#ec4699] z-20"
                        style={{ opacity: 1, transform: "none" }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-[#ec4699] w-5 h-5 md:w-6 md:h-6 mb-1 opacity-50"
                            >
                                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                            </svg>

                            <p className="text-gray-600 italic font-medium text-[10px] md:text-xs leading-relaxed z-[998]">
                                "A união entre os povos, é isso que Deus pede de nós."
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6 md:space-y-8">
                        <div>
                            <h3 className="text-left text-3xl font-bold text-gray-900 mb-2">
                                Samara
                            </h3>
                            <div className="h-1 w-20 bg-[#ec4699] rounded-full"></div>
                        </div>

                        <div className="text-gray-600 leading-relaxed text-lg">
                            <p className="text-justify">
                                Casada há 26 anos com Mário — advogado, professor e gestor —
                                é mãe de duas filhas, Beatriz e Maria Luiza. Bacharel em Direito
                                e pós-graduada em Constelação Familiar, construiu uma trajetória
                                marcada pela empatia e dedicação ao próximo.
                            </p>

                            <p className="text-justify">
                                Desde a infância, inspirada pelo exemplo dos pais, aprendeu o
                                valor de semear o amor e estender as mãos, atuando como
                                voluntária em orfanatos, ONGs e ações comunitárias voltadas à
                                assistência de famílias em vulnerabilidade.
                            </p>

                            <p className="text-justify">
                                Ao longo dos anos, desenvolveu metodologias de cuidado integral
                                e atendimento humanizado, sempre priorizando o desenvolvimento
                                emocional e o respeito à individualidade de cada ser.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-6">
                        
                            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-yellow-100 text-center flex flex-col justify-center min-h-[100px] z-[998]">
                                <div className="text-2xl md:text-3xl font-bold text-[#8a3ef4] font-heading mb-1">
                                8+
                                </div>
                                <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider leading-tight">
                                Anos de Experiência
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-yellow-100 text-center flex flex-col justify-center min-h-[100px] z-[998]">
                                <div className="text-2xl md:text-3xl font-bold text-[#8a3ef4] font-heading mb-1">
                                50+
                                </div>
                                <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider leading-tight">
                                Projetos Realizados
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-yellow-100 text-center flex flex-col justify-center min-h-[100px] z-[998    ]">
                                <div className="text-2xl md:text-3xl font-bold text-[#8a3ef4] font-heading mb-1">
                                2024
                                </div>
                                <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider leading-tight">
                                Fundação do Instituto
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Founder;