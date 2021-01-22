import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  users:any
  totalUsers:any;
  page: number = 1;

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
    
    
  }

  pageChanged(page:any) {
    this.page = page;
  }

}
