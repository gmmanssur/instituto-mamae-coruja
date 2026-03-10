import bgImg from "../assets/bg-hero.jpeg";

export default function About(){
    return(
        <section id="about" className="py-24 bg-background"
        style={{backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-[#5d9a94] mb-6">
                        Sobre Nós
                    </h2>

                    <p className="text-gray-600 text-lg mb-4">
                        O Instituto mamãe coruja nasceu do sonho de criar um mundo mais
                        colorido, onde as mães solos tivessem acesso ao amor, cuidado
                        e oportunidade que merecem.
                    </p>

                    <p className="text-gray-600 text-lg">
                        Trabalhamos incansavelmente para fortalecer vidas e as ajudamos
                        seguir buscando novos sonhos.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">

                    <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow text-center group border border-gray-100">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-rose-100 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-6 h-6 md:w-8 h-8 text-rose-500" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                        </div>

                        <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 text-[#5d9a94]">
                        Amor e Cuidado
                        </h3>

                        <p className="text-gray-500 leading-relaxed text-[10px] md:text-sm line-clamp-3 md:line-clamp-none">
                        Oferecemos amor incondicional e cuidado especializado para cada
                        família que atendemos.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow text-center group border border-gray-100">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield w-6 h-6 md:w-8 h-8 text-blue-500" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                        </div>

                        <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 text-[#5d9a94]">
                        Proteção
                        </h3>

                        <p className="text-gray-500 leading-relaxed text-[10px] md:text-sm line-clamp-3 md:line-clamp-none">
                        Garantimos um ambiente seguro, carinho e acolhimento às mães solos.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow text-center group border border-gray-100">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users w-6 h-6 md:w-8 h-8 text-purple-500" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                        </div>

                        <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 text-[#5d9a94]">
                        Comunidade
                        </h3>

                        <p className="text-gray-500 leading-relaxed text-[10px] md:text-sm line-clamp-3 md:line-clamp-none">
                        Fortalecemos os laços comunitários e promovemos a união entre
                        as famílias.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow text-center group border border-gray-100">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-target w-6 h-6 md:w-8 h-8 text-pink-500" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                        </div>

                        <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 text-[#5d9a94]">
                        Propósito
                        </h3>

                        <p className="text-gray-500 leading-relaxed text-[10px] md:text-sm line-clamp-3 md:line-clamp-none">
                        Trabalhamos com foco na transformação social e no desenvolvimento
                        humano integral.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}