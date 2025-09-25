import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  template: ` <div class="mt-6">
    <label [for]="inputId" class="text-xl">{{ label }}</label
    ><br />
    <input
      [id]="inputId"
      type="text"
      size="42"
      class="mt-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
    />
  </div>`,
  styles: ``,
})
export class InputComponent {
  private static nextId = 1;

  @Input()
  id?: string;

  @Input()
  label: string = '';

  get inputId(): string {
    return this.id || `app-input-${InputComponent.nextId++}`;
  }
}
