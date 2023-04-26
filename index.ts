import express, { Express, Request, Response } from "express"
import { PrismaClient } from '@prisma/client'
import dotenv from "dotenv"
dotenv.config()

const app: Express = express()
const router = express.Router()
const port = process.env.SERVER_PORT || 3000
//const env = process.env.ENVIRONMENT || "DEV"

app.use(express.json())

const prisma = new PrismaClient()

router.get("/read", async (req: Request, res: Response)=> {  
  const allUsers = await prisma.user.findMany()
  console.log("read user",allUsers)
  res.status(200).send({
    resultado: 1,
    datos: allUsers,
    })    
})

router.get("/edit", async (req: Request, res: Response)=> {  
  try {
    const post = await prisma.post.update({
      where: { id: 1 },
      data: { published: true },
    })
    console.log("edit post", post)
    res.status(200).send({
      resultado: 1,
      datos: post,
      })    
  } catch (error) {
    console.log(error)
    const errorMessage = (error as any).meta?.cause || 'Error desconocido';
    res.status(201).send({
      resultado: 0,
      error : errorMessage
      })    
  }
})

router.get("/delete", async (req: Request, res: Response)=> {  
  const post = await prisma.post.delete({
    where: { id: 1 }
  })
  console.log("delete post",post)
  res.status(200).send({
    resultado: 1,
    datos: post,
    })    
})

router.get("/create", async (req: Request, res: Response)=> {  
  await prisma.user.create({
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
  })
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.dir(allUsers, { depth: null })
  res.status(200).send({
    resultado: 1,
    datos: allUsers,
    })    
})

app.use("/api", router)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}!`)
})
