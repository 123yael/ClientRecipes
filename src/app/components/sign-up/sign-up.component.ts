import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/classes/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  // טופס עם משתנים אחוריים לשדות
  myForm: FormGroup = new FormGroup({
    "firstName": new FormControl("", [Validators.required, Validators.pattern("[A-Za-zא-ת]*")]),
    "lastName": new FormControl("", [Validators.required, Validators.pattern("[A-Za-zא-ת]*")]),
    "email": new FormControl("", [Validators.required]),
    "pass": new FormControl(null, [Validators.required])
  })


  constructor(public httpclient: HttpClient, public users: UsersService, private router: Router) {
  }

  get firstName() {
    return this.myForm.controls["firstName"]
  }

  get lastName() {
    return this.myForm.controls["lastName"]
  }

  get email() {
    return this.myForm.controls["email"]
  }

  get pass() {
    return this.myForm.controls["pass"]
  }
  // פונקציה להוספת משתמש חדש למערכת
  addUser() {
    debugger
    if (this.email.errors != null && (this.email.errors!['required'] || this.pass.errors!['required'] ||
      this.lastName.errors!['required'] || this.lastName.errors!['pattern'] ||
      this.firstName.errors!['required'] || this.firstName.errors!['pattern']))
      return
    let u: user = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      pass: this.pass.value
    }
    debugger
    this.users.addUser(u).subscribe(res => {
      console.log(res);
    })

    this.users.currentUser = { ...u }

    this.router.navigate(['/home'])
  }
}
