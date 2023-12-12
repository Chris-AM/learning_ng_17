import { Routes } from '@angular/router';
import { HomeComponent } from '../presentation/home/home.component';

export const routes: Routes = [
  {
    path: 'home-list',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home-list',
    pathMatch: 'full',
  },
];
