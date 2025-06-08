import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CourtService {
  async getCourtsFilter(time: string) {
    const courts = await fetch(
      `http://localhost:8000/court?&time=${time}`
    ).then(res => res.json())

    return courts
  }

  async getCourts() {
    const courts = await fetch('http://localhost:8000/courts').then(res =>
      res.json()
    )
    return courts
  }

  async getReservationsUser(id: string) {
    const courts = await fetch(`http://localhost:8000/courts-user/${id}`).then(
      res => res.json()
    )
    return courts
  }

  async getReservationsOwner(id: string) {
    const courts = await fetch(
      `http://localhost:8000/reservation-owner/${id}`
    ).then(res => res.json())

    return courts
  }
}
