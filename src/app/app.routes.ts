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
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'canchas',
    loadComponent: () =>
      import('./pages/canchas/canchas.component').then(c=>c.CanchasComponent)
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.component').then(c => c.ProfileComponent)
  },
  {
    path: 'tarjeta-reservavation',
    loadComponent: ()=>
      import('./pages/canchas/tarjeta/tarjeta.component').then(c => c.TarjetaComponent)
  },
  {
    path:'calendar',
    loadComponent:()=>
      import('./pages/calendar/calendar.component').then(c=>c.CalendarComponent)
  },
  {
    path:'tarjeta-owner',
    loadComponent:()=>
      import('./pages/tarjeta-owner/tarjeta-owner.component').then(c=>c.TarjetaOwnerComponent)
  },
  {
    path:'reservas',
    loadComponent:()=>
      import('./pages/reservas/reservas.component').then(c=>c.ReservasComponent)
  }
]
