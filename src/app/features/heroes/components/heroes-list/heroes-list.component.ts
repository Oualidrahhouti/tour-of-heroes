import { Component, Input } from '@angular/core';
import { HeroItemComponent } from '../hero-item/hero-item.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [HeroItemComponent, CommonModule, RouterLink],
  template: ` <div class="mt-5 flex flex-col gap-5 ">
    <a [routerLink]="['/heroe', hero.id]" *ngFor="let hero of heroes">
      <hero-item [id]="hero.id" [hero]="hero.name"></hero-item>
    </a>
  </div>`,
  styles: ``,
})
export class HeroesListComponent {
  @Input()
  heroes: any[] = [];
}
