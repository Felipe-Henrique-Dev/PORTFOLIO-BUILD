"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async ({ view }) => {
    return view.render('Render');
});
Route_1.default.post('/api/contatos', 'MenssagesController.store');
//# sourceMappingURL=routes.js.map