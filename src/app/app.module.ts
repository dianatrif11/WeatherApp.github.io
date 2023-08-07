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
import { LoginComponent } from './login/login.component';
import { AngularFireModule} from'@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './register/register.component';

const firebaseConfig = {
  apiKey: "AIzaSyAmPnMPhv_EH1Us130_dKH_Y2hVMCulQpk",
  authDomain: "weatherapp-e16eb.firebaseapp.com",
  projectId: "weatherapp-e16eb",
  storageBucket: "weatherapp-e16eb.appspot.com",
  messagingSenderId: "303493934657",
  appId: "1:303493934657:web:f5f702ba02180e666be0c0"
};

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LoginComponent,
    RegisterComponent

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
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
