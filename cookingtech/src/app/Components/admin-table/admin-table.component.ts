import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  @Input() users:any;
  @Input() tableTitle:any;
  @Input() data: any;

  datas: any;

  info: any;
  
  usertypes = [
    ["",""],
    ["chef_apprentice","chef_apprentice"],
    ["chef_master","chef_master"],
  ];

  totalData:any;
  page: number = 1;

  showSearch:boolean = false;

  constructor() {
   }

  ngOnInit(): void {
    this.totalData = this.data.length;
    this.datas = this.data;
  } 

  pageChanged(page:any) {
    this.page = page;
  }

  getUserData(data:any){
    this.info = data;
    console.log(this.info);
    
  }

}
