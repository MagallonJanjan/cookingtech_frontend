import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../../../services/apirequest.service';
import {} from 'ng-apexcharts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data:Array<any>;
  temp:any;
  showSideBar:boolean = true;
  class:string = "click";
  title:any;

  showDashboard:boolean;

  constructor(
    private apiService: ApiRequestService
  ) {
    this.data = [];
    this.showDashboard = true;
   }

  ngOnInit(): void {
    
  }

  toggleSidebar() {
    this.showSideBar = !this.showSideBar;
  }


  showDasboardFun() {
    this.showDashboard = true;
  }

  getDataOnclick(kindOfData:string) {    
    this.showDashboard = false;
    this.apiService.apiRequest(kindOfData,"get")
      .subscribe(respond => {
        this.temp = respond;
        this.data = this.temp.users || respond;
        this.title = (this.temp.users)? "USERS":"RECIPES"
      });
  }
}
