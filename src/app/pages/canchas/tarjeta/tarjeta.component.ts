import { Component, Input, inject } from '@angular/core'
import Swal from 'sweetalert2'
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
    const selectedDate = new Date(this.datetime)

    if (selectedDate < new Date()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No puedes seleccionar una fecha pasada',
        theme: 'dark'
      })
      return
    }

    try {
      const response = await fetch('http://localhost:8000/reservation', {
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

      if (!response.ok) {
        throw new Error('Error al realizar la reserva')
      }

      Swal.fire({
        icon: 'success',
        title: `Reserva realizada: ${this.court.name}`,
        text: 'La reserva se ha realizado correctamente',
        theme: 'dark'
      })
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La cancha en el horario que escogiste ya fue apartada',
        theme: 'dark'
      })
    }
  }
}
