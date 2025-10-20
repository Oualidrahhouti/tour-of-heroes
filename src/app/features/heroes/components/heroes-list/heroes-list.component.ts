import { Component, Input } from '@angular/core';
import { HeroItemComponent } from '../hero-item/hero-item.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { heroes } from '../../models/heroes.types';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [HeroItemComponent, CommonModule, RouterLink],
  template: ` <div class="mt-5 flex flex-col gap-5 ">
    <a [routerLink]="['/heroe', hero.id]" *ngFor="let hero of heroes">
      <hero-item
        (heroeRemoved)="removeHeroe($event)"
        [id]="hero.id"
        [hero]="hero.name"
      ></hero-item>
    </a>
  </div>`,
  styles: ``,
})
export class HeroesListComponent {
  @Input()
  heroes: heroes = [];

  removeHeroe(id: Number) {
    this.heroes = this.heroes.filter((heroe) => heroe.id !== id);
  }
}
