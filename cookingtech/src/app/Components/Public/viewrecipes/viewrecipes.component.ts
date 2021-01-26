import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewrecipes',
  templateUrl: './viewrecipes.component.html',
  styleUrls: ['./viewrecipes.component.css']
})
export class ViewrecipesComponent implements OnInit {

  constructor() { }
  showSideBar:boolean = true;
  ngOnInit(): void {
  }

  sideBarToggle(data:any) {
    this.showSideBar = data;
  }
}
