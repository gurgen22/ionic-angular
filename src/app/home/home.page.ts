import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public res: any;

  constructor(
    private weatherAPI: WeatherService
  ) {}

  ngOnInit(){
    this.getWeatherData();
  }

 

  getWeatherData(){
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res =response;
      this.res.current.temp = (this.res.current.temp-273.15);
      this.res.daily[0].temp.max = (this.res.daily[0].temp.max -273.15);
      this.res.daily[1].temp.max = (this.res.daily[1].temp.max -273.15);
      this.res.daily[2].temp.max = (this.res.daily[2].temp.max -273.15);
      this.res.daily[3].temp.max = (this.res.daily[3].temp.max -273.15);
      this.res.daily[4].temp.max = (this.res.daily[4].temp.max -273.15);
      this.res.daily[5].temp.max = (this.res.daily[5].temp.max -273.15);
      this.res.daily[6].temp.max = (this.res.daily[6].temp.max -273.15);

      this.res.daily[0].temp.min = (this.res.daily[0].temp.min -273.15);
      this.res.daily[1].temp.min = (this.res.daily[1].temp.min -273.15);
      this.res.daily[2].temp.min = (this.res.daily[2].temp.min -273.15);
      this.res.daily[3].temp.min = (this.res.daily[3].temp.min -273.15);
      this.res.daily[4].temp.min = (this.res.daily[4].temp.min -273.15);
      this.res.daily[5].temp.min = (this.res.daily[5].temp.min -273.15);
      this.res.daily[6].temp.min = (this.res.daily[6].temp.min -273.15);
      console.log(this.res);
    });
  }

}
