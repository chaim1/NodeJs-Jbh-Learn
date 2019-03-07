import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HoneComponent } from './hone/hone.component';
import { AboutComponent } from './about/about.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { ListRecipeComponent } from './recipe/list-recipe/list-recipe.component';

const routes: Routes = [
  {path: '', component: RegisterComponent, pathMatch: 'full'},
  {path: 'home', component: HoneComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: RegisterComponent},
  {path: 'recipes', component: RecipeComponent},
  {path: 'add-recipe', component: AddRecipeComponent},
  {path: 'list-recipe', component: ListRecipeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
