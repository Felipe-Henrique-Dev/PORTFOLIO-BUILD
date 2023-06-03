"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class MenssagesController {
    async store({ request, response }) {
        const data = request.all();
        const bot_id = Env_1.default.get('telegram_chat_bot_id');
        const chat_id = Env_1.default.get('telegram_chat_id');
        console.log(bot_id);
        console.log(chat_id);
        console.log(data);
        const bot = new telegraf_1.Telegraf(bot_id);
        await bot.telegram.sendMessage(chat_id, `Nome: ${data.name} \nContato: ${data.contato} \nMensagem: ${data.message}`);
        return response.status(201).json({ message: 'Mensagem enviada com sucesso!' });
    }
}
exports.default = MenssagesController;
//# sourceMappingURL=MenssagesController.js.map