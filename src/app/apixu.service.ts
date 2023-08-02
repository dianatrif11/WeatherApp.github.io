import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location: string) {
    return this.http.get(
      `http://api.weatherapi.com/v1/current.json?key=bc3ecfaa933e4734bf491123232804&q=${location}&aqi=no`
    );
  }
}