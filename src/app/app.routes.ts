import { Routes, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ClientAuthService } from './core/services/client-auth.service';

const clientAuthGuard = () => {
  const auth = inject(ClientAuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) return true;
  router.navigate(['/entrar']);
  return false;
};

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/spark.component').then(m => m.SparkComponent)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.component').then(m => m.CadastroComponent)
  },
  {
    path: 'entrar',
    loadComponent: () => import('./entrar/entrar.component').then(m => m.EntrarComponent)
  },
  {
    path: 'app',
    loadComponent: () => import('./app-dashboard/client-app.component').then(m => m.ClientAppComponent),
    canActivate: [clientAuthGuard]
  },
  {
    path: 'portal/:token',
    loadComponent: () => import('./portal/client-portal.component').then(m => m.ClientPortalComponent)
  },
  // Niche pages LAST — otherwise /cadastro, /entrar, etc. would match :niche.
  {
    path: ':niche',
    loadComponent: () => import('./landing/spark-niche.component').then(m => m.SparkNicheComponent)
  }
];
