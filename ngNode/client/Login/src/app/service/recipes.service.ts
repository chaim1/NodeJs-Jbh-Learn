import { Injectable } from '@angular/core';
import { RecipeModel } from '../model/recipe-model';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private data: BehaviorSubject<RecipeModel[]>;
  private curretSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.data = new BehaviorSubject<RecipeModel[]>([]);

    setInterval(() => {
      if(this.curretSubscription&& !this.curretSubscription){
        this.curretSubscription.unsubscribe();
      }

      this.curretSubscription = this.http.get<RecipeModel[]>(environment.link + 'recipes').subscribe(a => {
        this.data.next(a)
      })
    }, 1000)
  }


  get(): Observable<Object[]> {
    return this.data;
  }
  post(data: RecipeModel): Observable<RecipeModel> {
    console.log(data);

    return this.http.post<RecipeModel>(environment.link + 'add-recipe', data);
  }
}
