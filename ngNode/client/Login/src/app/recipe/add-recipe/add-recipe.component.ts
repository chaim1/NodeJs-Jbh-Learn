import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeModel } from 'src/app/model/recipe-model';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipeData: RecipeModel;
  @ViewChild('f') recipeForm: NgForm;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.recipeData={
      Name:  this.recipeForm.value.name,
      instraction: this.recipeForm.value.instraction
    }

    this.recipeService.post(this.recipeData).subscribe(success => {
      if(success){
        console.log(success);  
      }
    },errorRes => {
      console.log(errorRes);
    });
    // console.log(this.recipeForm);
    
  }
}
