import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {CustomvalidationService} from '../../../services/customvalidation.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private validation : CustomvalidationService,
    private router : Router) { }

    userLogin:any

  ngOnInit(): void {
    
    this.userLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password :['', [Validators.required, Validators.minLength(8)]]
    })
  }
  
 
usertype:any;

onSubmit():void  {
  console.log(this.userLogin.value);
 this.validation.postData('https://cookingtech.herokuapp.com/api/users/login', this.userLogin.value)
      .subscribe(userToken => {
        console.log(userToken);
        this.usertype = userToken;
        console.log(this.usertype)
        if(this.usertype === 'chef_apprentice'){
            this.router.navigate([''])
        }
      })
}

}
