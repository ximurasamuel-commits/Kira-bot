import { SERVICE_PACKAGES, CONTACT, WORKING_HOURS } from "./config";
function price(lang, key) {
    const pkg = SERVICE_PACKAGES[key];
    if (lang === "en")
        return pkg.priceUsd;
    if (lang === "ru")
        return pkg.priceRub;
    return pkg.priceUzs;
}
function features(lang, key) {
    const pkg = SERVICE_PACKAGES[key];
    return pkg.features.map((f, i) => `${i + 1}. ${f}`).join("\n");
}
export function formatServicesCard(lang) {
    return (`💻 <b>Prime Pc Kompyuter xizmatlari (Qo'qon)</b>\n\n` +
        `Kompyuterni to'liq tuzatib, o'yinlar uchun yaxshilaymiz. Quyidagi paketlardan tanlang:\n\n` +
        `🔹 <b>Standard Start</b> — ${price(lang, "standard")}\n` +
        `   Windows 10/11 PRO, MS Office + to'liq dastur to'plami, doimiy faollashtirish\n\n` +
        `🔹 <b>Pro Gamer Pack</b> — ${price(lang, "pro")}\n` +
        `   GPU sozlash, input lag yo'q qilish, FPS maksimal, custom power plans\n\n` +
        `🔹 <b>VIP ULTRA PACK</b> — ${price(lang, "vip")}\n` +
        `   To'liq super optimizatsiya: BIOS, RAM, Registry, OBS/Stream, nol input lag\n\n` +
        `📌 <b>Izoh:</b> har bir paket — toza o'rnatish + barcha kerakli dasturlar kiradi. Narx bir kompyuter uchun.`);
}
export function formatServiceCard(lang, key) {
    const pkg = SERVICE_PACKAGES[key];
    const priceStr = price(lang, key);
    return (`🔹 <b>${pkg.name}</b> — ${priceStr}\n\n` +
        `${features(lang, key)}\n\n` +
        `📞 Bog'lanish uchun: ${CONTACT.telegram} | ${CONTACT.phoneDisplay}\n` +
        `⏰ Ish vaqti: ${WORKING_HOURS}`);
}
export function formatGamesCard(lang) {
    if (lang === "uz") {
        return (`👻 <b>Qo'rqinchli o'yinlar</b>\n\n` +
            `Samuel Games Studios ishlab chiqaradi.\n` +
            `Atmosferali, qora fonli, immersivni PC horror o'yinlar.\n` +
            `Har bir o'yin — maxsus atmosfera va tajriba.\n\n` +
            `📌 O'yin narxi har bir o'yin uchun alohida. Batafsil uchun bog'laning.\n\n` +
            `📞 ${CONTACT.telegram} | ${CONTACT.phoneDisplay}`);
    }
    if (lang === "ru") {
        return (`👻 <b>Хоррор-игры</b>\n\n` +
            `Разработано Samuel Games Studios.\n` +
            `Атмосферные, тёмные, погружающие хоррор-игры для ПК.\n` +
            `Каждая игра — особая атмосфера и опыт.\n\n` +
            `📌 Цена на каждую игру указана отдельно. За подробностями обращайтесь.\n\n` +
            `📞 ${CONTACT.telegram} | ${CONTACT.phoneDisplay}`);
    }
    return (`👻 <b>Horror Games</b>\n\n` +
        `Developed by Samuel Games Studios.\n` +
        `Atmospheric, dark, immersive PC horror games.\n` +
        `Each game is a unique atmosphere and experience.\n\n` +
        `📌 Each game has its own price. Contact for details.\n\n` +
        `📞 ${CONTACT.telegram} | ${CONTACT.phoneDisplay}`);
}
export function formatContactCard(lang) {
    if (lang === "uz") {
        return (`📞 <b>Bog'lanish</b>\n\n` +
            `Telegram: ${CONTACT.telegram}\n` +
            `Telefon: ${CONTACT.phoneDisplay}\n` +
            `Ish vaqti: ${WORKING_HOURS}\n` +
            `Manzil: Qo'qon (xizmat uchun uyga chiqib kelamiz)\n\n` +
            `💡 Kompyuterni o'zimga olib kelishingiz yoki uyga chiqib kelishingiz mumkin.`);
    }
    if (lang === "ru") {
        return (`📞 <b>Связь</b>\n\n` +
            `Telegram: ${CONTACT.telegram}\n` +
            `Телефон: ${CONTACT.phoneDisplay}\n` +
            `Рабочее время: ${WORKING_HOURS}\n` +
            `Город: Qo'qon (выезд на дом)\n\n` +
            `💡 Принесёшь ПК сами или выеду к вам — как удобнее.`);
    }
    return (`📞 <b>Contact</b>\n\n` +
        `Telegram: ${CONTACT.telegram}\n` +
        `Phone: ${CONTACT.phoneDisplay}\n` +
        `Working hours: ${WORKING_HOURS}\n` +
        `Location: Qo'qon (home visit available)\n\n` +
        `💡 Bring your PC or we'll come to you — whichever works.`);
}
