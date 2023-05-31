import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { NavComponent } from './components/nav/nav.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
import { ColorRedDirective } from './directieves/color-red.directive';
import { DarkLightDirective } from './directieves/dark-light.directive';
import { ToUpperPipe } from './pipes/to-bold.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    SignUpComponent,
    AddRecipeComponent,
    NavComponent,
    MoreDetailsComponent,
    ColorRedDirective,
    DarkLightDirective,
    ToUpperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
