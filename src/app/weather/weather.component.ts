import { Component, OnInit } from '@angular/core';
import { Place } from '../Place';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApixuService } from '../apixu.service';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  places: Place[] = [];
  locations : string = '';
  isCompleted:boolean = false;
  public weatherSearchForm!: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,
    
  ) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  sendToAPIXU(formValues: { location: string; }){
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
    
    if(this.locations){
      let image =  new Place();
      image.locations = this.locations;
      image.isCompleted = true
      this.places.push(image);
      this.locations=''
    }else{
      alert('Pleasse Enter Location');
    }

  }

  onHistoryLocationClicked(location:string){
    this.apixuService.getWeather(location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
}
}
