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
import { AdminHeaderComponent } from './Components/admin-header/admin-header.component';
import { AdminSidebarComponent } from './Components/admin-sidebar/admin-sidebar.component';
import { AdminTableComponent } from './Components/admin-table/admin-table.component';
import { AdminModalComponent } from './Components/admin-modal/admin-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminTableComponent,
    AdminModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
