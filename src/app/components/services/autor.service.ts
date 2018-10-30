import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../models/Autor.model';

const URL_API_AUTORES = 'http://localhost:8080/autor/buscarTodos';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  /*Apenas para buscar todos do banco, Observable serve para algo que voce espera receber*/
  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(URL_API_AUTORES);
  }

}
