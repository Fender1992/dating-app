import { Component, Input, OnInit } from '@angular/core';
import { CreateUserComponent } from '../homepage/create-user/create-user.component';
import { User } from '../homepage/create-user/user.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-matches-page',
  templateUrl: './matches-page.component.html',
  styleUrl: './matches-page.component.css',
})
export class MatchesPageComponent implements OnInit {
  @Input() htmlUser: User;

  ngOnInit() {}
}
