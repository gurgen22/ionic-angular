import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]) {
    let a= new Date(+ value * 1000);
    let days = ['Paz','Pzt','Sal','Çar','Per','Cum','Cmt']
    return days[a.getDay()];
  }

}
