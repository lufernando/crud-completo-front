import { LivroService } from './../../services/livro.service';
import { Livro } from './../../models/Livro.model';
import { Categoria } from './../../models/Categoria.model';
import { Autor } from './../../models/Autor.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { AutorService } from '../../services/autor.service';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  livro: Livro;
  autores: Autor[]
  categorias: Categoria[];
  id: number;

  constructor(private service: LivroService, private route: ActivatedRoute, 
    private router: Router, private autorService: AutorService, 
    private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.livro = new Livro();
    this.autores = new Array(); //chamar api q busca autores
    this.categorias = new Array();
    /*Transforma a string idURL para number quando utilizado + , e armazena o valor no this.id */
    this.id = +this.route.snapshot.paramMap.get('idURL');
    /*Inicia com a lista de Autores e Categorias carregadas*/
    this.buscarAutores();
    this.buscarCategorias();
    /*Se tiver o id que foi recebido da URL, faz a chamada do metodo */
    if(this.id){
      this.buscarPorId();
    }
  }

  /*Metodo utilizado para armazenar ID do front e enviar para api */
  buscarPorId(): void {
    this.service.getLivroID(this.id).subscribe(livroRecebido => this.livro = livroRecebido);
  }

  cadastrar(): void {
    /*Se existir um livro com o id, faz alteração, senão realiza inserção */
    if(this.livro.id){
      this.service.putLivro(this.livro).subscribe(() => {this.livro = new Livro()
      this.router.navigate(['/livro']);
      });
    }else {
      this.service.postLivro(this.livro).subscribe(() => {this.livro = new Livro()
      this.router.navigate(['/livro']);
      });
    }
  }

  buscarAutores(){
    this.autorService.getAutores().subscribe(resp => this.autores = resp);
  }

  buscarCategorias(){
    this.categoriaService.getCategorias().subscribe(resp => this.categorias = resp);
  }

}
