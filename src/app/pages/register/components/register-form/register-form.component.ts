import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import { EyeVisibleComponent } from '../../../../components/eye-visible/eye-visible.component'

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, EyeVisibleComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  inputsVisibles = [false, false]
  formBuilder = inject(FormBuilder)
  router = inject(Router)
  form = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  })

  togglePasswordVisibility(index: number) {
    this.inputsVisibles[index] = !this.inputsVisibles[index]
  }
  actVisibles = [
    () => this.togglePasswordVisibility(0),
    () => this.togglePasswordVisibility(1)
  ]

  async formSubmit() {
    try {
      const { email, password, confirmPassword, name, lastName } =
        this.form.value

      if (this.form.get('email')?.invalid) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El correo electrónico no es válido',
          theme: 'dark'
        })

        return
      }

      if (this.form.invalid) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Todos los campos son obligatorios',
          theme: 'dark'
        })

        return
      }

      if (password !== confirmPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Las contraseñas no coinciden',
          theme: 'dark'
        })

        return
      }

      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name, lastName, type: 'u' })
      })

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido!',
          text: 'Has iniciado sesión correctamente',
          theme: 'dark'
        })

        this.router.navigate(['/login'])
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
