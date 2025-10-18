import { Component, OnInit } from '@angular/core';
import { SecondaryButtonComponent } from '../../shared/secondary-button/secondary-button.component';
import { MessagesService } from '../../core/services/messages/messages.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [SecondaryButtonComponent, CommonModule],
  template: `
    <ng-container *ngIf="!messagesService.areClear()">
      <div class="mt-5">
        <h2 class="text-orange-700 text-2xl">Messages</h2>
        <secondary-button
          (click)="clearMessages()"
          text="Clear messages"
        ></secondary-button>
        <div class="mt-5">
          <p *ngFor="let message of this.messagesService.messages">
            {{ message }}
          </p>
        </div>
      </div>
    </ng-container>
  `,
  styles: ``,
})
export class MessagesComponent {
  constructor(public messagesService: MessagesService) {}

  public clearMessages() {
    this.messagesService.clearMessages();
  }
}
