import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; 

import { NgxPaginationModule } from 'ngx-pagination';

//Import Components
import { AppComponent } from './app.component';
import { AdminComponent } from './Components/Public/admin/admin.component';
import { AddrecipeComponent } from './Components/Public/addrecipe/addrecipe.component';
import { AdminHeaderComponent } from './Components/admin-header/admin-header.component';
import { AdminSidebarComponent } from './Components/admin-sidebar/admin-sidebar.component';
import { AdminTableComponent } from './Components/admin-table/admin-table.component';
import { AdminModalComponent } from './Components/admin-modal/admin-modal.component';
import { HomeComponent } from './Components/Public/home/home.component';
import { ViewpageComponent } from './Components/Public/viewpage/viewpage.component';
import { FooterComponent } from './Components/Public/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    AddrecipeComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
