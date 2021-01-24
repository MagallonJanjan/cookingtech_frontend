import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  @Input() data: any;
  @Input() tableTitle:any;
  
  
  totalData:any;
  page: number = 1;


  showSearch:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.totalData = this.data.length;
  }

  pageChanged(page:any) {
    this.page = page;
  }

}
