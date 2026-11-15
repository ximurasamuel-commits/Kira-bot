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

// /start komandasi: Banner rasm va ostida chiroyli inline tugmalar bilan
bot.start(async (ctx) => {
    const u = ctx.from?.first_name || 'Foydalanuvchi';
    
    try {
        await ctx.replyWithPhoto(
            { source: path.join(__dirname, 'public', 'main-bg.jpg') },
            {
                caption: `*SAMUEL & KIRA SHOP* // PORTAL\n\nSalom, ${u}! Men Kira 🔴 — sizning shaxsiy yordamchingiz.\n\n🚀 *Eksklyuziv xizmatlar va mahsulotlar katalogi*`,
                parse_mode: 'Markdown',
                ...Markup.inlineKeyboard([
                    [Markup.button.webApp('🚀 Open Market', WEB_APP_URL)],
                    [Markup.button.url('💬 Bizning Chat', 'https://t.me/samuel_play'), Markup.button.url('🔥 Kanalimiz', 'https://t.me/samuel_play')]
                ])
            }
        );
    } catch (e) {
        // Agar rasm topilmasa, matnli xabar va tugma yuboradi (kod buzilmaydi)
        await ctx.reply(
            `*SAMUEL & KIRA SHOP* // PORTAL\n\nSalom, ${u}! Men Kira 🔴 — sizning shaxsiy yordamchingiz.`,
            {
                parse_mode: 'Markdown',
                ...Markup.inlineKeyboard([
                    [Markup.button.webApp('🚀 Open Market', WEB_APP_URL)]
                ])
            }
        );
    }
});

// To'lov cheklarini qabul qilish va adminga yuborish
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