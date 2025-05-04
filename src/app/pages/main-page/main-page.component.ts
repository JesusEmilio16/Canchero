import { Component, inject } from '@angular/core'
import { HeaderComponent } from '../../components/header/header.component'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  usersService = inject(UsersService)
}
