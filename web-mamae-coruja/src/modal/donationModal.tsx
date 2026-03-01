import { X, Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  readonly open: boolean;
  readonly plan: any;
  readonly onClose: () => void;
}

export default function DonationModal({ open, plan, onClose }: Props) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open || !plan) return null;

  async function copyPix() {
    await navigator.clipboard.writeText(plan.pixKey);

    setCopied(true);
    setShowToast(true);

    setTimeout(() => {
      setCopied(false);
      setShowToast(false);
    }, 2000);
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-md bg-[#f6f3fb] rounded-2xl shadow-2xl p-7"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X size={18} />
          </button>

          <h2 className="text-2xl font-bold text-purple-600 mb-2">
            {plan.title}
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Aponte a câmera do seu celular para o QR Code abaixo para realizar sua doação via PIX.
          </p>

          <div className="bg-white rounded-xl p-5 shadow-inner flex justify-center mb-5">
            <img
              src={plan.qr}
              alt="QR Code"
              className="w-56 h-56 object-contain"
            />
          </div>

          <p className="text-center text-xs text-purple-500 font-semibold mb-3">
            OU USE A CHAVE PIX (E-MAIL)
          </p>

          <div className="flex items-center justify-between bg-white rounded-lg border px-4 py-3 mb-4">
            <span className="text-sm text-gray-600 truncate">
              {plan.pixKey}
            </span>

            <button
              onClick={copyPix}
              className="transition hover:scale-110"
            >
              {copied ? (
                <Check size={20} className="text-green-500" />
              ) : (
                <Copy size={18} className="text-gray-500 hover:text-purple-600" />
              )}
            </button>
          </div>

          {plan.value && (
            <p className="text-center text-sm mb-4">
              Valor:{" "}
              <span className="text-purple-600 font-semibold">
                {plan.value}
              </span>
            </p>
          )}

          <p className="text-center text-xs text-gray-400">
            Sua doação ajuda o Instituto Mamãe Coruja a continuar transformando vidas.
          </p>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-6 z-[9999] right-6 bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg animate-[fadeIn_.2s]">
          PIX copiado com sucesso ✅
        </div>
      )}
    </>
  );
}