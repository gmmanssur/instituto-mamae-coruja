import { useState } from "react";
import DonationModal from "../modal/donationModal";
import { donationPlans } from "../services/donationData";
import owlBaby from "../assets/baby-solo.png";
import owlSolo from "../assets/owl-solo.png";
import owl from "../assets/owl.png";

export function Donate() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section
      id="donation"
      className="py-20 bg-gradient-to-b from-[#5d9a94]/5 to-[#a9dfcb] text-center"
    >
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-[#5d9a94] mb-4">
            Faça uma Doação
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Sua generosidade pode transformar vidas. Cada doação gera uma
            reação na vida de alguém.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 items-stretch gap-5 sm:gap-6 max-w-5xl mx-auto mb-10">

          {/* CARD 1 */}
          <div className="relative bg-white rounded-3xl p-6 shadow-xl border-2 border-transparent flex flex-col items-center h-full hover:-translate-y-2 transition">
            
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4 p-2">
              <img src={owlBaby} className="w-full h-full object-contain" />
            </div>

            <h3 className="text-lg font-bold mb-1">Doação Baby</h3>

            <p className="text-gray-500 text-xs mb-4 text-center flex-grow">
              Faça uma doação pontual e ajude uma família hoje mesmo.
            </p>

            <div className="text-2xl font-bold mb-6">R$ 50</div>

            <button
              className="mt-auto w-full rounded-full font-bold text-white bg-green-500 h-10 text-sm cursor-pointer"
              onClick={() => setSelected(donationPlans.baby)}
            >
              Doar Agora
            </button>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-white rounded-3xl p-6 shadow-xl border-2 border-purple-500 flex flex-col items-center h-full hover:-translate-y-2 transition scale-105">

            <div className="absolute -top-3 bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold">
              Mais Popular
            </div>

            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-4 p-2">
              <img src={owlSolo} className="w-full h-full object-contain" />
            </div>

            <h3 className="text-lg font-bold mb-1">Doação Premium</h3>

            <p className="text-gray-500 text-xs mb-4 text-center flex-grow">
              Torne-se um padrinho e transforme vidas.
            </p>

            <div className="text-[20px] sm:text-2xl font-bold mb-6">Valor livre</div>

            <button
              className="mt-auto w-full rounded-full font-bold text-white bg-purple-500 h-10 text-sm cursor-pointer"
              onClick={() => setSelected(donationPlans.premium)}
            >
              Doar Agora
            </button>
          </div>

          {/* CARD 3 */}
          <div className="relative col-span-2 sm:col-span-1 bg-white rounded-3xl p-6 shadow-xl border-2 border-transparent flex flex-col items-center h-full hover:-translate-y-2 transition">
            
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4 p-2">
              <img src={owl} className="w-full h-full object-contain" />
            </div>

            <h3 className="text-lg font-bold mb-1">Doação VIP</h3>

            <p className="text-gray-500 text-xs mb-4 text-center flex-grow">
              Contribua com um valor personalizado.
            </p>

            <div className="text-2xl font-bold mb-6">R$ 100</div>

            <button
              className="mt-auto w-full rounded-full font-bold text-white bg-blue-500 h-10 text-sm cursor-pointer"
              onClick={() => setSelected(donationPlans.vip)}
            >
              Doar Agora
            </button>
          </div>

        </div>
      </div>

      <DonationModal
        open={!!selected}
        plan={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

export default Donate;