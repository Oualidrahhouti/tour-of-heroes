import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HeroesComponent } from './features/heroes/components/heroes/heroes.component';
import { HeroeComponent } from './features/heroes/components/heroe/heroe.component';

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
    path: 'heroe/:id',
    component: HeroeComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
