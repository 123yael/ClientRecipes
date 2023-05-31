import { Injectable } from '@angular/core';
import { user } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  arr: Array<user> = new Array<user>()
  currentUser: user = new user()

  // משתנה גלובלי לשם השרת
  baseUrl: string = `${environment.baseUrl}users/`

  // משתנה ציבורים לגישה לשרת
  constructor(public httpClient: HttpClient) { }

  // פונקציה שניגשת לשרת ומביאה את כל המשתמשים
  getAllUsers(): Observable<Array<user>> {
    return this.httpClient.get<Array<user>>(`${this.baseUrl}getAllUsers`)
  }

  // פונקציה שניגשת לשרת ומביאה משתמש על פי מייל וסיסמה
  getUserByNameAndPass(name: string, pass: number): Observable<user> {
    return this.httpClient.get<user>(`${this.baseUrl}getUserByNameAndPass/${name}/${pass}`)
  }

  // פונקציה שניגשת לשרת ומוסיפה משתמש
  addUser(user: user): Observable<user> {
    return this.httpClient.post<user>(`${this.baseUrl}addUser`, user)
  }
}
