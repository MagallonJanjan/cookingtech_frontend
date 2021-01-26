import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  showSideBar:boolean = true;
  ngOnInit(): void {
  }

  sideBarToggle(data:any) {
    this.showSideBar = data;
  }
}
