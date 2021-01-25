import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ApiRequestService} from '../../../services/apirequest.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private validation : ApiRequestService,
    private router : Router) { }

    userLogin:any

  ngOnInit(): void {
    
    this.userLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password :['', [Validators.required, Validators.minLength(8)]]
    })
  }
  
 
kindOfUser:any;
error:any;

onSubmit():void  {
  
 this.validation.apiRequest('/users/login',"post", this.userLogin.value)
      .subscribe(userToken => {
        console.log(userToken);
        this.kindOfUser = userToken;

        // this.userLogin.form.reset();
        
        if(this.kindOfUser.user.usertype === 'chef_apprentice'){
            this.router.navigate(['/home'])
        }
        if(this.kindOfUser.user.usertype === 'chef_master'){
          this.router.navigate(['/home'])
        }
        if(this.kindOfUser.user.usertype === 'admin'){
          this.router.navigate(['/admin'])
        }
        window.localStorage.setItem('token', this.kindOfUser.token);
      }, errors => {
        this.error = errors;
       alert('This credentials does not match to our records');
      
      }
    )
}
}
