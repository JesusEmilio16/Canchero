import { Router } from 'express'
import {
  createReservation,
  getCourts,
  getCourtsFilter,
  getReservationByOwnerId,
  getReservationByUserId
} from '../controllers/court.controller'
import { updateUser } from '../controllers/user.controller'
import { authRouter } from './auth.routes'

export const indexRouter = Router()
indexRouter.use('/auth', authRouter)
indexRouter.put('/user', updateUser)
indexRouter.get('/court', getCourtsFilter)
indexRouter.get('/courts', getCourts)
indexRouter.post('/reservation', createReservation)
indexRouter.get('/courts-user/:userId', getReservationByUserId)
indexRouter.get('/reservation-owner/:ownerId', getReservationByOwnerId)
indexRouter.all('*', (_req, res) => {
  res.json({ message: 'Error' })
})
