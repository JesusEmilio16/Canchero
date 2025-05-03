import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import { EyeVisibleComponent } from '../../../components/eye-visible/eye-visible.component'

@Component({
  selector: 'app-login-form',
  imports: [EyeVisibleComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  inputsVisibles = false
  router = inject(Router)
  formBuilder = inject(FormBuilder)
  form = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  togglePasswordVisibility() {
    this.inputsVisibles = !this.inputsVisibles
  }
  actVisibles = () => this.togglePasswordVisibility()

  async formSubmit() {
    try {
      const { email, password } = this.form.value

      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido!',
          text: 'Has iniciado sesión correctamente',
          theme: 'dark'
        })

        this.router.navigate(['/'])
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal!',
          theme: 'dark'
        })
      }
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal!',
        theme: 'dark'
      })
    }
  }
}
