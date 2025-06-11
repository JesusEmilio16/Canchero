import { Injectable } from '@angular/core'
import type { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User | null = null

  constructor(){
    const user = window.localStorage.getItem('user')
    if (user) {
      this.user = JSON.parse(user)
    }

  }

  login(user: User) {
    this.user = user
  }

  logout() {
    this.user = null
    window.localStorage.removeItem('user')
  }
}
