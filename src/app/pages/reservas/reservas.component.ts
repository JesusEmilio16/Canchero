import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';
import { TarjetaOwnerComponent } from '../tarjeta-owner/tarjeta-owner.component';
@Component({
  selector: 'app-reservas',
  imports: [HeaderComponent,RouterLink,CalendarComponent,TarjetaOwnerComponent],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {

}
