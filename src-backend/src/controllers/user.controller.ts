import type { Request, Response } from 'express'
import { UserModel } from '../models/users.model'

export async function updateUser(req: Request, res: Response) {
  const { id, email, name, lastName, type } = req.body
  const userModel = new UserModel()
  try {
    const user = await userModel.updateUser(id, email, name, lastName, type)
    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.last_name,
      type: user.type,
      password: user.user_password
    })
  } catch {
    res
      .status(500)
      .json({ success: false, message: 'Error interno del servidor' })
  }
}
