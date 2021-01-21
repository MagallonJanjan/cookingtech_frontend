import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Auth Components
import {LoginComponent} from '../app/Components/Auth/login/login.component'
import {RegisterComponent} from '../app/Components/Auth/register/register.component'
import {HomeComponent} from '../app/Components/Public/home/home.component'
import { AdminComponent } from './Components/Public/admin/admin.component';

const routes: Routes =
[
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : '', component : HomeComponent },
  { path : 'admin', component : AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginComponent,RegisterComponent,HomeComponent]
