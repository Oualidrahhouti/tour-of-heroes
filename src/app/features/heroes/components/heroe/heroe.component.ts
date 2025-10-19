import { Component, OnInit } from '@angular/core';
import { HeroesServiceTsService } from '../../services/heroes.service.ts.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../../shared/input/input.component';
import { SecondaryButtonComponent } from '../../../../shared/secondary-button/secondary-button.component';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [CommonModule, InputComponent, SecondaryButtonComponent, RouterLink],
  template: `<div class="mt-5">
    <h2 class="text-xl">{{ heroe.name | uppercase }} Details</h2>
    <p>id: {{ heroeId }}</p>
    <app-input label="Hero name" [value]="heroe.name"></app-input>
    <div class="flex gap-4">
      <secondary-button
        routerLink="dashboard"
        text="go back"
      ></secondary-button>
      <secondary-button text="save"></secondary-button>
    </div>
  </div> `,
  styles: ``,
})
export class HeroeComponent implements OnInit {
  heroe: any;
  heroeId: number = 1;

  constructor(
    private heroesService: HeroesServiceTsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.heroeId = params['id'];
        console.log(this.heroeId);

        this.heroesService.getHeroe(this.heroeId).subscribe({
          next: (heroe) => (this.heroe = heroe),
        });
        console.log(this.heroeId);
      },
    });
  }
}
