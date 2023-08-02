import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { allAppRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { ApixuService } from './apixu.service';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule.forRoot(allAppRoutes),
    MatListModule,
    FormsModule,
    ReactiveFormsModule,   
    HttpClientModule, 
    ScrollingModule,

  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
