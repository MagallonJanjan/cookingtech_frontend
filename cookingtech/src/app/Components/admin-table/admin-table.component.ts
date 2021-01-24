import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  @Input() data: any;
  @Input()users:any;
  @Input() tableTitle:any;
  
  
  totalData:any;
  page: number = 1;
  totalUsers:any;


  showSearch:boolean = false;

  constructor() { }

  ngOnInit(): void {
   this.users=[
    {
      id:1,
      firstName:"Kyla Jean",
      lastName:"Dumaguit",
    },
    {
      id:1,
      firstName:"Harvey",
      lastName:"Aparece",
    },
    {
      id:1,
      firstName:"Joseph",
      lastName:"Magallon",
    },
    {
      id:1,
      firstName:"Kyla Jean",
      lastName:"Dumaguit",
    },
    {
      id:1,
      firstName:"Harvey",
      lastName:"Aparece",
    },
    {
      id:1,
      firstName:"Joseph",
      lastName:"Magallon",
    },
    {
      id:1,
      firstName:"Kyla Jean",
      lastName:"Dumaguit",
    },
    {
      id:1,
      firstName:"Harvey",
      lastName:"Aparece",
    },
    {
      id:1,
      firstName:"Joseph",
      lastName:"Magallon",
    },
    {
      id:1,
      firstName:"Kyla Jean",
      lastName:"Dumaguit",
    },
    {
      id:1,
      firstName:"Harvey",
      lastName:"Aparece",
    },
    {
      id:1,
      firstName:"Joseph",
      lastName:"Magallon",
    }
    ]

    this.totalUsers = this.users.length;
    
    
    this.totalData = this.data.length;
  }

  pageChanged(page:any) {
    this.page = page;
  }

}
