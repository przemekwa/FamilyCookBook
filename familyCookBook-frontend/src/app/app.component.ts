import { Component } from '@angular/core';
import { Recipe } from './models/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'familyCookBook-frontend';
  
  recipeList: Recipe[] = []

  constructor() {

    this.recipeList.push(new Recipe("Zupa ogórkowa"));
    this.recipeList.push(new Recipe("Zupa mleczna"));
    this.recipeList.push(new Recipe("Zupa pomidorowa"));
  }



}
