import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
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
  form = this.formBuilder.group({
    email: ['', Validators.required],
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

  formSubmit() {
    console.log(this.form.value)
  }
}
