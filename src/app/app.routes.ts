import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { MontraComponent } from './montra-component/montra-component';
import { UtilizadoresComponent } from './utilizadores-component/utilizadores-component';
import { MontrasComponent } from './montras-component/montras-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'montras',
    component: MontrasComponent,
  },
  {
    path: 'utilizadores',
    component: UtilizadoresComponent,
  }
];
