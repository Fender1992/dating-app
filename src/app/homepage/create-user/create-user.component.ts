import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Process the registration data here (e.g., send it to an API)
      const userData = this.registrationForm.value;
      console.log('User data:', userData);
    } else {
      // Handle form validation errors
      alert('Please fill in all required fields correctly.');
    }
  }
}
