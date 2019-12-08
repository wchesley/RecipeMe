import { Component, Input } from '@angular/core';
import { RecipeAPIService } from '../recipe-api.service';
import { UserDetails } from '../authentication.service';
import { Recipes } from '../recipe/recipeInterface';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})

export class SearchRecipeComponent {

  recipeTitle;
  instructions;
  img;
  cuisine;
  category;
  docReady: boolean = false;
  TesArray: { title:String, instruct:String, img, Cuisi, cate, }
  recipes: Recipes[] = [{
    recipetitle: this.recipeTitle,
    Instructions: this.instructions,
    Img: this.img,
    Cuisine: this.cuisine,
    Category: this.category,
  }];

  searchQuery: String;
  @Input() user: UserDetails;

  constructor(private recipe: RecipeAPIService) { }

  searchRecipe() {
    console.log("init Search party...")
    console.log(this.user)
    this.recipe.getRecipe(this.searchQuery).subscribe(data => {
      this.mapAPIRecipe(data);
    })
  }

  mapAPIRecipe(rawRecipeData: any) {
    let item = rawRecipeData["meals"];
    item.forEach(element => {
      this.recipeTitle = element["strMeal"];
      this.instructions = element["strInstructions"];
      this.img = element["strMealThumb"];
      this.cuisine = element["strArea"];
      this.category = element["strCategory"];
      this.recipes.push({
        recipetitle: this.recipeTitle,
        Instructions: this.instructions,
        Img: this.img,
        Cuisine: this.cuisine,
        Category: this.category,
      })
      console.log(this.recipes);
      console.log("SearchedrecipesAPI^");

    });
    this.docReady = true;

  }

  saveRecipe() {
    let body = {
      title: this.TesArray.title,
      instructions: this.TesArray.instruct,
      cuisine: this.TesArray.Cuisi,
      category: this.TesArray.cate,
      //ingredients: this.ingredients,
      imgURL: this.TesArray.img,
      id: this.user._id
    }
    console.log(body);
    this.recipe.saveRecipe(body).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

}
