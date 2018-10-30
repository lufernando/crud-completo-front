import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria.model';

const URL_API_CATEGORIAS = 'http://localhost:8080/categoria/buscarTodos';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  /*Apenas para buscar todos do banco, Observable serve para algo que voce espera receber*/
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(URL_API_CATEGORIAS);
  }

}
