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
  
  recipes: Recipes[] = [];



  constructor(private recipe: RecipeAPIService, private auth: AuthenticationService) { }
  ngOnInit() {
    this.auth.profile().subscribe(data => {
      this.user = data;
      //console.log(this.user);
      this.mapRecipe(this.user.recipesList);
    }, (err) => {
      console.log(err);
    });
      //this.recipe.getRandomRecipe().subscribe(data => {
        //eww this is such a dirty hack to get this to work: 
        //this.user is "undefined", even right underneath 
        //the assignment call "this.user = data"; 
        //this.mapRecipe(this.user.recipesList);
      //})
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

  mapRecipe(rawRecipeData: any) {
    let recipesList = rawRecipeData
    recipesList.forEach(element => {
      this.recipes.push({
        recipetitle: element["title"],
        Img: element["imgURL"],
        Instructions: element["instructions"],
        Cuisine: element["cuisine"],
        Category: element["category"],
      })
      console.log(this.recipes)
      console.log("MYAPI^")
      
    });
    //this.recipes.recipetitle = this.recipeTitle; <= undefined?
  }

}
