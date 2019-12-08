import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  public getSavedRecipe(userID:any): Observable<any> {
    console.log("requested ID:" + userID)
    let params = new HttpParams().set('id', userID)
    return this.httpClient.get('/api/UserRecipes', {params}).pipe(
      map(res => res)
    );
  }

  public getRandomRecipe(): Observable<any> {
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/random.php').pipe(
      map(res => res)
    );
  }
}
