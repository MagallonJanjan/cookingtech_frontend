import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRequestService } from '../../../services/apirequest.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService : ApiRequestService
  ) { }

  
  showSideBar:boolean = true;
  ngOnInit(): void {

  }

  

  sideBarToggle(data:any) {
    this.showSideBar = data;
  }
}
