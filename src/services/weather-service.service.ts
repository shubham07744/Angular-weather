import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

const URL = 'https://api.openweathermap.org/data/2.5/weather?q='

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private readonly httpClientService: HttpClient) { } 

    fetchData(cityName: string){
      return this.httpClientService.get(`${URL}${cityName}&appid=${environment.API_KEY}&units=metric`)
  }
}
