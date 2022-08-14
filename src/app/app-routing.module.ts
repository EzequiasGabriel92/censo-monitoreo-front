import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren : () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'user',
    loadChildren : () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'dashboard',
    loadChildren : () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'publication',
    loadChildren : () => import('./modules/publications/publications.module').then(m => m.PublicationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
