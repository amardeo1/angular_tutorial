import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: string[] = [];

  // this is a simple function definition
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  getMessages() {
    return this.messages;
  }
}