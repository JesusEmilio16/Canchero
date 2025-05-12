import { Router } from 'express'
import { authRouter } from './auth.routes'
import { updateUser } from '../controllers/user.controller'

export const indexRouter = Router()
indexRouter.use('/auth', authRouter)
indexRouter.put('/user', updateUser)
indexRouter.all('*', (_req, res) => {
  res.json({ message: 'Error' })
})
