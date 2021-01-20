import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomvalidationService } from '../../../services/customvalidation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sample: CustomvalidationService) { }


  ngOnInit(): void {
    
  }

  userLogin = new FormGroup({
      email : new FormControl(),
      password : new FormControl()
  },{

  })

  onSubmit(){
    console.log(this.userLogin.value);
   this.sample.postData('https://cookingtech.herokuapp.com/api/login', this.userLogin.value)
        .subscribe(userToken => {
          console.log(userToken); 
        })

  }


}
