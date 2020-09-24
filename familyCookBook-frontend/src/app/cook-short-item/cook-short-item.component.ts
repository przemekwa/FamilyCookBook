import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-cook-short-item',
  templateUrl: './cook-short-item.component.html',
  styleUrls: ['./cook-short-item.component.css']
})
export class CookShortItemComponent implements OnInit {

  @Input() recipe: Recipe ;
  constructor() { }

  ngOnInit(): void {


  }

}
