import { Telegraf, Markup } from 'telegraf';
import express from 'express';

const TOKEN = '8460703214:AAEaP8AWvAKTNcBodKIrkAkABfIWY_1LAs0';
const ADMIN_CHAT_ID = '5709916413';
const WEB_APP_URL = 'https://kira-bot-jgtj.onrender.com';

const bot = new Telegraf(TOKEN);
const app = express();
const PORT = process.env.PORT || 3000;

// To'g'ridan-to'g'ri brauzerda ochiladigan lyuks sahifa
const htmlContent = `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Samuel Group // Portal</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <style>
        :root {
            --bg-color: #08090d;
            --card-bg: #13151f;
            --card-border: #232638;
            --accent-red: #ff3344;
            --accent-gold: #ffcc00;
            --text-main: #ffffff;
            --text-muted: #8b8e9b;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; -webkit-tap-highlight-color: transparent; }
        body { background-color: var(--bg-color); color: var(--text-main); padding: 20px; display: flex; flex-direction: column; min-height: 100vh; }
        header { margin-bottom: 24px; }
        h1 { font-size: 24px; font-weight: 800; color: var(--accent-red); margin-bottom: 6px; }
        .subtitle { font-size: 13px; color: var(--text-muted); font-weight: 500; }
        .categories { display: flex; flex-direction: column; gap: 14px; }
        .category-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 16px; padding: 20px; cursor: pointer; transition: all 0.25s ease; }
        .category-card:active { transform: scale(0.97); border-color: var(--accent-red); }
        .category-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 6px; }
        .category-card p { font-size: 13px; color: var(--text-muted); line-height: 1.4; }
        .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background