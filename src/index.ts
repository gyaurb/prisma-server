import "reflect-metadata"
import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'
import postRoutes from './routes/postRoutes'
import authRoute from './routes/authRoute'
import authMiddleware from './middlewares/authMiddleware'
import { PrismaClient } from '@prisma/client'
import { ObjectType, Field, Resolver , Query, buildSchemaSync, Arg } from 'type-graphql'
import { graphqlHTTP } from 'express-graphql'
import { Post, User, resolvers } from "../prisma/type-graphql"

dotenv.config()

const port = process.env.SERVER_PORT || 3000

const prisma = new PrismaClient()


@Resolver(User)
export class UserResolver {

  @Query(() => [User],  { nullable: true })
  async allUser():Promise<User[]>{
    return prisma.user.findMany()
  }

  @Query(() => [User],  { nullable: true })
  async user(
    @Arg("username", { nullable: false }) username?: string,
    @Arg("status", { nullable: true }) status?: string,
    ): Promise<User[]> {
    const users = await prisma.user.findMany({
      where: {
        username : {
          contains : username
        },
        status : status
      },
      
    });
    console.log("users", users)
    return users
  }
}

@Resolver(Post)
export class PostResolver {
  @Query(() => Post,  { nullable: true })
  async post (
    @Arg("authorId", { nullable: false }) authorId?: number,
  ){
    const post = await prisma.post.findFirst({
      where : {
        authorId : authorId
      },
      include : {
        author : true
      }
    })
    console.log("post", post)
    return post
  }
}

const schema = buildSchemaSync({
    resolvers : [UserResolver, PostResolver]
})

const app = express()

app.use(express.json())
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))
//app.use('/user', userRoutes)
//app.use('/login', authRoute)
//app.use('/post', authMiddleware, postRoutes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}!`)
})