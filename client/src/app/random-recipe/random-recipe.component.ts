import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipe/recipeInterface';
import { RecipeComponent } from '../recipe/recipe.component';
import { RecipeAPIService } from '../recipe-api.service';

@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.css']
})
export class RandomRecipeComponent implements OnInit {

  recipes: Recipes[] = [];

  constructor(private recipe: RecipeAPIService) { }

  ngOnInit() {
    this.recipe.getRandomRecipe().subscribe(data => {
      //console.log(data);
      this.mapAPIRecipe(data);
      console.log("RAW RESPONSE^^^");
    })
  }

  mapAPIRecipe(rawRecipeData: any) {
    let item = rawRecipeData["meals"];
    item.forEach(element => {
        this.recipes.push({
          recipetitle: element["strMeal"],
          Instructions: element["strInstructions"],
          Img: element["strMealThumb"],
          Cuisine: element["strArea"],
          Category: element["strCategory"],
        })

        console.log(this.recipes);
      console.log("RandomrecipesAPI^");
    });
  }

}
