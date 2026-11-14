const T = {
    uz: {
        start: "Salom! Men Kiraman 💋\n\nSamuel kanalidagi barcha qiziq narsalar — qo'rqinchli o'yinlar va kompyuteringizni uchishga majbur qiladigan optimizatsiya bo'yicha shaxsiy yordamchingizman.\n\nBugun nima yordam beray? Qotib ishlayotgan kompyuterni tuzatamizmi yoki yangi horror o'yinni sinab ko'rasizmi? ✨",
        help: "Men qanday yordam bera olaman?\n\n<b>/services</b> — kompyuter optimizatsiya xizmatlari (narxlar bilan)\n<b>/games</b> — qo'rqinchli o'yinlar\n<b>/contact</b> — bog'lanish uchun\n\nYoki shuncha yozib yubor — men javob beraman.",
        unknown: "Hmm, tushunmadim 😅\n\nBirorta narsani so'ramagansanmi? Quyidagi tugmalardan tanlang:",
        btn_services: "💻 Kompyuter optimizatsiyasi",
        btn_games: "👻 Qo'rqinchli o'yinlar",
        btn_contact: "📞 Bog'lanish",
        btn_help: "❓ Yordam",
        btn_standard: "Standard Start — 300 000 so'm",
        btn_pro: "Pro Gamer Pack — 400 000 so'm",
        btn_vip: "VIP ULTRA PACK — 450 000 so'm",
    },
    ru: {
        start: "Привет! Я Кира 💋\n\nЛичный помощник в канале Сэмюэля. Помогу с хоррор-играми от автора или прокачаю твой ПК так, что летать будет всё.\n\nЧего душа желает — оптимизацию заценим или игры? ✨",
        help: "Чем могу помочь?\n\n<b>/services</b> — оптимизация ПК (цены внутри)\n<b>/games</b> — хоррор-игры\n<b>/contact</b> — связаться\n\nИли просто напиши — отвечу.",
        unknown: "Э-э, не понял 😅\n\nЧто-то спросить забыл? Выбирай ниже:",
        btn_services: "💻 Оптимизация ПК",
        btn_games: "👻 Хоррор-игры",
        btn_contact: "📞 Связь",
        btn_help: "❓ Помощь",
        btn_standard: "Standard Start — 300 000 сум",
        btn_pro: "Pro Gamer Pack — 400 000 сум",
        btn_vip: "VIP ULTRA PACK — 450 000 сум",
    },
    en: {
        start: "Hey there! I'm Kira 💋\n\nSamuel's virtual assistant here. Whether you're looking for indie horror games or want to supercharge your PC with pro optimization — I've got you covered.\n\nWhat are we working on today? ✨",
        help: "How can I help?\n\n<b>/services</b> — PC optimization (prices inside)\n<b>/games</b> — horror games\n<b>/contact</b> — get in touch\n\nOr just type it out — I'll respond.",
        unknown: "Hmm, didn't get that 😅\n\nForgot to ask something? Pick below:",
        btn_services: "💻 PC Optimization",
        btn_games: "👻 Horror Games",
        btn_contact: "📞 Contact",
        btn_help: "❓ Help",
        btn_standard: "Standard Start — $300",
        btn_pro: "Pro Gamer Pack — $400",
        btn_vip: "VIP ULTRA PACK — $450",
    },
};
export function t(lang, key, vars) {
    let text = T[lang]?.[key] ?? T.uz[key];
    if (vars?.name) {
        text = text.replace(/\{name\}/g, vars.name);
    }
    return text;
}
