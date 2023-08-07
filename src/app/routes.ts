import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { Component, NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const allAppRoutes: Routes = [
    { path: 'weather', component: WeatherComponent },
    {path: 'register', component: RegisterComponent},
    { path: '', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(allAppRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }