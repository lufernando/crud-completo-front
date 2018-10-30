import { Categoria } from './Categoria.model';
import { Autor } from './Autor.model';

export class Livro {

    id: number;
    titulo: string;
    dataDePublicacao: string;
    autorDTO: Autor = new Autor();
    categoriaDTO: Categoria = new Categoria();

}