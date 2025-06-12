import type { Request, Response } from 'express'
import { CourtModel } from '../models/court.model'

export async function getCourtsFilter(req: Request, res: Response) {
  const { time } = req.query as { time: string }
  const courtModel = new CourtModel()
  try {
    const result = await courtModel.getCourtsFilter(time)
    if (result.rowCount === 0) {
      res.status(404).json({ success: false, message: 'Cancha no encontrada' })
      return
    }
    res.status(200).json(result)
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: 'Error interno del servidor', e })
  }
}

export async function getCourts(_req: Request, res: Response) {
  const courtModel = new CourtModel()
  try {
    const result = await courtModel.getCourts()
    res.status(200).json(result)
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: 'Error interno del servidor', e })
  }
}

export async function createReservation(req: Request, res: Response) {
  const { userId, ownerId, courtId, reservationDatetime, status } = req.body
  const courtModel = new CourtModel()
  try {
    const result = await courtModel.createReservation(
      userId,
      ownerId,
      courtId,
      reservationDatetime,
      status
    )
    res.status(200).json(result)
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: 'Error interno del servidor', e })
  }
}

export async function getReservationByUserId(req: Request, res: Response) {
  const { userId } = req.params
  const courtModel = new CourtModel()
  try {
    const result = (await courtModel.getReservationByUserId(userId)) as {
      reservation_datetime: string
    }[]

    res.status(200).json(
      result.map(reservation => ({
        ...reservation,
        reservation_datetime: new Date(
          reservation.reservation_datetime
        ).toLocaleString('es-CO', {
          timeZone: 'America/Bogota'
        })
      }))
    )
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: 'Error interno del servidor', e })
  }
}

export async function getReservationByOwnerId(req: Request, res: Response) {
  const { ownerId } = req.params
  const courtModel = new CourtModel()
  try {
    const result = (await courtModel.getReservationByOwnerId(ownerId)) as {
      reservation_datetime: string
    }[]

    res.status(200).json(
      result.map(reservation => ({
        ...reservation,
        reservation_datetime: new Date(
          reservation.reservation_datetime
        ).toLocaleString('es-CO', {
          timeZone: 'America/Bogota'
        })
      }))
    )
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: 'Error interno del servidor', e })
  }
}
