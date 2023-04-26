"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const router = express_1.default.Router();
const port = process.env.SERVER_PORT || 3000;
//const env = process.env.ENVIRONMENT || "DEV"
app.use(express_1.default.json());
const prisma = new client_1.PrismaClient();
router.get("/read", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield prisma.user.findMany();
    console.log("read user", allUsers);
    res.status(200).send({
        resultado: 1,
        datos: allUsers,
    });
}));
router.get("/edit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const post = yield prisma.post.update({
            where: { id: 1 },
            data: { published: true },
        });
        console.log("edit post", post);
        res.status(200).send({
            resultado: 1,
            datos: post,
        });
    }
    catch (error) {
        console.log(error);
        const errorMessage = ((_a = error.meta) === null || _a === void 0 ? void 0 : _a.cause) || 'Error desconocido';
        res.status(201).send({
            resultado: 0,
            error: errorMessage
        });
    }
}));
router.get("/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield prisma.post.delete({
        where: { id: 1 }
    });
    console.log("delete post", post);
    res.status(200).send({
        resultado: 1,
        datos: post,
    });
}));
router.get("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.user.create({
        data: {
            name: 'Victor',
            email: 'victor@prisma.io',
            posts: {
                create: { title: 'creacion post from User' }, //crea instancia de entidad dentro de objeto que lo contiene
            },
            profile: {
                create: { bio: 'creacion profile from User' },
            },
        },
    });
    const allUsers = yield prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    });
    console.dir(allUsers, { depth: null });
    res.status(200).send({
        resultado: 1,
        datos: allUsers,
    });
}));
app.use("/api", router);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}!`);
});
