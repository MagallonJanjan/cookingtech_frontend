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

  user_id: any;
  user: any;
  showSideBar:boolean = true;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.user_id = params.get('id');
        console.log(this.user_id);
        
      }
    );
      this.apiService.apiRequest(`/users/${this.user_id}`, "get")
        .subscribe(
          respond => {
            this.user = respond;
            this.user = this.user.user;
          }
        );
  }

  sideBarToggle(data:any) {
    this.showSideBar = data;
  }
}
