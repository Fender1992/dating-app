import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component'; // Import your messages component
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'messages', component: MessagesComponent }, // Define a route for the 'messages' component
  // You can add more routes here for other components/pages
  { path: '', component: HomepageComponent }, // Redirect to 'messages' by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
