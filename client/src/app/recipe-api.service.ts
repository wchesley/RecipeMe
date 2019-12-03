import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: "root"
})

export class RecipeAPIService {

  constructor(private httpClient: HttpClient, private auth: AuthenticationService) { }

  public getRecipe(query: String) {
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + query).pipe(
      map(res => res)
    );
  }

  public saveRecipe(recipe: any): Observable<any> {
    return this.httpClient.post('/api/saverecipe', recipe);
  }
}
