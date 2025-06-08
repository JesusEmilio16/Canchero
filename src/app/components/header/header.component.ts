import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { UsersService } from '../../services/users.service'
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userService = inject(UsersService)
}
