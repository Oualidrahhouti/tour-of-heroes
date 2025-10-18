import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../../../../shared/input/input.component';
import { SecondaryButtonComponent } from '../../../../shared/secondary-button/secondary-button.component';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { HeroesServiceTsService } from '../../services/heroes.service.ts.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [InputComponent, SecondaryButtonComponent, HeroesListComponent],
  template: `
    <h2 class="text-2xl mt-5">My Heroes</h2>
    <app-input id="heroName" label="Hero Name"></app-input>
    <secondary-button text="Add hero"></secondary-button>
    <app-heroes-list [heroes]="heroes"></app-heroes-list>
  `,
  styles: ``,
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  constructor(private heroesService: HeroesServiceTsService) {}
  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe({
      next: (data) => (this.heroes = data),
    });
  }
}
