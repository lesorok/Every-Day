import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../../shared/services/weather.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss'],
})
export class WeatherReportComponent implements OnInit {
  city: string = 'Kishinev';
  weatherData: any;
  loading: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.loading = true;
    this.weatherService.getWeatherData(this.city).subscribe(data => {
      this.weatherData = data;
      this.loading = false;
    });
  }
}
