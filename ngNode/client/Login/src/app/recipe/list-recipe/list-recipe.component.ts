import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/service/recipes.service';
import { RecipeModel } from 'src/app/model/recipe-model';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {
recipes: RecipeModel[];
  constructor(private recipeService: RecipesService) { 
     this.recipeService.get().subscribe(res=>{
       this.recipes = <RecipeModel[]>res
       console.log(this.recipes);

     })
  }

  ngOnInit() {
    console.log(this.recipes);
    
  }



}
