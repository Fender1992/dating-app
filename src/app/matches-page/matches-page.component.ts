import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser } from '../store/user.actions';
import { UserService } from '../Services/users.service';

@Component({
  selector: 'app-matches-page',
  templateUrl: './matches-page.component.html',
  styleUrl: './matches-page.component.css',
  providers: [UserService],
})
export class MatchesPageComponent implements OnInit {
  // users: User[] = [];
  // users$: Observable<[]>;
  users: { name: string }[] = [];

  constructor(private usersService: UserService) { }

  findMatch() { }

  ngOnInit() {
    this.users = this.usersService.usersDatabase;
    // this.store.dispatch(getUser());
  }

  onMatched(event: any) {
    this.users = this.usersService.usersDatabase;
    console.log(this.users);
  }
}
