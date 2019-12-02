import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn:"root"
})

export class RecipeAPIService {

  constructor(private httpClient: HttpClient) { }

  public getRecipe(query:String) {
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+query).pipe(
      map(res => res)
    );
  }
}
