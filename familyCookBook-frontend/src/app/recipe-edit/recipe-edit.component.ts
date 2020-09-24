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

    this.recipe = new Recipe("Potrawka schabowa mamy", "Na 4 porcje", 1,1, 
    ["6 kotletów schabowych",
    "2 male marchewki",
    "1/4 selera",
    "1 mala pietruszka",
    "Lisc laurowy - 2",
    "Ziele ang - 2",
    "Pieprz kolorowy (szczególnie biały, zielony)",
    "majeranek"
  ]);

  }

  ngOnInit(): void {
  }

}
