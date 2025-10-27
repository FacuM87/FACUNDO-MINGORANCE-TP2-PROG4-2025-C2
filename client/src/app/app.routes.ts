import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';


export const routes: Routes = [
  { path: '', redirectTo: 'publicaciones', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./features/auth/login/login').then(m => m.Login) },
  { path: 'register', loadComponent: () => import('./features/auth/register/register').then(m => m.Register) },
  { path: 'publicaciones', loadComponent: () => import('./features/posts/publications').then(m => m.Publications), canActivate: [authGuard] },
  { path: 'perfil', loadComponent: () => import('./features/profile/profile').then(m => m.Profile), canActivate: [authGuard] },
  { path: '**', redirectTo: 'publicaciones' },
];
