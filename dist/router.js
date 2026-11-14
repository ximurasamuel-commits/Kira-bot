import { startHandler, helpHandler, servicesHandler, gamesHandler, contactHandler, unknownHandler, callbackHandler, } from "./handlers";
export function registerRoutes(bot) {
    bot.start((ctx) => startHandler(bot, ctx));
    bot.help((ctx) => helpHandler(bot, ctx));
    bot.command("services", (ctx) => servicesHandler(bot, ctx));
    bot.command("games", (ctx) => gamesHandler(bot, ctx));
    bot.command("contact", (ctx) => contactHandler(bot, ctx));
    bot.command("price", (ctx) => servicesHandler(bot, ctx));
    bot.on("callback_query", (ctx) => callbackHandler(bot, ctx));
    bot.on("text", (ctx) => {
        const text = ctx.message && "text" in ctx.message ? ctx.message.text : "";
        if (text.startsWith("/"))
            return;
        unknownHandler(bot, ctx);
    });
    bot.catch((err, ctx) => console.error("[Kira] Error:", err));
}
