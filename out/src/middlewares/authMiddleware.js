"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const JWT_SECRET = process.env.JWT_SECRET || "";
    // Obtener el token de la cabecera de autorización
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No se proporcionó un token de autenticación.' });
    }
    // Obtener el token de autorización sin el prefijo "Bearer"
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No se proporcionó un token de autenticación válido.' });
    }
    try {
        // Verificar y decodificar el token
        const decodedToken = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        // Añadir el objeto de usuario decodificado a la solicitud
        req.user = {
            userId: decodedToken.userId,
            username: decodedToken.username,
            iat: decodedToken.iat,
            exp: decodedToken.exp,
        };
        // Continuar al siguiente middleware o controlador
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'El token de autenticación no es válido.' });
    }
};
exports.default = authMiddleware;
