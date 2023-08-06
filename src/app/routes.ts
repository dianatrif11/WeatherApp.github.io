import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AutentificationComponent } from './autentification/autentification.component';

export const allAppRoutes: Routes = [{ path: '', component: AutentificationComponent }];