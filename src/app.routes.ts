import { Routes } from '@angular/router';
import { MessagesComponent } from './app/messages/messages.component';
import { CreateUserComponent } from './app/homepage/create-user/create-user.component';

export const routes: Routes = [
  { path: 'messages', component: MessagesComponent },
  { path: 'create-user', component: CreateUserComponent },
];
