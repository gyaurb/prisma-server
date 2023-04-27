import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'
import postRoutes from './routes/postRoutes'
import authRoute from './routes/authRoute'
import authMiddleware from './middlewares/authMiddleware'

dotenv.config()

const app = express()
const port = process.env.SERVER_PORT || 3000

app.use(express.json())
app.use('/user', userRoutes)
app.use('/login', authRoute)
app.use('/post', authMiddleware, postRoutes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}!`)
})