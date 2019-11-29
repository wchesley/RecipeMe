import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { RecipeAPIService } from '../recipe-api.service';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  details: UserDetails;
  recipes;
  recipeTitle;

  constructor(private auth: AuthenticationService, private recipe: RecipeAPIService) {}
  
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
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }
}
