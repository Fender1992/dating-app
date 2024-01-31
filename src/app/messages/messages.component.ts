import { Component } from '@angular/core';
import { Inbox } from './inbox.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  inbox: Inbox[] = [
    new Inbox('Rolando', '', 'My first message'),
    new Inbox('Juan', '', 'My first message'),
    new Inbox('Evan', '', 'My first message'),
    new Inbox('Chris', '', 'My first message'),
    new Inbox('Sean', '', 'My first message'),
    new Inbox('John', '', 'My first message'),
    new Inbox('Sam', '', 'My first message'),
  ];
}
