import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

 
  transform(unixTimstap: string[], ...args: unknown[]): unknown {
    let a= new Date(+ unixTimstap * 1000);
    let mounths = ['Ock','Şbt','Mrt','Nis','May','Hzr','Tem','Ags','Eyl','Ekm','Kas','Ara']
    let days = ['Paz','Pzt','Sal','Çar','Per','Cum','Cmt']
    return days[a.getDay()] +', '+ a.getDate() + ' '+mounths[a.getMonth()]+ ' '+a.getHours()+ ' '+ a.getMinutes();
  }

}
