import type { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        c => c.RegisterComponent
      )
  }
]
