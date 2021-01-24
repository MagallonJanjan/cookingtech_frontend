import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; 

import { NgxPaginationModule } from 'ngx-pagination';
import { NgApexchartsModule } from 'ng-apexcharts';

//Import Components
import { AppComponent } from './app.component';
import { AdminComponent } from './Components/Public/admin/admin.component';
import { AddrecipeComponent } from './Components/Public/addrecipe/addrecipe.component';
import { AdminTableComponent } from './Components/admin-table/admin-table.component';
import { AdminModalComponent } from './Components/admin-modal/admin-modal.component';
import { HomeComponent } from './Components/Public/home/home.component';
import { ViewpageComponent } from './Components/Public/viewpage/viewpage.component';
import { FooterComponent } from './Components/Public/footer/footer.component';

//Import provider
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    AddrecipeComponent,
    AdminTableComponent,
    AdminModalComponent,
    routingComponents,
    HomeComponent,
    ViewpageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgApexchartsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
