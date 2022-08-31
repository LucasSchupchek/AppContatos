import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from 'src/app/models/contato';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {

  contato: Contato;
  nome: string;
  telefone: number;
  genero: string;
  data_nascimento: string;
  edicao: boolean = true;

  constructor(private router: Router) { 
    const nav = this.router.getCurrentNavigation();
    this.contato = nav.extras.state.objeto;
    this.nome = this.contato.nome;
    this.telefone = this.contato.telefone;
    this.genero = this.contato.genero;
    this.data_nascimento = this.data_nascimento;
  }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.contato = nav.extras.state.objeto;
    this.nome = this.contato.nome;
    this.telefone = this.contato.telefone;
    this.genero = this.contato.genero;
    this.data_nascimento = this.data_nascimento;
  }

  alterarEdicao(): void{
    if(this.edicao == false){
      this.edicao = true;
    }else{
      this.edicao = false;
    }
  }

  salvar(){}

  excluir(){}
}
