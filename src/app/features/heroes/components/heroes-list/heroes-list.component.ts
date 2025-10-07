import { Component } from '@angular/core';
import { HeroItemComponent } from '../hero-item/hero-item.component';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [HeroItemComponent],
  template: ` <div class="mt-5 flex flex-col gap-5 ">
    <hero-item></hero-item> <hero-item></hero-item><hero-item></hero-item>
  </div>`,
  styles: ``,
})
export class HeroesListComponent {}
