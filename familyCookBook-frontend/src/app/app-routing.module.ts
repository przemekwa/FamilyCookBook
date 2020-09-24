import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookListComponent } from './cook-list/cook-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: 'edit', component: RecipeEditComponent},
  { path: '', component: CookListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
