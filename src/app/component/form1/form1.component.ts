import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  userform:FormGroup;
  
ngOnInit(){

  this.userform = new FormGroup({
      name : new FormControl(''),
      password : new FormControl(''),
      address: new FormGroup({
        address : new FormControl(''),
        city : new FormControl(''),
        district : new FormControl(''),
        pincode : new FormControl('')
      })
    });
      
  }
 

onSubmit(){
  console.log(this.userform.value);
}

}
