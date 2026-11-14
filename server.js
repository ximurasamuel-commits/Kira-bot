import { Telegraf, Markup } from 'telegraf';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOKEN = '8460703214:AAEaP8AWvAKTNcBodKIrkAkABfIWY_1LAs0';
const ADMIN_CHAT_ID = '5709916413';
const WEB_APP_URL = 'https://kira-bot-jgtj.onrender.com';

const bot = new Telegraf(TOKEN);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

bot.start(async (ctx) => {
    const u = ctx.from?.first_name || 'Foydalanuvchi';
    await ctx.reply(
        `*SAMUEL GROUP // PORTAL*\n\n` +
        `Salom, ${u}! Men Kira 🔴 — sizning shaxsiy yordamchingiz.\n\n` +
        `🚀 *Qanday foydalanish kerak?*\n` +
        `1. Pastdagi *'🚀 Open Market'* tugmasini bosing.\n` +
        `2. Xizmatlar bilan tanishing.\n` +
        `3. To'lov chekini rasm ko'rinishida yuboring!`,
        {
            parse_mode: 'Markdown',
            ...Markup.keyboard([
                [Markup.button.webApp('🚀 Open Market', WEB_APP_URL)]
            ]).resize()
        }
    );
});

bot.on('photo', async (ctx) => {
    const u = ctx.from;
    if (!u) return;
    await ctx.reply('*Chekingiz qabul qilindi!* \nOperator tez orada tekshiradi.', { parse_mode: 'Markdown' });
    if (ADMIN_CHAT_ID) {
        const f = ctx.message.photo[ctx.message.photo.length - 1].file_id;
        await bot.telegram.sendPhoto(ADMIN_CHAT_ID, f, {
            caption: `🔴 *YANGI TO'LOV CHEKI*\n\n👤 Mijoz: [${u.first_name}](tg://user?id=${u.id})\n🆔 ID: \`${u.id}\``,
            parse_mode: 'Markdown'
        });
    }
});

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
bot.launch().then(() => console.log('Bot started'));
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));