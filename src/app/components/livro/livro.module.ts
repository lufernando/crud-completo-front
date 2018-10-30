import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LivroRoutingModule } from './livro-routing.module';
import { LivroFormComponent } from './form/livro-form.component';
import { LivroListComponent } from './list/livro-list.component';

@NgModule({
  imports: [
    CommonModule,
    LivroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LivroFormComponent, LivroListComponent]
})
export class LivroModule { }
