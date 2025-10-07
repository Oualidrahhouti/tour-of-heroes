import { Component } from '@angular/core';
import { InputComponent } from '../../../../shared/input/input.component';
import { PrimaryButtonComponent } from '../../../../shared/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../../../shared/secondary-button/secondary-button.component';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [InputComponent, SecondaryButtonComponent, HeroesListComponent],
  template: `
    <h2 class="text-2xl mt-5">My Heroes</h2>
    <app-input id="heroName" label="Hero Name"></app-input>
    <secondary-button text="Add hero"></secondary-button>
    <app-heroes-list></app-heroes-list>
  `,
  styles: ``,
})
export class HeroesComponent {}
