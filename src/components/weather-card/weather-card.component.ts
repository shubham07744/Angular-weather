import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
  providers:[WeatherServiceService]
})
export class WeatherCardComponent implements OnInit{
  cityName = "Mumbai";
  data={
    temp:'',
    feelsLike :'',
    pressure:'',
    humidity:'',
    city:'',
    main:'',
    imageURL:''
  }

  constructor(private readonly weatherService: WeatherServiceService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    if(this.cityName){
      this.weatherService.fetchData(this.cityName).subscribe({
        next: (data: any) =>{
            this.data.temp = data.main.temp
            this.data.feelsLike = data.main.feels_like
            this.data.pressure = data.main.pressure
            this.data.humidity = data.main.humidity
            this.data.city = data.name
            this.data.main = data.weather[0].main
            this.data.imageURL = data.weather[0].icon
            console.log(data)
        },
        error: (error) =>{
          console.error("error while fetching data", error);
        }
      })
    }
  }
}
