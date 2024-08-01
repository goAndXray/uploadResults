import express from 'express'
import { index, store, remove } from './controllers/uploadController.js'
import { validateId } from './middleware/chatMiddleware.js'

const routes = express.Router()

routes.get('/chats', index)

routes.post('/chat', store)

routes.delete('/chats/:id', validateId, remove)

export default routes