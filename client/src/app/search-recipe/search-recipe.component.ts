import { Component, Input, } from '@angular/core';
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
  recipeArray: Array<RecipeHelper> = new Array<RecipeHelper>();
  ingredients: Array<String> = new Array<String>();
  measurements: Array<String> = new Array<String>();

  searchQuery: string;
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
      console.log(element)
      this.recipeTitle = element["strMeal"];
      this.instructions = element["strInstructions"];
      this.img = element["strMealThumb"];
      this.cuisine = element["strArea"];
      this.category = element["strCategory"];
      console.log(element["strIngredient1"]);
      console.log("INGREDIENT!?^^^")
      if (element["strIngredient1"] !== null) {
        if (element["strIngredient1"] !== "") {
          this.ingredients.push(element["strIngredient1"]);
          console.log(this.ingredients);
          console.log("1^")
        }
      }
      if (element["strIngredient2"] !== null) {
        if (element["strIngredient2"] !== "") {
          this.ingredients.push(element["strIngredient2"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      }
      if (element["strIngredient3"] !== null) {
        if (element["strIngredient3"] !== "") {
          this.ingredients.push(element["strIngredient3"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      } 
      if (element["strIngredient4"] !== null) {
        if (element["strIngredient4"] !== "") {
          this.ingredients.push(element["strIngredient4"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      } 
      if (element["strIngredient5"] !== null) {
        if (element["strIngredient5"] !== "") {
          this.ingredients.push(element["strIngredient5"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      } 
      if (element["strIngredient6"] !== null) {
        if (element["strIngredient6"] !== "") {
          this.ingredients.push(element["strIngredient6"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      } 
      if (element["strIngredient7"] !== null) {
        if (element["strIngredient7"] !== "") {
          this.ingredients.push(element["strIngredient7"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      } 
      if (element["strIngredient8"] !== null) {
        if (element["strIngredient8"] !== "") {
          this.ingredients.push(element["strIngredient8"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      } 
      if (element["strIngredient9"] !== null) {
        if (element["strIngredient9"] !== "") {
          this.ingredients.push(element["strIngredient9"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      } 
      if (element["strIngredient10"] !== null) {
        if (element["strIngredient10"] !== "") {
          this.ingredients.push(element["strIngredient10"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      }
      if (element["strIngredient11"] !== null) {
        if (element["strIngredient11"] !== "") {
          this.ingredients.push(element["strIngredient11"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      }
      if (element["strIngredient12"] !== null) {
        if (element["strIngredient12"] !== "") {
          this.ingredients.push(element["strIngredient12"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      }
      if (element["strIngredient13"] !== null) {
        if (element["strIngredient13"] !== "") {
          this.ingredients.push(element["strIngredient13"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      }
      if (element["strIngredient14"] !== null) {
        if (element["strIngredient14"] !== "") {
          this.ingredients.push(element["strIngredient14"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      }
      if (element["strIngredient15"] !== null) {
        if (element["strIngredient15"] !== "") {
          this.ingredients.push(element["strIngredient15"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      }
      if (element["strIngredient16"] !== null) {
        if (element["strIngredient16"] !== "") {
          this.ingredients.push(element["strIngredient16"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      }
      if (element["strIngredient17"] !== null) {
        if (element["strIngredient17"] !== "") {
          this.ingredients.push(element["strIngredient17"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      }
      if (element["strIngredient18"] !== null) {
        if (element["strIngredient18"] !== "") {
          this.ingredients.push(element["strIngredient18"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      }
      if (element["strIngredient19"] !== null) {
        if (element["strIngredient19"] !== "") {
          this.ingredients.push(element["strIngredient19"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      }
      if (element["strIngredient20"] !== null) {
        if (element["strIngredient20"] !== "") {
          this.ingredients.push(element["strIngredient20"]);
          console.log(this.ingredients);
          console.log("2^")
        }
      }
      
      if (element["strMeasure1"] !== null) {
        if (element["strMeasure1"] !== "") {
          this.measurements.push(element["strMeasure1"]);
          console.log(element["strMeasure1"]);
          console.log("1^")
        }
      }
      if (element["strMeasure2"] !== null) {
        if (element["strMeasure2"] !== "") {
          this.measurements.push(element["strMeasure2"]);
          console.log(element["strMeasure2"]);
          console.log("1^")
        }
      }
      if (element["strMeasure3"] !== null) {
        if (element["strMeasure3"] !== "") {
          this.measurements.push(element["strMeasure3"]);
          console.log(element["strMeasure3"]);
          console.log("1^")
        }
      }
      if (element["strMeasure4"] !== null) {
        if (element["strMeasure4"] !== "") {
          this.measurements.push(element["strMeasure4"]);
          console.log(element["strMeasure4"]);
          console.log("1^")
        }
      }
      if (element["strMeasure5"] !== null) {
        if (element["strMeasure5"] !== "") {
          this.measurements.push(element["strMeasure5"]);
          console.log(element["strMeasure5"]);
          console.log("1^")
        }
      }
      if (element["strMeasure6"] !== null) {
        if (element["strMeasure6"] !== "") {
          this.measurements.push(element["strMeasure6"]);
          console.log(element["strMeasure6"]);
          console.log("1^")
        }
      }
      if (element["strMeasure7"] !== null) {
        if (element["strMeasure7"] !== "") {
          this.measurements.push(element["strMeasure7"]);
          console.log(element["strMeasure7"]);
          console.log("1^")
        }
      }
      if (element["strMeasure8"] !== null) {
        if (element["strMeasure8"] !== "") {
          this.measurements.push(element["strMeasure8"]);
          console.log(element["strMeasure8"]);
          console.log("1^")
        }
      }
      if (element["strMeasure9"] !== null) {
        if (element["strMeasure9"] !== "") {
          this.measurements.push(element["strMeasure9"]);
          console.log(element["strMeasure9"]);
          console.log("1^")
        }
      }
      if (element["strMeasure10"] !== null) {
        if (element["strMeasure10"] !== "") {
          this.measurements.push(element["strMeasure10"]);
          console.log(element["strMeasure10"]);
          console.log("1^")
        }
      }
      if (element["strMeasure11"] !== null) {
        if (element["strMeasure11"] !== "") {
          this.measurements.push(element["strMeasure11"]);
          console.log(element["strMeasure11"]);
          console.log("1^")
        }
      }
      if (element["strMeasure12"] !== null) {
        if (element["strMeasure12"] !== "") {
          this.measurements.push(element["strMeasure12"]);
          console.log(element["strMeasure12"]);
          console.log("1^")
        }
      }
      if (element["strMeasure13"] !== null) {
        if (element["strMeasure13"] !== "") {
          this.measurements.push(element["strMeasure13"]);
          console.log(element["strMeasure13"]);
          console.log("1^")
        }
      }
      if (element["strMeasure14"] !== null) {
        if (element["strMeasure14"] !== "") {
          this.measurements.push(element["strMeasure14"]);
          console.log(element["strMeasure14"]);
          console.log("1^")
        }
      }
      if (element["strMeasure15"] !== null) {
        if (element["strMeasure15"] !== "") {
          this.measurements.push(element["strMeasure15"]);
          console.log(element["strMeasure15"]);
          console.log("1^")
        }
      }
      if (element["strMeasure16"] !== null) {
        if (element["strMeasure16"] !== "") {
          this.measurements.push(element["strMeasure16"]);
          console.log(element["strMeasure16"]);
          console.log("1^")
        }
      }
      if (element["strMeasure17"] !== null) {
        if (element["strMeasure17"] !== "") {
          this.measurements.push(element["strMeasure17"]);
          console.log(element["strMeasure17"]);
          console.log("1^")
        }
      }
      if (element["strMeasure18"] !== null) {
        if (element["strMeasure18"] !== "") {
          this.measurements.push(element["strMeasure18"]);
          console.log(element["strMeasure18"]);
          console.log("1^")
        }
      }
      if (element["strMeasure19"] !== null) {
        if (element["strMeasure19"] !== "") {
          this.measurements.push(element["strMeasure19"]);
          console.log(element["strMeasure19"]);
          console.log("1^")
        }
      }
      if (element["strMeasure20"] !== null) {
        if (element["strMeasure20"] !== "") {
          this.measurements.push(element["strMeasure20"]);
          console.log(element["strMeasure20"]);
          console.log("1^")
        }
      }
      
      //recipes = ({
      //recipetitle: this.recipeTitle,
      //Instructions: this.instructions,
      //Img: this.img,
      //Cuisine: this.cuisine,
      //Category: this.category,
      //})
      let recipeList = new RecipeHelper(this.recipeTitle, this.img, this.instructions, this.cuisine, this.category, this.ingredients, this.measurements);
      this.recipeArray.push(recipeList)
      console.log(recipeList)
      console.log("SearchedrecipesAPI^");
      console.log(this.recipeArray)
    });
    this.docReady = true;

  }

  saveRecipe(event: any) {
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
export class RecipeHelper implements Recipes {
  recipetitle: string;
  Img: string;
  Instructions: string;
  Cuisine: string;
  Category: string;
  Ingredient: Array<String> = new Array<String>();
  Measurement: Array<String> = new Array<String>();
  constructor(title: string, img: string, instructions: string, cuisine: string, category: string, ingredients: String[], measurements: String[]) {
    this.recipetitle = title;
    this.Img = img;
    this.Instructions = instructions;
    this.Cuisine = cuisine;
    this.Category = category;
    if (!ingredients) {
      ingredients.forEach(item => {
        this.Ingredient.push(item);
        console.log("Ingredients ADDED" + item)
      })
    }
    if (!measurements) {
      measurements.forEach(item => {
        this.Measurement.push(item);
      })
    }
  }

}