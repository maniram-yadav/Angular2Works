import { Injectable } from '@angular/core';
import {User} from '../model/user'
@Injectable()

export class UserService {

  users:User[];
  user:User;
  lastid:number=0;
  constructor() { }

  addUser(name:string='',address:string='',city:string='',state:string='',email:string=''): number{
    
    this.user=new User({name:name,address:address,city:city,state:state,email:email});
    this.users.push(this.user);
    //return this.getAllUser();
    return 1

  }

  getAllUser():User[]{
    return this.users;
  }

  getMsg(): String {
    return 'Angular App';
  }
}
