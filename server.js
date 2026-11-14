import express from 'express';
import { Telegraf, Markup } from 'telegraf';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const WEB_APP_URL = process.env.WEB_APP_URL || `http://localhost:${PORT}`;
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID || '';
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || process.env.BOT_TOKEN;

if (!TELEGRAM_BOT_TOKEN) {
    console.error('❌ TELEGRAM_BOT_TOKEN topilmadi! .env faylni tekshir.');
    process.exit(1);
}

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);
const app = express();

// ─── Express static serving ───
app.use(express.static(path.join(__dirname, 'public')));

// ─── Health check ───
app.get('/health', (_, res) => res.json({ status: 'ok', service: 'Samuel Group Portal' }));

// ─── Start Express ───
const server = app.listen(PORT, () => {
    console.log(`[Express] 🚀 Mini App server ishga tushdi: ${WEB_APP_URL}`);
});

// ═══════════════════════════════════════════════════════════════
// TELEGRAF BOT HANDLERS
// ═══════════════════════════════════════════════════════════════

// /start — WebApp tugmasi bilan
bot.start(async (ctx) => {
    const userName = ctx.from?.first_name || 'Foydalanuvchi';
    const userId = ctx.from?.id;

    await ctx.reply(
        `🖤 *SAMUEL GROUP // PORTAL*\n` +
        `──────────────────────────\n` +
        `Xush kelibsiz, ${userName}! Men Kira 💋\n\n` +
        `Professional IT xizmatlar, dasturiy yechimlar va eksklyuziv o'yinlar.\n\n` +
        `👇 Pastdagi tugma orqali **Mini App** oching — to'liq interfeys, xizmatlar, to'lov va profil:`,
        {
            parse_mode: 'Markdown',
            ...Markup.keyboard([
                [Markup.button.webApp('🚀 Open Market', WEB_APP_URL)]
            ]).resize()
        }
    );
});

// /help
bot.help(async (ctx) => {
    await ctx.reply(
        `✨ *YORDAM*\n` +
        `──────────────────────────\n` +
        `/start — Mini App ochish\n` +
        `/help — Bu yordam\n\n` +
        `📸 Chek rasmini yuboring — avtomatik adminga yuboriladi.`
    );
});

// ─── CHEK (RECEIPT) PHOTO HANDLER ───
bot.on('photo', async (ctx) => {
    const user = ctx.from;
    if (!user) return;

    const userId = user.id;
    const firstName = user.first_name || 'Foydalanuvchi';
    const username = user.username ? `@${user.username}` : '';

    // 1. Foydalanuvchiga tasdiq xabari
    const confirmText =
        `✅ *Chekingiz qabul qilindi!*\n\n` +
        `👤 Mijoz: ${firstName}\n` +
        `🆔 ID: \`${userId}\`\n` +
        `📸 Chek rasmi yetkazib berildi.\n\n` +
        `Operator tez orada tekshirib, to'lovni tasdiqlaydi. 🙏`;

    await ctx.reply(confirmText, { parse_mode: 'Markdown' });

    // 2. Admin ga forward
    if (ADMIN_CHAT_ID) {
        try {
            const photoArray = ctx.message.photo;
            const fileId = photoArray[photoArray.length - 1].file_id;

            const caption =
                `📥 *YANGI TO'LOV CHEKI*\n` +
                `──────────────────────────\n` +
                `👤 Mijoz: ${firstName}\n` +
                `Username: ${username || 'Yo\'q'}\n` +
                `🆔 Telegram ID: \`${userId}\`\n` +
                `📌 Chek avtomatik yuborildi.`;

            await bot.telegram.sendPhoto(ADMIN_CHAT_ID, fileId, {
                caption,
                parse_mode: 'Markdown',
            });
            console.log(`[Chek] ${firstName} (${userId}) chek → Admin ga forward qilindi`);
        } catch (err) {
            console.error('[Chek] Admin ga yuborishda xatolik:', err);
        }
    } else {
        console.log(`[Chek] ${firstName} (${userId}) chek yubordi. ADMIN_CHAT_ID sozlanmagan.`);
    }
});

// ─── Bot launch ───
bot.launch().then(() => {
    console.log('[Telegraf] 🤖 Kira bot muvaffaqiyatli ishga tushdi!');
    if (ADMIN_CHAT_ID) {
        console.log(`[Chek] Admin chat ID: ${ADMIN_CHAT_ID}`);
    } else {
        console.log('[Chek] ⚠️ ADMIN_CHAT_ID sozlanmagan — cheklar logga yoziladi');
    }
});

// ─── Graceful shutdown ───
process.once('SIGINT', () => {
    console.log('[Server] SIGINT received, shutting down...');
    bot.stop('SIGINT');
    server.close(() => console.log('[Server] Express server to\'xtadi'));
});
process.once('SIGTERM', () => {
    console.log('[Server] SIGTERM received, shutting down...');
    bot.stop('SIGTERM');
    server.close(() => console.log('[Server] Express server to\'xtadi'));
});