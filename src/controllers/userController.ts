import { Request, Response } from "express"
import prisma from '../../prisma/prisma';
import { encryptPassword } from "../utils/encryptPassword";

export const addUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const encryptedPassword = await encryptPassword(password);

    const newUser = await prisma.user.create({
      data: {
        username: username,
        password: encryptedPassword,
        lastLogin: new Date() //cambiar campo a NULLABLE
      },
    });

    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
}