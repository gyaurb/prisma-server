import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'
import postRoutes from './routes/postRoutes'
import authRoute from './routes/authRoute'
import authMiddleware from './middlewares/authMiddleware'
import { PrismaClient } from '@prisma/client'
import { ObjectType, Field, Resolver , Query, buildSchemaSync, Arg,InputType } from 'type-graphql'
import { graphqlHTTP } from 'express-graphql'
import "reflect-metadata"

dotenv.config()

const port = process.env.SERVER_PORT || 3000

const prisma = new PrismaClient()

@ObjectType()
export class User {
  @Field()
  username!: string
  @Field((type) => String, { nullable: true })
  password?: string
  @Field()
  provider!: string
  @Field()
  status!: string
  @Field()
  createdAt!: Date
}

@InputType()
export class UserWhereInput {
  @Field({ nullable: true })
  username?: string;
}

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

  @Query(() => [User],  { nullable: true })
  async userWhere(
    @Arg("where", { nullable: true }) where?: UserWhereInput,
    ): Promise<User[]> {
      console.log("where", where)
    const users = await prisma.user.findMany({
      where: where
    });
    console.log("users", users)
    return users
  }
}

const schema = buildSchemaSync({
    resolvers : [UserResolver]
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