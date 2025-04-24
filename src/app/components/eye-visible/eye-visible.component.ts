import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-eye-visible',
  imports: [],
  templateUrl: './eye-visible.component.html',
  styleUrl: './eye-visible.component.css'
})
export class EyeVisibleComponent {
  @Input() fn!: () => void
  isPasswordVisible = false

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible
    this.fn()
  }
}
