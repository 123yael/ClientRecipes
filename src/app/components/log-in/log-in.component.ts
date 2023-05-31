import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  // טופס עם משתנים שמקבילים לשדות קלט
  myForm: FormGroup = new FormGroup({
    "userName": new FormControl(""),
    "pass": new FormControl(null)
  })

  // פונקציה שמחזירה את ערך המשתנה שם משתמש שנכנס בקלט
  get getUserName() {
    return this.myForm.controls['userName']
  }

  // פונקציה שמחזירה את ערך המשתנה סיסמה שנכנס בקלט
  get getPass() {
    return this.myForm.controls['pass']
  }

  // c-tor של המחלקה שמיד בעת טעינתה טוענת את כל המשתמשים שקיימים במערת למשתנה המתאים בסרויס
  constructor(public httpclient: HttpClient, public users: UsersService, private router: Router) {
    this.users.getAllUsers().subscribe(x => this.users.arr = x)
  }

  // פונקציה שבודקת האם משתמש קיים במערת 
  // במקרה שלו הוא מועבר להרשמה 
  // במקרה של מנהל נפתחת לט כרטיסיה
  // מנהל או משתמש קיים מועבר לדף הבית
  check() {
    // שם משתמש וסיסמה
    let n: string = this.getUserName.value
    let p: number = this.getPass.value
    // שליחה לפונקציה שבודקת האם המשתמש קיים במערכת
    // אם לא נשלח המשתמש להרשמה, אם כן עדכן המשתנה הגלובלי ומועבר לדף הבית
    this.users.getUserByNameAndPass(n, p).subscribe(u => {
      debugger
      if (u == undefined)
        this.router.navigate(['/signUp']);
      else {
        this.users.currentUser = { ...u }
        this.router.navigate(['/home']);
      }
    })
  }

}
