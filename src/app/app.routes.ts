import type { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        c => c.RegisterComponent
      )
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/main-page/main-page.component').then(
        c => c.MainPageComponent
      )
  },
  {
    path: 'header',
    loadComponent: () =>
      import('./components/header/header.component').then(
        c => c.HeaderComponent
      )
  }
]
