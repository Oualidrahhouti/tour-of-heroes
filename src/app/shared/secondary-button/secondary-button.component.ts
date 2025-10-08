import { Component, Input } from '@angular/core';

@Component({
  selector: 'secondary-button',
  standalone: true,
  imports: [],
  template: `
    <button
      class="mt-5 p-2 hover:bg-gray-700 bg-gray-300 w-60 hover:text-white text-lg cursor-pointer rounded-md"
    >
      {{ text }}
    </button>
  `,
  styles: '',
})
export class SecondaryButtonComponent {
  @Input()
  text: string = 'test';
}
