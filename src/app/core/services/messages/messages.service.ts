import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: string[] = [];

  constructor() {}

  public addMessage(message: string) {
    this.messages.push(message);
    console.log(this.messages);
  }

  public clearMessages() {
    this.messages = [];
  }

  public areClear() {
    return this.messages.length == 0;
  }
}
