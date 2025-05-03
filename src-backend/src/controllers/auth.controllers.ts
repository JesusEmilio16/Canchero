import type { Request, Response } from 'express'
import { UserModel } from '../models/users.model'

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const userModel = new UserModel()

  try {
    const user = await userModel.findByEmail(email)
    if (!user) {
      res.status(404).json({ success: false, message: 'Usuario no encontrado' })
      return
    }

    if (password !== user.user_password) {
      res.status(401).json({ success: false, message: 'Contraseña incorrecta' })
      return
    }

    res.status(200).json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        lastName: user.last_name,
        type: user.type
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    res
      .status(500)
      .json({ success: false, message: 'Error interno del servidor' })
  }
}

export const register = async (req: Request, res: Response) => {
  const { email, name, password, lastName, type } = req.body
  const userModel = new UserModel()

  try {
    const newUser = await userModel.createUser(
      email,
      name,
      password,
      lastName,
      type
    )
    if (!newUser) {
      res
        .status(404)
        .json({ success: false, message: 'No se ha podido crear el usuario' })
      return
    }

    res.status(200).json({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username
      }
    })
  } catch (error) {
    console.error('Register error:', error)
    res
      .status(500)
      .json({ success: false, message: 'Error interno del servidor' })
  }
}
