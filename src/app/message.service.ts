import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  // this is a simple function definition
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}