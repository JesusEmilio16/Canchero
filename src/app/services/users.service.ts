import { Injectable } from '@angular/core'
import type { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User | null = null

  login(user: User) {
    this.user = user
  }
}
