import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;
  // @Output() userFetched: EventEmitter<User[]> = new EventEmitter<User[]>();
  users: User[] = [];
  userId = Math.floor(Math.random() * 1000000000000);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.createUserForm = new FormGroup({
      userData: new FormGroup({
        profilePhoto: new FormControl(null), // Remove Validators.required
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
    });
    this.fetchUsers();
    this.createUserForm.reset();
  }

  onFetchUsers() {
    this.fetchUsers();
  }

  onSubmitUser(userData: User) {
    userData.id = this.userId;
    this.http
      .post<{ name: string }>(
        'https://dating-app-933fe-default-rtdb.firebaseio.com/posts.json',
        userData
      )
      .subscribe();
  }

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

  onProfilePhotoSelected(event: any) {
    const fileInput = event.target as HTMLInputElement;
    const previewImage = document.getElementById(
      'previewImage'
    ) as HTMLImageElement;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (previewImage) {
          previewImage.src = e.target.result as string;
        }
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  private fetchUsers() {
    // Implement your fetch logic here
  }
}
