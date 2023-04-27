import { Request, Response } from "express"
import prisma from '../../prisma/prisma';

export const readPost = async (req: Request, res: Response) => {
  try {
    const allPosts = await prisma.post.findMany()
    console.log("read", allPosts)
    res.status(200).send({
      resultado: 1,
      datos: allPosts,
    })
  } catch (error) {
    console.log(error)
    const errorMessage = (error as any).meta?.cause || 'Error desconocido';
    res.status(200).send({
      resultado: 0,
      error: errorMessage
    })
  }
}

export const addPost = async (req: Request, res: Response) => {
  const { userId, title, content } = req.body;
  try {
    // Buscar el usuario por su ID
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    // Crear el post con la información proporcionada y el usuario encontrado
    const createdPost = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    console.log("create", createdPost)
    // Obtener todos los usuarios con sus posts y perfiles asociados
    const allPostsByUser = await prisma.post.findMany({
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
  } catch (error) {
    console.log(error);
    const errorMessage = (error as any).meta?.cause || "Error desconocido";
    res.status(200).send({
      resultado: 0,
      error: errorMessage,
    });
  }
};

export const editPost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const post = await prisma.post.update({
      where: { id: id },
      data: { published: true },
    })
    console.log("edit", post)
    res.status(200).send({
      resultado: 1,
      datos: post,
    })
  } catch (error) {
    console.log(error)
    const errorMessage = (error as any).meta?.cause || 'Error desconocido';
    res.status(200).send({
      resultado: 0,
      error: errorMessage
    })
  }
}

export const deletePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const post = await prisma.post.delete({
      where: { id: id }
    })
    console.log("delete", post)
    res.status(200).send({
      resultado: 1,
      datos: post,
    })
  } catch (error) {
    console.log(error)
    const errorMessage = (error as any).meta?.cause || 'Error desconocido';
    res.status(200).send({
      resultado: 0,
      error: errorMessage
    })
  }
}