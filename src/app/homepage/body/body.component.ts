import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  @ViewChild('f') screeningForm: NgForm;
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    console.log(this.screeningForm);
  }
}
