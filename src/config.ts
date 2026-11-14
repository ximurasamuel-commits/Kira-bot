export const BOT_NAME = "Kira";
export const CHANNEL_NAME = "Samuel ► Play";
export const BUSINESS_NAME = "Prime Pc Kompyuter xizmatlari";
export const CITY = "Qo'qon";

export const CONTACT = {
  telegram: "@ZDFo21",
  phone: "+998 91 739-22-34",
  phoneDisplay: "+998 91 739-22-34",
};

export const WORKING_HOURS = "09:00 - 20:00";

export type Language = "uz" | "ru" | "en";

export const SERVICE_PACKAGES = {
  standard: {
    name: "Standard Start",
    price: "300 000",
    priceUzs: "300 000 so'm",
    priceRub: "300 000 сум",
    priceUsd: "$300",
    features: [
      "Windows 10/11 PRO (toza yoki yengil versiya)",
      "MS Office + to'liq dastur ta'minoti",
      "To'liq dastur to'plami",
      "Doimiy faollashtirish (permanent activation)",
    ],
  },
  pro: {
    name: "Pro Gamer Pack",
    price: "400 000",
    priceUzs: "400 000 so'm",
    priceRub: "400 000 сум",
    priceUsd: "$400",
    features: [
      "Standard Startning hammasi",
      "NVIDIA / AMD GPU sozlash (fine-tuning)",
      "Kirish kechikishini (input lag) yo'q qilish",
      "FPS ni maksimalga chiqarish",
      "Maxsus quvvat rejalari (custom power plans)",
      "Drajver optimizatsiyasi",
    ],
  },
  vip: {
    name: "VIP ULTRA PACK",
    price: "450 000",
    priceUzs: "450 000 so'm",
    priceRub: "450 000 сум",
    priceUsd: "$450",
    features: [
      "To'liq super optimizatsiya",
      "BIOS sozlash",
      "RAM ichki sozlash",
      "Registry chuqur sozlash",
      " Keraksiz foon dasturlarini o'chirish",
      "OBS / Stream pro sozlash",
      "Nol input lag",
      "Ajoyib tarmoq sozlash (flawless network tuning)",
    ],
  },
} as const;

export type ServiceKey = keyof typeof SERVICE_PACKAGES;

export const SERVICE_KEYS: ServiceKey[] = ["standard", "pro", "vip"];

export function detectLanguage(text: string): Language {
  // Uzbek Cyrillic specific letters
  if (/[ўқғҳ]/i.test(text)) return "uz";
  // Russian Cyrillic (other than Uzbek-specific)
  if (/[а-яёА-ЯЁ]/i.test(text)) return "ru";
  // Latin script — default to Uzbek
  return "uz";
}

export function detectLanguageFromName(name: string | undefined): Language {
  if (!name) return "uz";
  return detectLanguage(name);
}

export const GAMES = {
  uz: [
    "Atmosferali, qora fonli, immersivni PC qo'rqinchi o'yinlar",
    "Samuel Games Studios ishlab chiqaradi",
    "Har bir o'yin — maxsus atmosfera va tajriba",
  ],
  ru: [
    "Атмосферные, тёмные, погружающие хоррор-игры для ПК",
    "Разработано Samuel Games Studios",
    "Каждая игра — особая атмосфера и опыт",
  ],
  en: [
    "Atmospheric, dark, immersive PC horror games",
    "Developed by Samuel Games Studios",
    "Each game is a unique atmosphere and experience",
  ],
};

export const GAMES_PRICING = {
  uz: "O'yin narxi har bir o'yin uchun alohida. Batafsil uchun bog'laning.",
  ru: "Цена на каждую игру указана отдельно. За подробностями обращайтесь.",
  en: "Each game has its own price. Contact for details.",
};