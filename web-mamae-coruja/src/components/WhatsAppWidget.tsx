import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [error, setError] = useState("");

  function sendMessage() {
    if (!name.trim() || !message.trim()) {
        setError("Preencha seu nome e mensagem.");
        return;
    }

    setError("");

    const phone = "5511983829301";

    const text = encodeURIComponent(
        `Olá! Meu nome é ${name}. ${message}`
    );

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setShowBubble(true);
    }, 8000);

    const bubbleTimer = setTimeout(() => {
      setShowBubble(false);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearTimeout(bubbleTimer);
    };
  }, []);

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 w-[320px] max-w-[92vw] bg-white rounded-2xl shadow-2xl z-[1000] overflow-hidden animate-[chatIn_.35s_ease]">

          <div className="bg-green-500 text-white p-4 flex justify-between items-center">
            <div>
              <p className="font-semibold">Fale conosco</p>
              <p className="text-xs opacity-80">
                Respondemos rápido no WhatsApp
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="hover:scale-110 transition"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4 space-y-3">

            <input
                placeholder="Seu nome"
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 
                ${error ? "border-red-400 focus:ring-red-300" : "focus:ring-green-400"}`}
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    setError("");
                }}
            />

            <textarea
                placeholder="Digite sua mensagem..."
                className={`w-full border rounded-lg px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2
                ${error ? "border-red-400 focus:ring-red-300" : "focus:ring-green-400"}`}
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                    setError("");
                }}
            />

            <button
            onClick={sendMessage}
            disabled={!name.trim() || !message.trim()}
            className="w-full bg-green-500 text-white rounded-lg py-2 font-semibold 
            hover:scale-[1.02] active:scale-[.98] transition
            disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Enviar mensagem
            </button>
          </div>
        </div>
      )}

      {visible && showBubble && !open && (
        <div className="fixed bottom-24 right-6 bg-white shadow-xl rounded-xl px-4 py-2 text-sm animate-[bubbleIn_.4s_ease] z-[998]">
          👋 Precisa de ajuda?
        </div>
      )}
      
      {error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={`
        fixed bottom-6 right-6
        w-14 h-14
        rounded-full
        bg-green-500
        shadow-2xl
        flex items-center justify-center
        text-white
        transition-all duration-500
        hover:scale-110
        active:scale-95
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        animate-[whatsPulse_3s_ease-in-out_infinite]
        `}
      >
        <MessageCircle size={26} />
      </button>
    </>
  );
}