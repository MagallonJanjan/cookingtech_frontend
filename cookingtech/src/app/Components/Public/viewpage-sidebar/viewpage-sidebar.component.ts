import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-viewpage-sidebar',
  templateUrl: './viewpage-sidebar.component.html',
  styleUrls: ['./viewpage-sidebar.component.css']
})
export class ViewpageSidebarComponent implements OnInit {

  //out event here
  @Output() sideBarToggle = new EventEmitter<boolean>();


  showSideBar:boolean = true;
  class:string = "click";

  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.showSideBar = !this.showSideBar;
    this.sideBarToggle.emit(this.showSideBar);
  }
}
