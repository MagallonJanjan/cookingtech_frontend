import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ApirequestService} from '../../../services/apirequest.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private validation : ApirequestService,
    private router : Router) { }

    userLogin:any

  ngOnInit(): void {
    
    this.userLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password :['', [Validators.required, Validators.minLength(8)]]
    })
  }
  
 
kindOfUser:any;

onSubmit():void  {
  
 this.validation.apiRequest('https://cookingtech.herokuapp.com/api/users/login',"post", this.userLogin.value)
      .subscribe(userToken => {
        console.log(userToken);
        this.kindOfUser = userToken;
        console.log(this.kindOfUser)
        
        if(this.kindOfUser.user.usertype === 'chef_apprentice'){
            this.router.navigate(['/admin'])
        }
        if(this.kindOfUser.user.usertype === 'chef_master'){
          this.router.navigate([''])
        }
        if(this.kindOfUser.user.usertype === 'admin'){
          this.router.navigate([''])
        }
        window.localStorage.setItem('token', this.kindOfUser.token);
      })
}
}
