import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../../../services/apirequest.service';

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

  constructor(
    private apiService: ApiRequestService
  ) {
    this.data = [];
   }

  ngOnInit(): void {
    
  }

  toggleSidebar() {
    this.showSideBar = !this.showSideBar;
  }

  getDataOnclick(kindOfData:string) {    
    this.apiService.apiRequest(kindOfData,"get")
      .subscribe(respond => {
        this.temp = respond;
        this.data = this.temp.users || respond;
        this.title = (this.temp.users)? "USERS":"RECIPES"
      });
  }
}
