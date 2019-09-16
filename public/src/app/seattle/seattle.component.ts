import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weatherData: any;

  constructor(private _http: HttpClient) {
    this.getWeather();
  }

  ngOnInit() {
  }
  getWeather() {
    const weather = this._http.get('https://api.openweathermap.org/data/2.5/weather?id=5809844&appid=448dd594531ba31d3502c492aa9488b1');
    weather.subscribe(data => {
      console.log(data);
      this.weatherData = data['main'];
      this.weatherData['status'] = data['weather'][0]['description'];
      this.weatherData.temp = Math.round(this.weatherData.temp - 273.15);
      this.weatherData.temp_max = Math.round(this.weatherData.temp_max - 273.15);
      this.weatherData.temp_min = Math.round(this.weatherData.temp_min - 273.15);
      console.log(this.weatherData);
    });
  }

}

// 5809844 = seattle
