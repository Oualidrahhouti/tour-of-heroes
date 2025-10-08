import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../shared/secondary-button/secondary-button.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [SecondaryButtonComponent],
  template: `
    <div class="mt-5">
      <h2 class="text-orange-700 text-2xl">Messages</h2>
      <secondary-button text="Clear messages"></secondary-button>
    </div>
  `,
  styles: ``,
})
export class MessagesComponent {}
