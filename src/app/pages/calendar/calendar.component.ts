import { Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import type { Reservation } from '../../interfaces/courts'
import { CourtService } from '../../services/court.service'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-calendar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  usersService = inject(UsersService)
  courtService = inject(CourtService)
  courts: Reservation[] = []

  constructor() {
    if (this.usersService.user?.id == null) {
      return
    }

    this.courtService
      .getReservationsUser(this.usersService.user?.id)
      .then(res => {
        this.courts = res
      })
  }
}