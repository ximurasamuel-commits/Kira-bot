import { Telegraf, Markup } from 'telegraf';
import express from 'express';

const TOKEN = '8460703214:AAEaP8AWvAKTNcBodKIrkAkABfIWY_1LAs0';
const ADMIN_CHAT_ID = '5709916413';
const WEB_APP_URL = 'https://kira-bot-jgtj.onrender.com';

const bot = new Telegraf(TOKEN);
const app = express();
const PORT = process.env.PORT || 3000;

const htmlContent = `<!DOCTYPE html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Samuel Group // Portal</title>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
<style>
:root{--bg:#08090d;--card:#13151f;--border:#232638;--red:#ff3344;--gold:#ffcc00;--text:#fff;--muted:#8b8e9b}
*{box-sizing:border-box;margin:0;padding:0;font-family:sans-serif;-webkit-tap-highlight-color:transparent}
body{background:var(--bg);color:var(--text);padding:20px;min-height:100vh}
header{margin-bottom:24px}
h1{font-size:24px;font-weight:800;color:var(--red);margin-bottom:6px}
.subtitle{font-size:13px;color:var(--muted)}
.categories{display:flex;flex-direction:column;gap:14px}
.category-card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px;cursor:pointer;transition:.2s}
.category-card:active{transform:scale(.97);border-color:var(--red)}
.category-card h3{font-size:18px;margin-bottom:6px}
.category-card p{font-size:13px;color:var(--muted);line-height:1.4}
.modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.85);backdrop-filter:blur(8px);justify-content:center;align-items:flex-end;z-index:100}
.modal.active{display:flex}
.modal-content{background:#11131c;width:100%;max-height:90vh;border-radius:24px 24px 0 0;padding:24px;overflow-y:auto;border-top:1px solid #2a2e45}
.back-btn{background:#1c1f30;border:1px solid #2d324f;color:#fff;cursor:pointer;font-size:13px;font-weight:600;padding:8px 14px;border-radius:8px;margin-bottom:18px}
.modal-title{font-size:22px;font-weight:800;margin-bottom:8px}
.modal-desc{font-size:13px;color:var(--muted);margin-bottom:20px;line-height:1.5}
.service-item{display:flex;justify-content:space-between;align-items:center;background:#181a26;padding:14px 16px;border-radius:12px;margin-bottom:10px;border:1px solid #24283b}
.service-name{font-size:13px;font-weight:600;max-width:65%}
.service-price{font-size:14px;font-weight:800;color:var(--gold)}
.card-payment{background:#181a26;border:1px dashed var(--gold);border-radius:12px;padding:16px;margin-top:24px;text-align:center}
.card-payment span{font-size:11px;color:var(--muted);display:block;margin-bottom:6px}
.card-payment strong{font-size:18px;color:var(--gold);letter-spacing:1.5px;font-family:monospace}
.copy-btn{background:linear-gradient(135deg,#7c3aed,#6d28d9);color:#fff;border:none;width:100%;padding:14px;border-radius:12px;font-weight:700;font-size:14px;margin-top:12px;cursor:pointer}
</style>
</head>
<body>
<header><h1>SAMUEL GROUP