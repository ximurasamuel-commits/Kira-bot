import { Telegraf, Markup } from 'telegraf';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Siz bergan aniq ma'lumotlar
const TOKEN = '8460703214:AAEaP8AWvAKTNcBodKIrkAkABfIWY_1LAs0';
const ADMIN_CHAT_ID = '5709916413';
const WEB_APP_URL = 'https://kira-bot-jgtj.onrender.com';

const bot = new Telegraf(TOKEN);
const app = express();
const PORT = process.env.PORT || 3000;

// Statik fayllarni ulash
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start komandasi va aniq yo'riqnoma
bot.start(async (ctx) => {
    const userName = ctx.from?.first_name || 'Foydalanuvchi';
    await ctx.reply(
        `*SAMUEL GROUP // PORTAL*\n\n` +
        `Salom, ${userName}! Men Kira 🔴 — sizning shaxsiy yordamchingiz.\n\n` +
        `🚀 *Qanday foydalanish kerak?*\n` +
        `1. Pastdagi klaviaturada chiqadigan *'🚀 Open Market'* tugmasini bosing.\n` +
        `2. Ochilgan oyna orqali barcha eksklyuziv xizmatlar, dasturlar va YouTube konsultatsiyalari bilan tanishing.\n` +
        `3. Tanlagan xizmatingiz uchun to'lovni amalga oshirib, chekni shu botga rasm ko'rinishida yuboring!`,
        {
            parse_mode: 'Markdown',
            ...Markup.keyboard([
                [Markup.button.webApp('🚀 Open Market', WEB_APP_URL)]
            ]).resize()
        }
    );
});

// To'lov cheklarini qabul qilish va adminga yuborish
bot.on('photo', async (ctx) => {
    const user = ctx.from;
    if (!user) return;
    
    await ctx.reply('*Chekingiz qabul qilindi!* \nOperator tez orada tekshiradi.', { parse_mode: 'Markdown' });
    
    if (ADMIN_CHAT_ID) {
        const photoArray = ctx.message.photo;
        const fileId = photoArray[photoArray.length - 1].file_id;
        await bot.telegram.sendPhoto(ADMIN_CHAT_ID, fileId, {
            caption: `🔴 *YANGI TO'LOV CHEKI*\n\n` +
                     `👤 Mijoz: [${user.first_name}](tg://user?id=${user.id})\n` +
                     `🆔 ID: \`${user.id}\``,
            parse_mode: 'Markdown'
        });
    }
});

// 502 xatosi chiqmasligi uchun '0.0.0.0' bilan ulanish
app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Express] 🚀 Mini App server ishga tushdi: http://localhost:${PORT}`);
});

bot.launch().then(() => {
    console.log('Kira bot Mini App rejimida muvaffaqiyatli ishga tushdi!');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));