import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recipe } from 'src/app/classes/recipe';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent {

  recipe: any

  constructor(public router: Router) {
    debugger
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { recipe: any };
    this.recipe = { ...state }
  }
}
