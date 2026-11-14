declare module "node-telegram-bot-api" {
  export default class TelegramBot {
    constructor(token: string, options?: any);
    onText(regex: RegExp, callback: (msg: any) => Promise<void> | void): void;
    on(event: string, callback: (...args: any[]) => Promise<void> | void): void;
    on(event: "message", callback: (msg: any) => void): void;
    on(event: "callback_query", callback: (query: any) => void): void;
    on(event: "error", callback: (error: Error) => void): void;
    on(event: "polling_error", callback: (error: Error) => void): void;
    sendMessage(chatId: number, text: string, options?: any): Promise<any>;
    editMessageText(text: string, options?: any): Promise<any>;
    answerCallbackQuery(callbackQueryId: string, options?: any): Promise<any>;
  }
}

declare module "dotenv" {
  export function config(options?: any): { parsed?: Record<string, string> };
}