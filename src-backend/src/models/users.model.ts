import type { IDatabase } from 'pg-promise'
import { PgConnection } from '../services/pgConnection.services'

export class UserModel {
  private db: IDatabase<unknown>

  constructor() {
    this.db = PgConnection.getInstance().connection
  }

  async findByEmail(email: string) {
    return await this.db.oneOrNone(
      'SELECT * FROM padel.user WHERE email = $1',
      [email]
    )
  }

  async createUser(
    email: string,
    name: string,
    password: string,
    lastName: string,
    type: string
  ) {
    return await this.db.one(
      `INSERT INTO padel.user (email, name, user_password, last_name, type)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, email`,
      [email, name, password, lastName, type]
    )
  }
}
