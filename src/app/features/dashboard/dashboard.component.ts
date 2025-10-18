import { Component, OnInit } from '@angular/core';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';
import { InputComponent } from '../../shared/input/input.component';
import { HeroesServiceTsService } from '../heroes/services/heroes.service.ts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PrimaryButtonComponent, InputComponent, CommonModule],
  template: `
    <div class="flex flex-col w-max mt-8">
      <h2 class="self-center text-2xl mb-8">Top Heroes</h2>
      <ul class="flex gap-2">
        <li *ngFor="let heroe of heroes">
          <primary-button [text]="heroe.name"></primary-button>
        </li>
      </ul>
      <app-input label="Hero Search"></app-input>
    </div>
  `,
  styles: ``,
})
export class DashboardComponent implements OnInit {
  heroes: any[] = [];

  constructor(private heroesSerive: HeroesServiceTsService) {}

  ngOnInit(): void {
    this.heroesSerive.getHeroes().subscribe({
      next: (heroes) => (this.heroes = heroes.slice(0, 4)),
    });
  }
}
