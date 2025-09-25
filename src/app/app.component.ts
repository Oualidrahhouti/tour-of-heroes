import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButtonComponent } from './shared/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './shared/secondary-button/secondary-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimaryButtonComponent, SecondaryButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tour of heroes';
}
