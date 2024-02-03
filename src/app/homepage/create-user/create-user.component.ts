import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { map } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;
  gender: [];
  postForm: any;
  users: [];

  ngOnInit() {
    this.createUserForm = new FormGroup({
      userData: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        gender: new FormControl(),
        birthdate: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phoneNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ]),
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
      }),
      //controls for the html
    });
    this.fetchUsers();
  }

  constructor(private http: HttpClient) {}

  onFetchUsers() {
    this.fetchUsers();
  }

  onSubmitUser(userData: {
    firstName: string;
    lastName: string;
    birthdate: string;
    email: string;
    phoneNumber: string;
    username: string;
  }) {
    this.http
      .post(
        'https://dating-app-933fe-default-rtdb.firebaseio.com/posts.json',
        userData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
  private fetchUsers() {
    this.http
      .get('https://dating-app-933fe-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((responseData) => {
          const usersArr = [];
          for (const user in responseData) {
            if (responseData.hasOwnProperty(user)) {
              usersArr.push({ ...responseData[user], id: user });
            }
          }
          return usersArr;
        })
      )
      .subscribe((user) => {
        console.log(user);
      });
  }
}
