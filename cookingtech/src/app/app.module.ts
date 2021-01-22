import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; 

//Import Components
import { AppComponent } from './app.component';
import { AdminComponent } from './Components/Public/admin/admin.component';
import { AddrecipeComponent } from './Components/Public/addrecipe/addrecipe.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    AddrecipeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
