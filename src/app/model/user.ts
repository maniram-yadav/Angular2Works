export class User {
    id:number;
    name:String;
    address:String;
    city:String;
    state:String;
    email:String;
    constructor(values:Object={}){
        
        Object.assign(this,values);
    
    }
}
