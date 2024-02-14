import { Component, Input, OnInit } from '@angular/core';
import { CreateUserComponent } from '../homepage/create-user/create-user.component';
import { User } from '../homepage/create-user/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-matches-page',
  templateUrl: './matches-page.component.html',
  styleUrl: './matches-page.component.css',
})
export class MatchesPageComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onGetUser(userData: User) {
    this.http
      .get<User>(
        'https://dating-app-933fe-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((users) => {
          const userArray = [];

          for (const userId in users) {
            if (users.hasOwnProperty(userId)) {
              userArray.push(users[userId]);
            }
          }
          return userArray;
        })
      )
      .subscribe((userArray) => {
        this.users = userArray;
        // this.userFetched.emit(this.users); // Emitting the fetched users
        console.log(this.users);
      });
  }
}
