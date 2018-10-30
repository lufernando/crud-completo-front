import { Livro } from './../models/Livro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

const URL_API_BUSCARTODOS = 'http://localhost:8080/livro/buscarTodos'
const URL_API_INSERIR = 'http://localhost:8080/livro/inserir'
const URL_API_ID = 'http://localhost:8080/livro/buscarPorId/'
const URL_API_ALTERAR = 'http://localhost:8080/livro/alterar'
const URL_API_DELETAR = 'http://localhost:8080/livro/excluir/'

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) { }

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(URL_API_BUSCARTODOS);
  }

  getLivroID(id: number): Observable<Livro> {
    return this.http.get<Livro>(URL_API_ID + id);
  }

  postLivro(livro: Livro): Observable<void> {
    return this.http.post<void>(URL_API_INSERIR, livro);
  }

  putLivro(livro: Livro): Observable<void> {
    return this.http.put<void>(URL_API_ALTERAR, livro);
  }

  deleteLivro(id: number): Observable<void> {
    return this.http.delete<void>(URL_API_DELETAR + id);
  }

}
