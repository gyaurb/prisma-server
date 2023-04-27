import express from 'express'
import { readPost, addPost, editPost, deletePost } from '../controllers/postController'

const router = express.Router()

router.get('/read', readPost)
router.post('/add', addPost)
router.put('/edit/:id', editPost)
router.delete('/delete/:id', deletePost)

export default router