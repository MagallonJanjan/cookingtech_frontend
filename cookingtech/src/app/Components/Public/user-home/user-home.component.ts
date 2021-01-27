import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor() { }
  showSideBar:boolean = true;
  ngOnInit(): void {
  }

  sideBarToggle(data:any) {
    this.showSideBar = data;
  }
}
