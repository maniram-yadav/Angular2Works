import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringpipe'
})
export class StringpipePipe implements PipeTransform {

  transform(value: string, num: number,n:number): string {

    console.log('Number : '+num+ " N : " +n);
    if(n==0)
      value=value.replace(' ','');

    if(num === undefined)
    {
      return value.toUpperCase();
    }
    else{
      return value.substring(0,num).toUpperCase() + value.substring(num,value.length);
    }
  }

}
