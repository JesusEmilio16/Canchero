import type { Request, Response } from 'express'
import { UserModel } from '../models/users.model'

export async function updateUser(req: Request, res: Response) {
  const { id, email, name, lastName, type } = req.body
  const userModel = new UserModel()
  try {
    const result = await userModel.updateUser(id, email, name, lastName, type)
    if (result.rowCount === 0) {
      res.status(404).json({ success: false, message: 'Usuario no encontrado' })
      return
    }
    res.status(200).json(result)
  } catch {
    res
      .status(500)
      .json({ success: false, message: 'Error interno del servidor' })
  }
}
