import type { IDatabase } from 'pg-promise'
import { PgConnection } from '../services/pgConnection.services'

export class CourtModel {
  private db: IDatabase<unknown>
  constructor() {
    this.db = PgConnection.getInstance().connection
  }

  async getCourtsFilter(time: string) {
    return await this.db.query(
      `SELECT * FROM padel.court
       INNER JOIN padel.schedule 
       ON padel.court.id = padel.schedule.court_id
       WHERE time_start = $1
       `,
      [time]
    )
  }

  async getCourts() {
    return await this.db.query('SELECT * FROM padel.court')
  }

  async createReservation(
    userId: string,
    ownerId: string,
    courtId: string,
    reservationDatetime: Date,
    status: string
  ) {
    return await this.db.query(
      `INSERT INTO padel.reservation (user_id, owner_id, court_id, reservation_datetime, status)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [userId, ownerId, courtId, reservationDatetime, status]
    )
  }

  async getReservationByUserId(userId: string) {
    return await this.db.query(
      `SELECT *, padel.court.name as name, padel.user.name as "uName", padel.user.last_name as "last_name"
      FROM padel.reservation
      INNER JOIN padel.court
      ON padel.reservation.court_id = padel.court.id
      INNER JOIN padel.user
      ON padel.reservation.owner_id = padel.user.id
      WHERE padel.reservation.user_id = $1
      `,
      [userId]
    )
  }

  async getReservationByOwnerId(ownerId: string) {
    return await this.db.query(
      `SELECT *, padel.user.name as "uName", padel.court.name as name
      FROM padel.reservation
      INNER JOIN padel.court
      ON padel.reservation.court_id = padel.court.id
      INNER JOIN padel.user
      ON padel.reservation.user_id = padel.user.id
      WHERE padel.reservation.owner_id = $1
      `,
      [ownerId]
    )
  }
}
