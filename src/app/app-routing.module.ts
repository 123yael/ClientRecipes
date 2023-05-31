import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';

const routes: Routes = [
  {
    path: "", component: NavComponent, children: [
      { path: "", component: HomeComponent },
      { path: "logIn", component: LogInComponent },
      { path: "signUp", component: SignUpComponent },
      { path: "addRecipe", component: AddRecipeComponent },
      { path: "home", component: HomeComponent },
      { path: "moreDetails", component: MoreDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
