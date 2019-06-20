import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; //importando o modal 


@Component({
  selector: 'app-tarefa-modal',
  templateUrl: './tarefa-modal.page.html',
  styleUrls: ['./tarefa-modal.page.scss'],
})
export class TarefaModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  //Criando a lista com as variaveis
  nova_tarefa = {
    "nome": ""
  }
  add(){
    this.modalController.dismiss(this.nova_tarefa)
  }

}
