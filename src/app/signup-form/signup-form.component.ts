import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  implements OnInit {
  user: FormGroup;

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('Maniram Yadav'),
      account: new FormGroup({
        email: new FormControl(''),
        confirm: new FormControl('')
      })
    });
  }
  onSubmit(){
    console.log(this.user.value);
  }
}