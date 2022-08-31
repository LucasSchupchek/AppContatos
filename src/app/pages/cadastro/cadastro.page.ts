import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from '../../models/contato';
import { ContatosService } from '../../services/contatos.service';
import { CadastroPageRoutingModule } from './cadastro-routing.module';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome: string;
  telefone: number;
  genero: string;
  data_nascimento: string;

  constructor(private alertController: AlertController, private router: Router, private contatosService: ContatosService) { }

  ngOnInit() {
  }

private validar(campo: any): boolean{
  if(!campo){
    return false;
  }else{
    return true;
  }
}

async presentAlert(titulo: string, subtitulo: string, msg: string) {
  const alert = await this.alertController.create({
    header: titulo,
    subHeader: subtitulo,
    message: msg,
    buttons: ['OK'],
  });

  await alert.present();
}

cadastrar(): void{
  if((this.validar(this.nome)) && (this.validar(this.telefone)) && (this.validar(this.genero)) && (this.validar(this.data_nascimento))){
    let contato: Contato = new Contato(this.nome, this.telefone, this.genero, this.data_nascimento);
    this.contatosService.inserir(contato);
    this.router.navigate(['/home']);
  }else{
    this.presentAlert("Agenda", "Erro no Cadastro", "Todos os Campos são obrigatórios");
  }
}

}