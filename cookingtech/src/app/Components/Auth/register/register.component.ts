import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiRequestService } from '../../../services/apirequest.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

user: any = FormGroup;
submitted = false;



constructor(
  private formBuilder: FormBuilder ,
  private sample: ApiRequestService,
  private router :Router){ }


ngOnInit(): void {
   this.user = this.formBuilder.group({
    firstname: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    username: ['',[Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmpassword: ['', Validators.required]
  }, {
    validator: this.MustMatch('password', 'confirmpassword')
  });

  


}

get f() { return this.user.controls; }

MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }
    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}

configUrl = '/users';

spinner = true;
onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  this.spinner = false;
  if (this.user.invalid) {
    return;
  }
  console.log(this.user.value)
  this.sample.apiRequest(this.configUrl,"post",this.user.value).subscribe(respond => {
    console.log(respond);
    this.router.navigate(['/login'])
  },
  errors=> {
    console.log(errors.error.errors);
  });

 

}
}
