import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiRequestService } from '../../../services/apirequest.service';
import { CookieService } from 'ngx-cookie-service';
import { EncryptService } from '../../../services/encrypt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private validation: ApiRequestService,
    private router: Router,
    private cookies: CookieService,
    private dataEnc: EncryptService) { }
  userLogin: any

  ngOnInit(): void {
    this.userLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }


  usertype: any;


  kindOfUser: any;
  isLoginDisabled = true
  onSubmit(): void {
    this.isLoginDisabled = false
    this.validation.apiRequest('/users/login', "post", this.userLogin.value)
      .subscribe(userToken => {
       
        console.log(userToken);
        this.kindOfUser = userToken;
        if (this.kindOfUser.errors) {
          alert("");
          return;
        }
        if (this.kindOfUser.user.usertype === 'chef_apprentice') {
          this.router.navigate(['/admin'])
        }
        if (this.kindOfUser.user.usertype === 'chef_master') {
          this.router.navigate(['/home'])
        }
        if (this.kindOfUser.user.usertype === 'admin') {
          this.router.navigate(['/admin'])
        }
        window.localStorage.setItem('token', this.kindOfUser.token);
        let encCookies = this.dataEnc.encrypt(JSON.stringify(this.kindOfUser));
        this.cookies.set('__cookingtech', encCookies);
      }, error => {
        alert('This credentials does not match to our records! Please try again.');
        this.isLoginDisabled = true
      }
      )
  }
}
