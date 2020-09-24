import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookShortItemComponent } from './cook-short-item/cook-short-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { CookListComponent } from './cook-list/cook-list.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    
    AppComponent,
    CookShortItemComponent,
    RecipeEditComponent,
    CookListComponent
  ],
  imports: [
    MatCardModule ,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
