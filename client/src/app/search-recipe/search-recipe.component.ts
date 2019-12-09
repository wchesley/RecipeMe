import { Component, Input,} from '@angular/core';
import { RecipeAPIService } from '../recipe-api.service';
import { UserDetails } from '../authentication.service';
import {  Recipes } from '../recipe/recipeInterface';


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
  recipeArray:Array<RecipeHelper> = new Array<RecipeHelper>();


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
    //let recipes:Recipes
    let item = rawRecipeData["meals"];
    item.forEach(element => {
      this.recipeTitle = element["strMeal"];
      this.instructions = element["strInstructions"];
      this.img = element["strMealThumb"];
      this.cuisine = element["strArea"];
      this.category = element["strCategory"];
     //recipes = ({
        //recipetitle: this.recipeTitle,
        //Instructions: this.instructions,
        //Img: this.img,
        //Cuisine: this.cuisine,
        //Category: this.category,
      //})
      let recipeList = new RecipeHelper(this.recipeTitle, this.img, this.instructions, this.cuisine, this.category); 
      this.recipeArray.push(recipeList)
      console.log("SearchedrecipesAPI^");
    });
    this.docReady = true;
    
  }

  saveRecipe(event:any) {
    console.log(event.target.form.children.img);
    console.log(event.target.form.children.instructions);
    console.log("EVENT^?")
    let body = {
      title: event.target.form.children.title.innerText,
      instructions: event.target.form.children.instructions.innerText,
      cuisine: event.target.form.children.Cuisine.innerText,
      category: event.target.form.children.Category.innerText,
      //ingredients: this.ingredients,
      imgURL: event.target.form.children.img.currentSrc,
      id: this.user._id,
    }
    console.log(body);
    console.log('BODY^^');
    //console.log(formData);
    console.log("FORMDATA^^");
    this.recipe.saveRecipe(body).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

}
export class RecipeHelper  implements Recipes {
  recipetitle: string;
  Img: string;
  Instructions: string;
  Cuisine?: string;
  Category?: string;
  constructor(title:string, img:string, instructions:string, cuisine?:string, category?:string, ingredients?:[String], measurements?:[String]) {
      this.recipetitle = title;
      this.Img = img;
      this.Instructions=instructions;
      this.Cuisine=cuisine;
      this.Category=category;
  }
  
}