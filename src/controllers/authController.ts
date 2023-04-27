import { Request, Response } from "express"
import bcrypt from 'bcrypt';
import prisma from '../../prisma/prisma';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {

    const JWT_SECRET = process.env.JWT_SECRET || ""

    const { username, password } = req.body
    try {
        const user = await prisma.user.findUnique({ where: { username } })

        if (!user) {
            return res.status(401).send({ message: 'Invalid username or password' });
        }

        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
            return res.status(401).send({ message: 'Invalid username or password' });
        }

        // Generar el token de autenticación
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        res.send({ token });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
}