import { Component, Input } from '@angular/core';

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
        class="bg-white hover:bg-gray-700 hover:text-white p-2 m-2 rounded cursor-pointer"
      >
        X
      </button>
    </div>
  </div>`,
  styles: ``,
})
export class HeroItemComponent {
  @Input()
  id: Number = 0;

  @Input()
  hero: string = 'hero test';
}
