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
import { CommentComponent } from './Components/comment/comment.component';
import { ReplyComponent } from './Components/reply/reply.component';
import { ViewpageHeaderComponent } from './Components/Public/viewpage-header/viewpage-header.component';
import { ViewpageBodyComponent } from './Components/Public/viewpage-body/viewpage-body.component';
import { ViewpageSidebarComponent } from './Components/Public/viewpage-sidebar/viewpage-sidebar.component';

//Import provider
import { CookieService } from 'ngx-cookie-service';
import { ViewrecipesComponent } from './Components/Public/viewrecipes/viewrecipes.component';
import { ViewrecipesBodyComponent } from './Components/Public/viewrecipes-body/viewrecipes-body.component';
import { UserProfileComponent } from './Components/Public/user-profile/user-profile.component';
import { UserProfileBodyComponent } from './Components/Public/user-profile-body/user-profile-body.component';
import { UserHomeComponent } from './Components/Public/user-home/user-home.component';
import { UserHomeBodyComponent } from './Components/Public/user-home-body/user-home-body.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    AddrecipeComponent,
    AdminTableComponent,
    AdminModalComponent,
    HomeComponent,
    ViewpageComponent,
    FooterComponent,
    CommentComponent,
    ReplyComponent,
    ViewpageHeaderComponent,
    ViewpageBodyComponent,
    ViewpageSidebarComponent,
    ViewrecipesComponent,
    ViewrecipesBodyComponent,
    UserProfileComponent,
    UserProfileBodyComponent,
    UserHomeComponent,
    UserHomeBodyComponent
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
