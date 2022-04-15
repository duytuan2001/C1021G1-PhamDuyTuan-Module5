import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {CreateComponent} from './create/create.component';
import {UpdateComponent} from './update/update.component';
import {DeleteComponent} from './delete/delete.component';


const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'create', component: CreateComponent},
  {path: 'delete/:id', component: DeleteComponent},
  {path: 'update/:id', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
