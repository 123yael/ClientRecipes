import { HttpClient } from '@angular/common/http';
import { Component, Renderer2, RendererStyleFlags2 } from '@angular/core';
import { Router } from '@angular/router';
import { recipe } from 'src/app/classes/recipe';
import { user } from 'src/app/classes/user';
import { RecipesService } from 'src/app/services/recipes.service';
import { UsersService } from 'src/app/services/users.service';
import { environment } from '../../../environment/environment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(public httpclient: HttpClient, public recipes: RecipesService, private router: Router, public users: UsersService) {
    this.recipes.getAllRecipes().subscribe(x => this.recipes.arr = x)
  }

  // פונקציה למעבר לפרטים נוספים על המתכון
  mooveToMoreDetails(r: recipe) {
    this.router.navigate(['/moreDetails'], { state: r })
  }

  // פונקציה למחיקת מוצר
  dellRecipe(nameR: string, userName: string) {
    if (this.users.currentUser.firstName === undefined) {
      let res1: boolean = window.confirm(`לא ניתן לבצע פעולת מחיקה לפני התחברות למערכת, האם ברצורך להתחבר להמערכת?`)
      if (res1) {
        this.router.navigate(['/logIn'])
      }
      return
    }
    let nameU: string = this.users.currentUser.firstName + " " + this.users.currentUser.lastName
    if (nameU != environment.managerName && nameU != userName) {
      alert("משתמשים פרטיים יכולים למחוק רק את המתכונים שהם הכניסו!!!")
      return
    }
    let res2: boolean = window.confirm(`את בטוחה שאת רוצה למחוק את המתכון בשם: ${nameR}`)
    if (res2) {
      this.recipes.dellRecipeByNameRNameU(nameR, nameU).subscribe(res => {
        console.log(res);
        this.recipes.getAllRecipes().subscribe(x => this.recipes.arr = x)
      })
    }
  }


}
