import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('hamburger', 'Description of hamburger', 'https://coconuts.co/public/field/image/slamon_burger_2_-_montine_rummel.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
