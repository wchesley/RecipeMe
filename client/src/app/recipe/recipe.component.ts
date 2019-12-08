import { Component, OnInit, Input } from '@angular/core';
import { RecipeAPIService } from '../recipe-api.service';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { Recipes } from './recipeInterface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {

  recipeTitle: string;
  img;
  instructions;
  cuisine;
  category;
  ingredients: any = [];
  measurements: any = [];
  user: UserDetails;
  searchQuery: String;
  recipes: Recipes[] = [{
    recipetitle: "",
    Img: "",
    Instructions: "",
    Cuisine: "",
    Category: "",
  }];



  constructor(private recipe: RecipeAPIService, private auth: AuthenticationService) { }
  ngOnInit() {
    this.auth.profile().subscribe(data => {
      this.user = data;
      console.log(this.user.recipesList["title"]);
    }, (err) => {
      console.log(err);
    });

  }
  showSavedRecipes() {
    console.log("Fetching saved recipes...");
    console.log("Me?" + this.user._id);
    this.recipe.getSavedRecipe(this.user._id).subscribe(data => {
      let recipeData = data["recipesList"].map(data => data)
      this.mapRecipe(recipeData);
      console.log("MAYBE WE DO A THING?!");
    })
  }

  saveRecipe() {
    let body = {
      title: this.recipeTitle,
      instructions: this.instructions,
      cuisine: this.cuisine,
      category: this.category,
      //ingredients: this.ingredients,
      imgURL: this.img,
      id: this.user._id
    }
    console.log(body);
    this.recipe.saveRecipe(body).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

  searchRecipe() {
    console.log(this.user)
    this.recipe.getRecipe(this.searchQuery).subscribe(data => {
      this.mapAPIRecipe(data);
      // console.log(data);
      //this.recipes = data["meals"];
      //let keys = Object.keys(this.recipes);
      //this.recipes.forEach((recipe) => {
      //this.recipeTitle = recipe["strMeal"];
      //this.img = recipe["strMealThumb"];
      // this.instructions = recipe["strInstructions"];
      //this.cuisine = recipe["strArea"];
      // this.category = recipe["strCategory"];


    })
  }

  mapRecipe(rawRecipeData: any) {
    let recipesList = rawRecipeData
    recipesList.forEach(element => {
      this.recipes.push({
        recipetitle: element["title"],
        //console.log(this.recipeTitle)
        Img: element["imgURL"],
        Instructions: element["instructions"],
        Cuisine: element["cuisine"],
        Category: element["category"],
      })
    });
    //this.recipes.recipetitle = this.recipeTitle; <= undefined?
    console.log("ARRA BRA^")
  }

  mapAPIRecipe(rawRecipeData: any) {
    this.recipes = rawRecipeData["meals"];
    //console.log(this.recipes);
    let item = rawRecipeData["meals"];
    console.log(item);
    item.forEach(element => {
      this.recipes.push({
        recipetitle: element["strMeal"],
        Instructions: element["strInstructions"],
        Img: element["strMealThumb"],
        Cuisine: element["strArea"],
        Category: element["strCategory"],
      })
      console.log(this.recipes);
    });
  }

}
