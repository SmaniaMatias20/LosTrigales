import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'inicio',
        // canActivate: [AuthGuard],
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },

    {
        path: 'productos',
        loadComponent: () => import('./pages/products/products').then(m => m.Products)
    },

    {
        path: 'nosotros',
        loadComponent: () => import('./pages/about/about').then(m => m.About)
    },

    {
        path: 'contacto',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
    },

];
