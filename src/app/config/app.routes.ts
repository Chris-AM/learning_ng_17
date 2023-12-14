import { Routes } from '@angular/router';
import { HomeComponent } from '../presentation/home/home.component';
import { HomeDetailsComponent } from '../presentation/home/home-details/home-details.component';

export const routes: Routes = [
  {
    path: 'home-list',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: HomeDetailsComponent,
  },
  {
    path: '',
    redirectTo: '/home-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home-list',
    pathMatch: 'full',
  },
];
