import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Auth Components
import {LoginComponent} from '../app/Components/Auth/login/login.component'
import {RegisterComponent} from '../app/Components/Auth/register/register.component'
import { AddrecipeComponent } from './Components/Public/addrecipe/addrecipe.component';
import { AdminComponent } from './Components/Public/admin/admin.component';
import { HomeComponent } from './Components/Public/home/home.component';
import {ViewpageComponent} from './Components/Public/viewpage/viewpage.component';

const routes: Routes =
[
  { path : 'home', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  {path: 'viewpage', component: ViewpageComponent},
  { path : '', component : HomeComponent },
  { path : 'admin', component : AdminComponent },
  {path : 'add-recipe', component : AddrecipeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = 
                [
                  LoginComponent,
                  RegisterComponent,
                  ViewpageComponent,
                  AdminComponent,
                  AddrecipeComponent
                ]
