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
exports.deletePost = exports.editPost = exports.addPost = exports.readPost = void 0;
const prisma_1 = __importDefault(require("../../prisma/prisma"));
const readPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const allPosts = yield prisma_1.default.post.findMany();
        console.log("read", allPosts);
        res.status(200).send({
            resultado: 1,
            datos: allPosts,
        });
    }
    catch (error) {
        console.log(error);
        const errorMessage = ((_a = error.meta) === null || _a === void 0 ? void 0 : _a.cause) || 'Error desconocido';
        res.status(200).send({
            resultado: 0,
            error: errorMessage
        });
    }
});
exports.readPost = readPost;
const addPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { userId, title, content } = req.body;
    try {
        // Buscar el usuario por su ID
        const user = yield prisma_1.default.user.findUnique({
            where: { id: userId },
        });
        // Crear el post con la información proporcionada y el usuario encontrado
        const createdPost = yield prisma_1.default.post.create({
            data: {
                title,
                content,
                author: {
                    connect: {
                        id: user === null || user === void 0 ? void 0 : user.id,
                    },
                },
            },
        });
        console.log("create", createdPost);
        // Obtener todos los usuarios con sus posts y perfiles asociados
        const allPostsByUser = yield prisma_1.default.post.findMany({
            where: {
                authorId: userId,
            },
        });
        console.dir(allPostsByUser, { depth: null });
        res.status(201).send({
            resultado: 1,
            data: {
                createdPost: createdPost,
                userPosts: allPostsByUser
            },
        });
    }
    catch (error) {
        console.log(error);
        const errorMessage = ((_b = error.meta) === null || _b === void 0 ? void 0 : _b.cause) || "Error desconocido";
        res.status(200).send({
            resultado: 0,
            error: errorMessage,
        });
    }
});
exports.addPost = addPost;
const editPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = parseInt(req.params.id);
    try {
        const post = yield prisma_1.default.post.update({
            where: { id: id },
            data: { published: true },
        });
        console.log("edit", post);
        res.status(200).send({
            resultado: 1,
            datos: post,
        });
    }
    catch (error) {
        console.log(error);
        const errorMessage = ((_c = error.meta) === null || _c === void 0 ? void 0 : _c.cause) || 'Error desconocido';
        res.status(200).send({
            resultado: 0,
            error: errorMessage
        });
    }
});
exports.editPost = editPost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const id = parseInt(req.params.id);
    try {
        const post = yield prisma_1.default.post.delete({
            where: { id: id }
        });
        console.log("delete", post);
        res.status(200).send({
            resultado: 1,
            datos: post,
        });
    }
    catch (error) {
        console.log(error);
        const errorMessage = ((_d = error.meta) === null || _d === void 0 ? void 0 : _d.cause) || 'Error desconocido';
        res.status(200).send({
            resultado: 0,
            error: errorMessage
        });
    }
});
exports.deletePost = deletePost;
