"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const authMiddleware_1 = __importDefault(require("./middlewares/authMiddleware"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT || 3000;
app.use(express_1.default.json());
app.use('/user', userRoutes_1.default);
app.use('/login', authRoute_1.default);
app.use('/post', authMiddleware_1.default, postRoutes_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}!`);
});
