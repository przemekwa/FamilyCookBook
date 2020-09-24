import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-cook-list',
  templateUrl: './cook-list.component.html',
  styleUrls: ['./cook-list.component.css']
})
export class CookListComponent implements OnInit {

  
  recipeList: Recipe[] = []

  constructor() {

    this.recipeList.push(new Recipe("Potrawka schabowa mamy", "Dla Julka", 1,1));
    this.recipeList.push(new Recipe("Zupa mleczna", "",2,2));
    this.recipeList.push(new Recipe("Zupa pomidorowa", "Dla Julka",3,3));
    this.recipeList.push(new Recipe("Zupa ogórkowa", "Dla Julka",4,4));
    this.recipeList.push(new Recipe("Zupa mleczna", "",5,5));
    
  }

  ngOnInit(): void {
  }

}
