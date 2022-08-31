import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { Contato } from '../../models/contato';
import { ContatosService } from '../../services/contatos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contatos: Contato[];


  constructor(private router: Router,
    private contatoService: ContatosService) {
      this.contatos = this.contatoService.contatos;
  }

  irParaCadastroPage(): void{
    this.router.navigate(['/cadastro']);
  }

  irParaDetalharPage(contato: Contato){
    this.router.navigateByUrl('/detalhar', {
      state: {objeto:contato}
    });
  }

}
