import { LivroService } from '../../services/livro.service';
import { Livro } from '../../models/Livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {

  livros: Livro[];

  constructor(private service: LivroService) { }

  ngOnInit() {
    this.livros = new Array();
    /*Inicia com  a lista carregada*/
    this.buscarTodos();
  }

  buscarTodos(): void{
    this.service.getLivros().subscribe(retorno => this.livros = retorno);
  }

  /*Recebe um id no html, e utiliza para enviar na API e fazer a exclusão*/
  excluir(id: number) {
    this.service.deleteLivro(id).subscribe(() => this.buscarTodos());
  }

}
