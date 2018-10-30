import { LivroListComponent } from './list/livro-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroFormComponent } from './form/livro-form.component';

const routes: Routes = [
  
  { path: '' , component: LivroListComponent },
  { path: 'cadastro' , component: LivroFormComponent },
  { path: 'alterar/:idURL' , component: LivroFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
