import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;



  constructor() { 

    this.recipe = new Recipe("Potrawka schabowa mamy", "Dla Julka", 1,1);

  }

  ngOnInit(): void {
  }

}
