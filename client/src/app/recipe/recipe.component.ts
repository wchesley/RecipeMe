import { Component, OnInit } from '@angular/core';
import { RecipeAPIService } from '../recipe-api.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes;
  recipeTitle;

  constructor(private recipe: RecipeAPIService) { }

  ngOnInit() {
    this.recipe.getRecipe().subscribe( data => {
      // console.log(data);
      let food = data["meals"];
      let f = food[0];
      console.log(f);
      console.log(f["strMeal"])
      this.recipeTitle = f["strMeal"];
      this.recipes = f;
    })
  }

}
