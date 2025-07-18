import { HttpClient } from '@angular/common/http'
import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink, RouterLinkActive } from '@angular/router'
import Swal from 'sweetalert2'
import type { User } from '../../interfaces/user'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  usersService = inject(UsersService)
  formBuilder = inject(FormBuilder)
  httpClient = inject(HttpClient)

  form = this.formBuilder.group({
    name: [this.usersService.user?.name, Validators.required],
    lastName: [this.usersService.user?.lastName, Validators.required],
    email: [this.usersService.user?.email, Validators.required],
    image: [this.usersService.user?.image, Validators.required]
  })

  async handleSubmit(event: SubmitEvent) {
    event.preventDefault()

    const confirm = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres guardar los cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'Cancelar',
      theme: 'dark'
    })

    if (!confirm.isConfirmed) {
      return
    }

    this.httpClient
      .put<User>('http://localhost:8000/user', {
        ...this.form.value,
        id: this.usersService.user?.id,
        password: this.usersService.user?.password,
        type: this.usersService.user?.type
      })
      .subscribe({
        next: data => {
          this.usersService.login(data)
          Swal.fire({
            icon: 'success',
            title: 'Bienvenido!',
            text: 'Has guardado los cambios correctamente',
            theme: 'dark'
          })

          window.localStorage.setItem('user', JSON.stringify(data))
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal!',
            theme: 'dark'
          })
        }
      })
  }
}
