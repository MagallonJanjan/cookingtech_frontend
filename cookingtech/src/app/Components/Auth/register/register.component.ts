import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   
user: any = FormGroup;
submitted = false;

constructor(private formBuilder: FormBuilder) { }

ngOnInit(): void {
  this.user = this.formBuilder.group({
    firstname: ['', [Validators.required, Validators.minLength(4)]],
    lastname: ['', [Validators.required, Validators.minLength(4)]],
    username: ['',[Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    usertype: ['',Validators.required],
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
onSubmit() {
  this.submitted = true;
  console.log('Hi')
  // stop here if form is invalid
  if (this.user.invalid) {
    return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user.value))
}


}
