# Kira Bot — Samuel ► Play virtual assistant

Telegram bot that serves Samuel's channel community with PC optimization
services (Prime Pc Kompyuter xizmatlari, Qo'qon) and indie horror games.

## Languages
- Uzbek (oʻzbekcha)
- Russian (русский)
- English

## Service pricing
| Package | Price | Includes |
| --- | --- | --- |
| Standard Start | 300,000 UZS | Windows 10/11 PRO, MS Office + full software bundle, permanent activation |
| Pro Gamer Pack | 400,000 UZS | Standard + NVIDIA/AMD GPU fine-tuning, input lag elimination, FPS maximization, custom power plans, driver optimization |
| VIP ULTRA PACK | 450,000 UZS | Full Super Optimization (BIOS, RAM, Registry deep tweaks, stripping useless background processes), OBS/Stream pro setup, zero input lag, flawless network tuning |

Extras: home-visit service in Qo'qon. Working hours: 09:00 - 20:00.
Contact: @ZDFo21 | Phone: +998 91 739-22-34

## Setup
```
npm install
cp .env.example .env
# Set TELEGRAM_BOT_TOKEN in .env
npm run dev
```

## Running
- `npm run dev` — watch mode with tsx
- `npm run build` — compile to dist/
- `npm start` — run compiled bot