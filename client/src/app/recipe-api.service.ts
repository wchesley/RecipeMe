import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:"root"
})

export class RecipeAPIService {

  constructor(private httpClient: HttpClient) { }

  public getRecipe(){
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
  }
}
