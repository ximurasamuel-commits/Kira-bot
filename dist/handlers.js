import { detectLanguage } from "./config";
import { t } from "./persona";
import { formatServicesCard, formatGamesCard, formatContactCard, formatServiceCard, } from "./formatting";
export async function startHandler(bot, ctx) {
    const chatId = ctx.chat?.id;
    if (!chatId)
        return;
    const lang = detectLanguage(ctx.from?.username ?? ctx.from?.first_name ?? "");
    const firstName = ctx.from?.first_name ?? "dost";
    const text = t(lang, "start", { name: firstName });
    const keyboard = {
        inline_keyboard: [
            [
                { text: t(lang, "btn_services"), callback_data: "services" },
                { text: t(lang, "btn_games"), callback_data: "games" },
            ],
            [
                { text: t(lang, "btn_contact"), callback_data: "contact" },
                { text: t(lang, "btn_help"), callback_data: "help" },
            ],
        ],
    };
    await ctx.reply(text, {
        reply_markup: keyboard,
        parse_mode: "HTML",
    });
}
export async function helpHandler(bot, ctx) {
    const lang = detectLanguage(ctx.from?.username ?? ctx.from?.first_name ?? "");
    const text = t(lang, "help");
    await ctx.reply(text, { parse_mode: "HTML" });
}
export async function servicesHandler(bot, ctx) {
    const lang = detectLanguage(ctx.from?.username ?? ctx.from?.first_name ?? "");
    const text = formatServicesCard(lang);
    const keyboard = {
        inline_keyboard: [
            [
                { text: t(lang, "btn_standard"), callback_data: "service_standard" },
                { text: t(lang, "btn_pro"), callback_data: "service_pro" },
                { text: t(lang, "btn_vip"), callback_data: "service_vip" },
            ],
            [
                { text: t(lang, "btn_contact"), callback_data: "contact" },
            ],
        ],
    };
    await ctx.reply(text, {
        reply_markup: keyboard,
        parse_mode: "HTML",
    });
}
export async function gamesHandler(bot, ctx) {
    const lang = detectLanguage(ctx.from?.username ?? ctx.from?.first_name ?? "");
    const text = formatGamesCard(lang);
    await ctx.reply(text, { parse_mode: "HTML" });
}
export async function contactHandler(bot, ctx) {
    const lang = detectLanguage(ctx.from?.username ?? ctx.from?.first_name ?? "");
    const text = formatContactCard(lang);
    await ctx.reply(text, { parse_mode: "HTML" });
}
export async function unknownHandler(bot, ctx) {
    const lang = detectLanguage(ctx.from?.username ?? ctx.from?.first_name ?? "");
    const text = t(lang, "unknown");
    const keyboard = {
        inline_keyboard: [
            [
                { text: t(lang, "btn_services"), callback_data: "services" },
                { text: t(lang, "btn_games"), callback_data: "games" },
            ],
            [
                { text: t(lang, "btn_contact"), callback_data: "contact" },
                { text: t(lang, "btn_help"), callback_data: "help" },
            ],
        ],
    };
    await ctx.reply(text, {
        reply_markup: keyboard,
        parse_mode: "HTML",
    });
}
export async function callbackHandler(bot, ctx) {
    const chatId = ctx.chat?.id;
    if (!chatId)
        return;
    const lang = detectLanguage(ctx.from?.username ?? ctx.from?.first_name ?? "");
    const cq = ctx.callbackQuery;
    const data = cq?.data;
    switch (data) {
        case "services":
            await ctx.editMessageText(formatServicesCard(lang), {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: t(lang, "btn_standard"), callback_data: "service_standard" },
                            { text: t(lang, "btn_pro"), callback_data: "service_pro" },
                            { text: t(lang, "btn_vip"), callback_data: "service_vip" },
                        ],
                        [{ text: t(lang, "btn_contact"), callback_data: "contact" }],
                    ],
                },
            });
            break;
        case "games":
            await ctx.editMessageText(formatGamesCard(lang), { parse_mode: "HTML" });
            break;
        case "contact":
            await ctx.editMessageText(formatContactCard(lang), { parse_mode: "HTML" });
            break;
        case "help":
            await ctx.editMessageText(t(lang, "help"), { parse_mode: "HTML" });
            break;
        case "service_standard":
            await ctx.reply(formatServiceCard(lang, "standard"), { parse_mode: "HTML" });
            break;
        case "service_pro":
            await ctx.reply(formatServiceCard(lang, "pro"), { parse_mode: "HTML" });
            break;
        case "service_vip":
            await ctx.reply(formatServiceCard(lang, "vip"), { parse_mode: "HTML" });
            break;
        default:
            await ctx.answerCbQuery(t(lang, "unknown"));
    }
}
