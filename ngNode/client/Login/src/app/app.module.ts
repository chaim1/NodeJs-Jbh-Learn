import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { HoneComponent } from './hone/hone.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { ListRecipeComponent } from './recipe/list-recipe/list-recipe.component';
import { ItemRecipeComponent } from './recipe/item-recipe/item-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    HoneComponent,
    AboutComponent,
    ContactComponent,
    RecipeComponent,
    AddRecipeComponent,
    ListRecipeComponent,
    ItemRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
