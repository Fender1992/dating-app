import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;

  ngOnInit() {
    this.createUserForm = new FormGroup({
      userData: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
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
  }

  onSubmitUser() {
    console.log(this.createUserForm);
  }
}
