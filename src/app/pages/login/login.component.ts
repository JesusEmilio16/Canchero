import { Component } from '@angular/core'
import { LoginFormComponent } from './login-form/login-form.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {}
