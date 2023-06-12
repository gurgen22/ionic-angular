import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) { }

  getWeatherData():Observable<any>{
    let lat = 33.44;
    let lon = -94.04;
    let apiId = '738d89e14c07326ebc6af52a08287239'; 
   // let queryString = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={apiId}`;
    let queryString = "https://api.openweathermap.org/data/3.0/onecall?lat=41.0082&lon=28.9784&appid=738d89e14c07326ebc6af52a08287239";
    return this.http.get(queryString);
  }
}
