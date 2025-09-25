import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondaryButtonComponent } from './shared/secondary-button/secondary-button.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondaryButtonComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tour of heroes';
}
