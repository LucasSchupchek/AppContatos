import { Injectable } from '@angular/core';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  private _contatos: Contato[] = [];

  constructor() {
    let contato: Contato = new Contato("Lucas", 42988661372, "masculino", "21/03/2002");
    this.inserir(contato);
   }

  inserir(contato: Contato): void{
    this._contatos.push(contato);
  }

  editar(contato: Contato, nome: string, telefone: number, genero: string, data_nascimento: string): boolean{
    for(let i=0; i< this._contatos.length; i++){
      if(this._contatos[i].id == contato.id){
        this._contatos[i].nome = nome;
        this._contatos[i].telefone = telefone;
        this._contatos[i].genero = genero;
        this._contatos[i].data_nascimento = data_nascimento;
        return true;
      }
    }
    return false;
}

excluir(contato: Contato): boolean{
  for(let i=0; i< this._contatos.length; i++){
    if(this._contatos[i].id == contato.id){
      this._contatos.splice(i,1);
      return true;
    }
  }
  return false;
}

  get contatos(): Contato[]{
    return this._contatos;
  }

  set contatos(contatos: Contato[]){
    this._contatos = contatos;
  }
}
