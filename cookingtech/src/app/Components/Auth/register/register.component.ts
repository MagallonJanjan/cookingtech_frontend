import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new FormGroup({
    firstname : new FormControl('',[Validators.required, Validators.minLength(4)]),
    lastname : new FormControl('',[Validators.required, Validators.minLength(4)]),
    username : new FormControl('',[Validators.required, Validators.minLength(4)]),
    email : new FormControl('',[Validators.required, Validators.email]),
    usertype : new FormControl('',Validators.required),
    password : new FormControl('',[Validators.required, Validators.minLength(8)])
  })

  constructor() { }


  ngOnInit(): void {
    console.log('Init');
    
  }

  onSubmit(){
    console.log(JSON.stringify(this.user.value))
  }


  

}
