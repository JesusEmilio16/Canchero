import { Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import type { Reservation } from '../../interfaces/courts'
import { CourtService } from '../../services/court.service'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-tarjeta-owner',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tarjeta-owner.component.html',
  styleUrl: './tarjeta-owner.component.css'
})
export class TarjetaOwnerComponent {
  usersService = inject(UsersService)
  courtService = inject(CourtService)
  courts: Reservation[] = []

  constructor() {
    if (this.usersService.user?.id == null) {
      return
    }

    this.courtService
      .getReservationsOwner(this.usersService.user.id)
      .then(courts => {
        this.courts = courts
      })
  }
}
