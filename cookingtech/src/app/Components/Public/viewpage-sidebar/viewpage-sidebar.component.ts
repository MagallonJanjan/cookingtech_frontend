import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EncryptService } from '../../../services/encrypt.service';
import { CookieService } from 'ngx-cookie-service';
import {Router } from '@angular/router';




@Component({
  selector: 'app-viewpage-sidebar',
  templateUrl: './viewpage-sidebar.component.html',
  styleUrls: ['./viewpage-sidebar.component.css']
})
export class ViewpageSidebarComponent implements OnInit {

  //out event here
  @Output() sideBarToggle = new EventEmitter<boolean>();
  @Output() recipes = new EventEmitter<any>();

  cookie: any;
  showSideBar:boolean = true;
  class:string = "click";

  constructor(
    private cookies: CookieService,
    private dataEnc: EncryptService,
    private route: Router
  ) { }

  ngOnInit(): void {
      this.cookie = this.cookies.get('__cookingtech');
  }
  
  toggleSidebar() {
    this.showSideBar = !this.showSideBar;
    this.sideBarToggle.emit(this.showSideBar);
  }

  gotoMyRecipe() {
    this.route.navigate(['/user/my-recipes/myrecipe']);
  }

  gotoBookmarks() {
    this.route.navigate(['/user/recipes/bookmarks']);
  }
}
