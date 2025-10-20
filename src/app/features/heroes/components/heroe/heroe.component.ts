import { Component, OnInit } from '@angular/core';
import { HeroesServiceTsService } from '../../services/heroes.service.ts.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../../shared/input/input.component';
import { SecondaryButtonComponent } from '../../../../shared/secondary-button/secondary-button.component';
import { FormsModule } from '@angular/forms';
import { heroe } from '../../models/heroes.model';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    SecondaryButtonComponent,
    RouterLink,
    FormsModule,
  ],
  template: `<div class="mt-5">
    <ng-container *ngIf="heroe"
      ><h2 class="text-xl">{{ heroe.name | uppercase }} Details</h2>
      <p>id: {{ heroeId }}</p>
      <app-input
        label="Hero name"
        [value]="heroe.name"
        (valueChanged)="onHeroNameChange($event)"
      ></app-input>
      <div class="flex gap-4">
        <secondary-button
          routerLink="dashboard"
          text="go back"
        ></secondary-button>
        <secondary-button
          (click)="editHeroe()"
          text="save"
        ></secondary-button></div
    ></ng-container>
    <ng-container *ngIf="!heroe">Loading...</ng-container>
  </div> `,
  styles: ``,
})
export class HeroeComponent implements OnInit {
  heroe!: heroe;
  heroeId: number = 1;

  constructor(
    private heroesService: HeroesServiceTsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.heroeId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('id')!,
      10
    );

    this.heroesService.getHeroe(this.heroeId).subscribe({
      next: (heroe) => (this.heroe = heroe),
    });
  }

  onHeroNameChange(newValue: string) {
    this.heroe.name = newValue;
  }

  editHeroe() {
    if (this.heroe.name !== '')
      this.heroesService.editHeroe(this.heroe).subscribe();
  }
}
