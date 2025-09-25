import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PrimaryButtonComponent, InputComponent],
  template: `
    <div class="flex flex-col w-max mt-8">
      <h2 class="self-center text-2xl mb-8">Top Heroes</h2>
      <ul class="flex gap-2">
        <li><primary-button></primary-button></li>
        <li><primary-button></primary-button></li>
        <li><primary-button></primary-button></li>
        <li><primary-button></primary-button></li>
      </ul>
      <app-input label="Hero Search"></app-input>
    </div>
  `,
  styles: ``,
})
export class DashboardComponent {}
