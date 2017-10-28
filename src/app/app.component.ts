import { Component ,OnInit} from '@angular/core';
import { User } from './model/user';
import { UserService } from './services/user.service';
import { NgFor } from '@angular/common';

import { BindParentComponent } from './component/bind-parent/bind-parent.component';
import { BindChildComponent } from './component/bind-child/bind-child.component';

import { FormGroup, FormControl, FormBuilder, Validators ,NgControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})


export class AppComponent implements OnInit {
  
userform:FormGroup;

   user:User[];
   title:String='app';
   man:any[];
   name:String;

  //  onSubmit(value:String):void{
  //    console.log("Forms Values : "+value)
  //  }
 pushdata(event) {
     this.man.push("Maniram");
   }
ngOnInit(){

  this.title='Mani';
  this.man=['Maniram Yadav','Subhash'];
     this.user=[
      new User({name:'Maniram Yadav',address:'sidhawal'}),
      new User({name:'Gopal Yadav',address:'jangal'}),
      new User({name:'Maniram Yadav',address:'sidhawal'})
    ];


    this.userform=new FormGroup({
      name:new FormControl(''),
      address:new FormControl('')
    });

  }
  // onSubmit(){
  //   console.log("Address : "+this.userform.controls);
  // }
  values:any;
  onSubmit(){
  this.values=this.userform.value;
    console.log("name : "+this.values.name);
    console.log("Addresss : "+this.values.address);
    this.user.push(new User({name:this.values.name,address:this.values.address}));
    
  }
}
