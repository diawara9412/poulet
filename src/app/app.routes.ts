import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'bienvenue',
    loadComponent: () => import('./bienvenue/bienvenue.page').then( m => m.BienvenuePage)
  },
  {
    path: 'inscription',
    loadComponent: () => import('./inscription/inscription.page').then( m => m.InscriptionPage)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./detail/detail.page').then( m => m.DetailPage)
  },
  {
    path: 'updatepro',
    loadComponent: () => import('./updatepro/updatepro.page').then( m => m.UpdateproPage)
  },  {
    path: 'upload',
    loadComponent: () => import('./upload/upload.page').then( m => m.UploadPage)
  },

];
