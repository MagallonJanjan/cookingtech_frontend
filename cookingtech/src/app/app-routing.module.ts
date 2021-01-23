import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Auth Components
import {LoginComponent} from '../app/Components/Auth/login/login.component'
import {RegisterComponent} from '../app/Components/Auth/register/register.component'
import { HomeComponent } from './Components/Public/home/home.component';

const routes: Routes =
[
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : '', component : HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,RegisterComponent]
