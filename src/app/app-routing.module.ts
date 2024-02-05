import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component'; // Import your messages component
import { HomepageComponent } from './homepage/homepage.component';
import { CreateUserComponent } from './homepage/create-user/create-user.component';
import { MatchesPageComponent } from './matches-page/matches-page.component';

const routes: Routes = [
  { path: 'messages', component: MessagesComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'matches-page', component: MatchesPageComponent },
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
