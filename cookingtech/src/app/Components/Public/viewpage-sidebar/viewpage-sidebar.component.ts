import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewpage-sidebar',
  templateUrl: './viewpage-sidebar.component.html',
  styleUrls: ['./viewpage-sidebar.component.css']
})
export class ViewpageSidebarComponent implements OnInit {

  showSideBar:boolean = true;
  class:string = "click";

  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.showSideBar = !this.showSideBar;
  }
}
