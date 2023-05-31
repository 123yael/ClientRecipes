import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { recipe } from 'src/app/classes/recipe';
import { RecipesService } from 'src/app/services/recipes.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {

  file: any

  // טופס עם משתנים מקבילים לכל השדות
  myForm: FormGroup = new FormGroup({
    "name": new FormControl(""),
    "description": new FormControl(""),
    "img": new FormControl(null),
    "level": new FormControl(null),
    "duration": new FormControl(null),
    "numberOfDishes": new FormControl(null),
    "Instructions": new FormControl(null),
    "userName": new FormControl(null),
    "components": new FormArray([this.createFormField()])
  })

  createFormField() {
    return new FormGroup({
      "name": new FormControl(''),
      "count": new FormControl('')
    });
  }

  get components() {
    return this.myForm.get('components') as FormArray;
  }

  // c-tor של המחלקה
  constructor(public httpclient: HttpClient, public recipes: RecipesService, public users: UsersService) {
  }

  // פונקצית הוספת מתכון
  addRecipe() {
    debugger
    console.log(this.myForm.value);

    let r: recipe = {
      name: this.myForm.controls["name"].value,
      description: this.myForm.controls["description"].value,
      img: this.file.name,
      level: this.myForm.controls["level"].value,
      duration: this.myForm.controls["duration"].value,
      numberOfDishes: this.myForm.controls["numberOfDishes"].value,
      Instructions: this.myForm.controls["Instructions"].value,
      userName: this.users.currentUser.firstName + " " + this.users.currentUser.lastName,
      components: this.myForm.controls["components"].value
    }

    // פונקציה העלאת תמונה לשרת
    this.recipes.uploadImage(this.file).subscribe(res => {
      debugger
      console.log(res);
    });

    // פונקציה הוספת מתכון
    this.recipes.addRecipe(r).subscribe(res => {
      debugger
      console.log(res);
    })
  }

  // פונקצית הוספת רכיב למתכון
  addFormField() {
    debugger
    this.components.push(this.createFormField());
  }

  // פונקצית הסרת רכיב ממתכון
  removeFormField(index: number) {
    this.components.removeAt(index);
  }

  // פונקציה שמשנה את המשתנה file שמחזיק את כל רכיבי התמונה שהועלתה
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
}
