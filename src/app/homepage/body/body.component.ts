import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  defaultSign = 'Capricorn';
  genders = ['male', 'female'];
  @ViewChild('f') screeningForm: NgForm;
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    this.screeningForm.reset();
  }
}
