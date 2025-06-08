import { Component, inject } from '@angular/core'
import { HeaderComponent } from '../../components/header/header.component'
import type { Court } from '../../interfaces/courts'
import { CourtService } from '../../services/court.service'
import { TarjetaComponent } from './tarjeta/tarjeta.component'

@Component({
  selector: 'app-canchas',
  imports: [HeaderComponent, TarjetaComponent],
  templateUrl: './canchas.component.html',
  styleUrl: './canchas.component.css'
})
export class CanchasComponent {
  courtService = inject(CourtService)
  courts: Court[] = []
  time = ''
  selectedDate = ''

  constructor() {
    this.courtService.getCourts().then(courts => {
      this.courts = courts
    })
  }

  async getDatetime(event: Event) {
    const target = event.target as HTMLInputElement
    const date = target.value

    if (!date) {
      this.courts = await this.courtService.getCourts()
      return
    }

    this.selectedDate = date
    const time = date.split('T')[1]
    this.time = `${time}:00`
    this.courts = await this.courtService.getCourtsFilter(this.time)
  }
}
