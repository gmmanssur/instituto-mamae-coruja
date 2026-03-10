import foto from "../assets/mission.jpg"

export function Mission() {
    return(
        <section className="py-24 bg-rose-50/50">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-rose-100">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-left" style={{ opacity: 1, transform: "none" }}>
                            <h2 className="p-2 text-3xl md:text-4xl font-bold text-[#5d9a94]">
                                Nossa Missão
                            </h2>

                            <div className="text-gray-600 text-md leading-relaxed">
                                <p className="text-justify">
                                O Instituto Mamãe Coruja é uma organização sem fins lucrativos
                                que visa apoiar{" "}
                                <strong className="text-[#8a3ef4]">Mães</strong> solos em
                                situação de vulnerabilidade social. Acreditamos que o amparo,
                                seja material ou emocional, pode ser o impulso para novos
                                recomeços.
                                </p>

                                <p className="text-justify">
                                Nossa equipe é formada por voluntários dedicados que trabalham
                                com amor, comprometimento e muita responsabilidade social.
                                Todos que se unem ao instituto, são mãos estendidas com o
                                mesmo objetivo de fortalecer vidas!
                                </p>
                            </div>

                            <div className="pt-1">
                                <a
                                href="#donation"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium
                                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                                disabled:pointer-events-none disabled:opacity-50
                                [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
                                border border-[#8a3ef4]-border min-h-9 py-2
                                bg-[#8a3ef4] hover:bg-[#8a3ef4]/90 text-white
                                rounded-full px-8 h-12 shadow-md transition-all"
                                >
                                Apoiar Agora
                                </a>
                            </div>
                        </div>

                        <div className="relative" style={{ opacity: 1, transform: "none" }}>
                            <div className="absolute inset-0 bg-[#ec4699] rounded-3xl rotate-3 opacity-20 translate-x-4 translate-y-4"></div>

                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-square">
                                <img
                                alt="Nossa Missão - Ação"
                                src={foto}
                                className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mission;