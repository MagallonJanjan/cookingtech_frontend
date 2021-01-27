import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Auth Components
import {LoginComponent} from '../app/Components/Auth/login/login.component'
import {RegisterComponent} from '../app/Components/Auth/register/register.component'
import { AddrecipeComponent } from './Components/Public/addrecipe/addrecipe.component';
import { AdminComponent } from './Components/Public/admin/admin.component';
import { HomeComponent } from './Components/Public/home/home.component';
import {ViewpageComponent} from './Components/Public/viewpage/viewpage.component';
import {ViewrecipesComponent} from './Components/Public/viewrecipes/viewrecipes.component';
import { UserProfileComponent } from './Components/Public/user-profile/user-profile.component';
import { UserHomeComponent } from './Components/Public/user-home/user-home.component';
import { IsAdminGuard } from './guards/is-admin.guard';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { IsMasterGuard } from './guards/is-master.guard';
import { UserhomeComponent } from './Components/Public/userhome/userhome.component';


const routes: Routes =
[
  { path : '', component : HomeComponent },
  { path : 'home', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent},
  {path: 'recipes/:id', component: ViewpageComponent},
  {path: 'recipes/category/:cat', component: ViewpageComponent},
  {path: 'recipes', component: ViewpageComponent},
  {path: 'user/recipes/:bookmarks', component: ViewpageComponent, canActivate: [IsAuthenticatedGuard]},
  {path: 'user/my-recipes/:my-recipes', component: ViewpageComponent},
  {path: 'edit-recipe/:id', component: AddrecipeComponent, canActivate: [IsAuthenticatedGuard, IsMasterGuard]},
  { path : 'admin', component : AdminComponent, canActivate:[IsAuthenticatedGuard, IsAdminGuard]},
  {path : 'add-recipe', component : AddrecipeComponent, canActivate: [IsAuthenticatedGuard, IsMasterGuard]},
  {path: 'user-profile/:id', component: UserProfileComponent, canActivate: [IsAuthenticatedGuard]},
  {path: 'user-home', component : UserHomeComponent,canActivate: [IsAuthenticatedGuard]}
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
                  ViewrecipesComponent,
                  AddrecipeComponent,
                  UserProfileComponent,
                  UserHomeComponent
                ]
