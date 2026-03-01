import baby from "../assets/donation/qrcode_baby.png";
import premium from "../assets/donation/qrcode_premium.png";
import vip from "../assets/donation/qrcode_vip.png";

export const donationPlans = {
  baby: {
    title: "Doação Baby",
    qr: baby,
    pixKey: "instituto.mamaecoruja@yahoo.com",
    value: "R$ 50,00"
  },
  vip: {
    title: "Doação VIP",
    qr: vip,
    pixKey: "instituto.mamaecoruja@yahoo.com",
    value: "R$ 100,00"
  },
  premium: {
    title: "Doação Premium",
    qr: premium,
    pixKey: "instituto.mamaecoruja@yahoo.com",
    value: "Valor livre"
  },
};