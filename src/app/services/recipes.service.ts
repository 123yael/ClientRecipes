import { Injectable } from '@angular/core';
import { recipe } from '../classes/recipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  arr: Array<recipe> = new Array<recipe>()

  // משתנה גלובלי לשם השרת
  baseUrl: string = "http://localhost:8080/recipes/"

  // משתנה ציבורים לגישה לשרת
  constructor(public httpClient: HttpClient) { }

  // פונקציה שניגשת לשרת ומביאה את כל המתכונים
  getAllRecipes(): Observable<Array<recipe>> {
    return this.httpClient.get<Array<recipe>>(`${this.baseUrl}getAllRecipes`)
  }

  // פונקציה שניגשת לשרת ומביאה מתכון על ידי שם מתכון
  getRecipeByName(name: string): Observable<recipe> {
    return this.httpClient.get<recipe>(`${this.baseUrl}getRecipeByName/:${name}`)
  }

  // פונקציה שניגשת לשרת ומוסיפה מתכון
  addRecipe(recipe: recipe): Observable<recipe> {
    debugger
    return this.httpClient.post<recipe>(`${this.baseUrl}addRecipe`, recipe)
  }

  // פונקציה שניגשת לשרת ומוחקת מתכון
  dellRecipeByNameRNameU(nameR: string, nameU: string): Observable<recipe> {
    return this.httpClient.delete<recipe>(`${this.baseUrl}dellRecipeByNameRNameU/${nameR}/${nameU}`)
  }

  // פונקציה העלאת תמונה לשרת
  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file, file.name);
    return this.httpClient.post<any>(`${this.baseUrl}upload`, formData)
  }
}
