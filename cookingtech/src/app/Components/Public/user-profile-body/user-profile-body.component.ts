import { Component, OnInit} from '@angular/core';
import { ApiRequestService } from '../../../services/apirequest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile-body',
  templateUrl: './user-profile-body.component.html',
  styleUrls: ['./user-profile-body.component.css']
})


export class UserProfileBodyComponent implements OnInit {

  constructor(
    private apiService : ApiRequestService,
    private route: ActivatedRoute,
    private router: Router,
    private fb : FormBuilder
  ) { }


  user_id: any;
  user: any;
  updatePerson:any;
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
            console.log(this.user);

            this.updatePerson = this.fb.group({
              firstname: [this.user.firstname,Validators.required],
              lastname: [this.user.lastname,Validators.required],
              email: [this.user.email,Validators.required],
            });

          }
        );
      
    }
    
  
  onUpdate(){
    console.log(this.user_id);
    let configUrl = '/users/' + this.user_id;
    this.user = this.updatePerson.value;

    this.apiService.apiRequest(configUrl,"put",this.user)
            .subscribe(respond =>{
             
              alert('Okay na')
            },error=>{
              alert("Something went wrong! Please try again");
              console.log(error);
            })
  

  }
}
