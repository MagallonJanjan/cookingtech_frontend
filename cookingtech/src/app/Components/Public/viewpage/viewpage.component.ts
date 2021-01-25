import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  constructor() { }
  showSideBar:boolean = true;
  ngOnInit(): void {
  }

  sideBarToggle(data:any) {
    this.showSideBar = data;
  }
}
