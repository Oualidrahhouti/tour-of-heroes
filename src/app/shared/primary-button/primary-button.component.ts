import { Component, Input } from '@angular/core';

@Component({
  selector: 'primary-button',
  standalone: true,
  imports: [],
  template: `
    <button
      class="p-2 bg-gray-700 hover:bg-black w-60  text-amber-50 text-lg cursor-pointer rounded"
    >
      {{ text }}
    </button>
  `,
  styles: '',
})
export class PrimaryButtonComponent {
  @Input()
  text: string = '';
}
