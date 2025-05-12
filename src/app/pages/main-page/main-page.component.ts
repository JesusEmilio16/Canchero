import { Component, inject } from '@angular/core'
import { HeaderComponent } from '../../components/header/header.component'
import { UsersService } from '../../services/users.service'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  usersService = inject(UsersService)
}
