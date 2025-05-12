import { Component } from '@angular/core';
import { LoginFormComponent } from "./login-form/login-form.component";
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
