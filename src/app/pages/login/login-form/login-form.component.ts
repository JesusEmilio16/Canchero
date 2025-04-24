import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { EyeVisibleComponent } from '../../../components/eye-visible/eye-visible.component'

@Component({
  selector: 'app-login-form',
  imports: [EyeVisibleComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  inputsVisibles = false
  formBuilder = inject(FormBuilder)
  form = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  togglePasswordVisibility() {
    this.inputsVisibles = !this.inputsVisibles
  }
  actVisibles = () => this.togglePasswordVisibility()

  formSubmit() {
    console.log(this.form.value)
  }
}
