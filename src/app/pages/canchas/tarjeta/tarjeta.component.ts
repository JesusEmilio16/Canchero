import { Component, Input, inject } from '@angular/core'
import type { Court } from '../../../interfaces/courts'
import { UsersService } from '../../../services/users.service'

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  userService = inject(UsersService)
  @Input() court!: Court
  @Input() datetime!: string

  async reservation() {
    await fetch('http://localhost:8000/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: this.userService.user?.id,
        ownerId: this.court.owner_id,
        courtId: this.court.id,
        reservationDatetime: this.datetime,
        status: 'confirmed'
      })
    })

    alert('Reserva realizada')
  }
}
