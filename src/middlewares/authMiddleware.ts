import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken';

type User = {
    userId: number;
    username: string;
    iat: number;
    exp: number;
  };

interface AuthRequest extends Request {
    user?: User
  }

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {

    const JWT_SECRET = process.env.JWT_SECRET || ""

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
        const decodedToken : User = jwt.verify(token, JWT_SECRET) as User
        // Añadir el objeto de usuario decodificado a la solicitud
        req.user = {
            userId: decodedToken.userId,
            username: decodedToken.username,
            iat: decodedToken.iat,
            exp: decodedToken.exp,
          };
        // Continuar al siguiente middleware o controlador
        next();
    } catch (error) {
        return res.status(401).json({ message: 'El token de autenticación no es válido.' });
    }
};

export default authMiddleware