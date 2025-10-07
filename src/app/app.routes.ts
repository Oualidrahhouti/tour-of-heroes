import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HeroesComponent } from './features/heroes/components/heroes/heroes.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
