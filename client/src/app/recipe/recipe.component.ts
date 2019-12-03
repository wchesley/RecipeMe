import { Component, OnInit, Input } from '@angular/core';
import { RecipeAPIService } from '../recipe-api.service';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  
  searchQuery:String;
  recipes;
  recipeTitle;
  img;
  instructions;
  cuisine; 
  category;
  ingredients:any=[];
  userdeets; 
  //measurements:any=[];

  constructor(private recipe: RecipeAPIService) {}
  saveRecipe() {
    this.userdeets = "but";
    let body = {
      title:String = this.recipeTitle,
      instructions:String = this.instructions,
      cuisine:String = this.cuisine,
      category:String = this.category,
      //ingredients:String = this.ingredients,
      imgURL:String = this.img,
      user:String = this.userdeets,
    } 
    this.recipe.saveRecipe(body).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }
  searchRecipe() {
    this.recipe.getRecipe(this.searchQuery).subscribe( data => {
      // console.log(data);
      this.recipes = data["meals"];
      let keys = Object.keys(this.recipes);
      this.recipes.forEach((recipe) => {
        this.recipeTitle = recipe["strMeal"];
        this.img = recipe["strMealThumb"];
        this.instructions = recipe["strInstructions"];
        this.cuisine = recipe["strArea"];
        this.category = recipe["strCategory"];
        keys.forEach(keyName => {
          if(keyName.includes("strIngredient") || keyName.includes("strMeasure")){

          }
        });
        this.ingredients.push(recipe["strIngredient1"] +" - "+  recipe["strMeasure1"]);
        this.ingredients.push(recipe["strIngredient2"] +" - "+  recipe["strMeasure2"]);
        this.ingredients.push(recipe["strIngredient3"] +" - "+  recipe["strMeasure3"]);
        this.ingredients.push(recipe["strIngredient4"] +" - "+ recipe["strMeasure4"]);
        this.ingredients.push(recipe["strIngredient5"] +" - "+ recipe["strMeasure5"]);
        this.ingredients.push(recipe["strIngredient6"] +" - "+ recipe["strMeasure6"]);
        this.ingredients.push(recipe["strIngredient7"] +" - "+ recipe["strMeasure7"]);
        this.ingredients.push(recipe["strIngredient8"] +" - "+ recipe["strMeasure8"]);
        this.ingredients.push(recipe["strIngredient9"] +" - "+ recipe["strMeasure9"]);
        this.ingredients.push(recipe["strIngredient10"] +" - "+ recipe["strMeasure10"]);
        this.ingredients.push(recipe["strIngredient11"] +" - "+ recipe["strMeasure11"]);
        this.ingredients.push(recipe["strIngredient12"] +" - "+ recipe["strMeasure12"]);
        this.ingredients.push(recipe["strIngredient13"] +" - "+ recipe["strMeasure13"]);
        this.ingredients.push(recipe["strIngredient14"] +" - "+ recipe["strMeasure14"]);
        this.ingredients.push(recipe["strIngredient15"] +" - "+ recipe["strMeasure15"]);
        this.ingredients.push(recipe["strIngredient16"] +" - "+ recipe["strMeasure16"]);
        this.ingredients.push(recipe["strIngredient17"] +" - "+ recipe["strMeasure17"]);
        this.ingredients.push(recipe["strIngredient18"] +" - "+ recipe["strMeasure18"]);
        this.ingredients.push(recipe["strIngredient19"] +" - "+ recipe["strMeasure19"]);
        this.ingredients.push(recipe["strIngredient20"] +" - "+ recipe["strMeasure20"]);
        
      });
      
    })
  }

}
