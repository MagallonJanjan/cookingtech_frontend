import { Component, OnInit } from '@angular/core';
import { CustomvalidationService } from '../../../services/customvalidation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  showSideBar:boolean = true;
  class:string = "click";

  constructor(
    private apiService: CustomvalidationService
  ) {
   }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.showSideBar = !this.showSideBar;
  }
}
