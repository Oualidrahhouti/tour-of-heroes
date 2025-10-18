import { Component, Input } from '@angular/core';
import { HeroItemComponent } from '../hero-item/hero-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [HeroItemComponent, CommonModule],
  template: ` <div class="mt-5 flex flex-col gap-5 ">
    <hero-item
      *ngFor="let hero of heroes"
      [id]="hero.id"
      [hero]="hero.name"
    ></hero-item>
  </div>`,
  styles: ``,
})
export class HeroesListComponent {
  @Input()
  heroes: any[] = [];
}
