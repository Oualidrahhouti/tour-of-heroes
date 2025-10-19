import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroesServiceTsService } from '../../services/heroes.service.ts.service';

@Component({
  selector: 'hero-item',
  standalone: true,
  imports: [],
  template: `<div class="w-80 rounded flex cursor-pointer hover:translate-x-2">
    <div class="p-2 bg-gray-800 text-white w-[12%] rounded-l flex items-center">
      {{ id }}
    </div>
    <div
      class="bg-gray-300 w-[80%] rounded-r flex justify-between items-center"
    >
      <div class="ml-2">{{ hero }}</div>
      <button
        (click)="removeHeroe($event)"
        class="bg-white hover:bg-gray-700 hover:text-white p-2 m-2 rounded cursor-pointer"
      >
        X
      </button>
    </div>
  </div>`,
  styles: ``,
})
export class HeroItemComponent {
  constructor(private heroesService: HeroesServiceTsService) {}

  @Input()
  id: Number = 0;

  @Input()
  hero: string = 'hero test';

  @Output()
  heroeRemoved: EventEmitter<Number> = new EventEmitter();

  removeHeroe(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.heroesService.removeHeroe(this.id).subscribe({
      next: () => this.heroeRemoved.emit(this.id),
    });
  }
}
