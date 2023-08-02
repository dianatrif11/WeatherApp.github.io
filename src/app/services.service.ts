import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get('http://api.weatherstack.com/current?access_key=946443533d4cab71e411479458f69b94&query=New%20York' +
    location
    );
  }
}
