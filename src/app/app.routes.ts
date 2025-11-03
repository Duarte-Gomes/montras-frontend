import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { MontraComponent } from './montra-component/montra-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'montra/:id',
    component: MontraComponent,
  }
];
