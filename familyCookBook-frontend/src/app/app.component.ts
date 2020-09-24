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

    this.recipeList.push(new Recipe("Potrawka schabowa mamy", "Dla Julka", 1));
    this.recipeList.push(new Recipe("Zupa mleczna", "",2));
    this.recipeList.push(new Recipe("Zupa pomidorowa", "Dla Julka",3));
    this.recipeList.push(new Recipe("Zupa ogórkowa", "Dla Julka",4));
    this.recipeList.push(new Recipe("Zupa mleczna", "",5));
    this.recipeList.push(new Recipe("Zupa pomidorowa", "Dla Julka",6));
    this.recipeList.push(new Recipe("Zupa ogórkowa", "Dla Julka",7));
    this.recipeList.push(new Recipe("Zupa mleczna", "",8));
    this.recipeList.push(new Recipe("Zupa pomidorowa", "Dla Julka",9));
  }



}
