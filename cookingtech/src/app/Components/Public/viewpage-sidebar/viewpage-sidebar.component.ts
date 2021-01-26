import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EncryptService } from '../../../services/encrypt.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-viewpage-sidebar',
  templateUrl: './viewpage-sidebar.component.html',
  styleUrls: ['./viewpage-sidebar.component.css']
})
export class ViewpageSidebarComponent implements OnInit {

  //out event here
  @Output() sideBarToggle = new EventEmitter<boolean>();

  cookie: any;
  showSideBar:boolean = true;
  class:string = "click";

  constructor(
    private cookies: CookieService,
    private dataEnc: EncryptService
  ) { }

  ngOnInit(): void {
      this.cookie = this.cookies.get('__cookingtech');
  }
  
  toggleSidebar() {
    this.showSideBar = !this.showSideBar;
    this.sideBarToggle.emit(this.showSideBar);
  }

  

}
