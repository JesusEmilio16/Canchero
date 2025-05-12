import { Injectable } from '@angular/core'
import type { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User | null = {
    id: 'a',
    email: 'XXXXXXX',
    name: 'aa',
    lastName: 'ab',
    password: 'ac',
    type: 'a',
    image: ''
  }

  login(user: User) {
    this.user = user
  }
}
