import { Heart, Clock, Award } from "lucide-react";

const volunteerRoles = [
  {
    icon: Heart,
    title: "Retirada de doações",
    description: "Nos ajude retirando doações nos pontos de coleta.",
    color: "bg-rose-500 hover:bg-rose-600",
    iconBg: "bg-rose-500",
    message:
      "Olá! Tenho interesse em ser voluntário na retirada de doações. Como posso ajudar?",
  },
  {
    icon: Clock,
    title: "Organizar Doações",
    description: "Triagem e organização das doações recebidas.",
    color: "bg-blue-500 hover:bg-blue-600",
    iconBg: "bg-blue-500",
    message:
      "Olá! Quero ajudar na organização das doações. Pode me explicar como funciona?",
  },
  {
    icon: Award,
    title: "Especialista",
    description: "Compartilhe suas experiências e habilidades conosco.",
    color: "bg-green-500 hover:bg-green-600",
    iconBg: "bg-green-500",
    message:
      "Olá! Tenho habilidades que podem ajudar o instituto. Gostaria de ser voluntário especialista.",
  },
];

function sendToWhatsApp(message: string) {
  const phone = "5511983829301";

  const text = encodeURIComponent(message);

  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}

export function Volunteer() {
  return (
    <section id="volunteer" className="py-24 bg-[#8a3ef4] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-gradient-to-b from-purple-800 to-[#8a3ef4] opacity-50 blur-3xl -z-10" />

      <div className="container mx-auto px-4">

        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl font-bold mb-4">Seja um Voluntário</h2>

          <p className="text-white/80 max-w-2xl mx-auto">
            Junte-se à nossa família de voluntários e faça parte da transformação
            de vidas. Sua dedicação e amor podem fazer toda a diferença.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {volunteerRoles.map((role, index) => {
            const Icon = role.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 ${role.iconBg} text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {role.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4 min-h-[40px]">
                  {role.description}
                </p>

                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded-full mb-8">
                  Horário livre
                </div>

                <button
                  onClick={() => sendToWhatsApp(role.message)}
                  className={`w-full rounded-full font-bold text-white shadow-md py-2 ${role.color}`}
                >
                  Candidatar-se
                </button>
              </div>
            );
          })}
        </div>

        <div className="md:hidden space-y-6 max-w-sm mx-auto">
          {volunteerRoles.map((role, index) => {
            const Icon = role.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 text-center shadow-lg"
              >
                <div
                  className={`w-14 h-14 ${role.iconBg} text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {role.title}
                </h3>

                <p className="text-gray-500 text-xs mb-4 line-clamp-2">
                  {role.description}
                </p>

                <button
                  onClick={() => sendToWhatsApp(role.message)}
                  className={`w-full rounded-full font-bold text-white shadow-md h-10 text-sm ${role.color}`}
                >
                  Candidatar-se
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Volunteer;