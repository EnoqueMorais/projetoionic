import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TarefaModalPage } from '../tarefa-modal/tarefa-modal.page';
@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.page.html',
  styleUrls: ['./tarefa.page.scss'],
})
export class TarefaPage {
  tarefas = [];
  constructor(private modalcontroller: ModalController, private storage: Storage) {
    this.storage.get('tarefa').then((tarefas) => {
      if (tarefas) {
        this.tarefas = tarefas;
      }
    });
  }
  add(tarefa) {
    this.tarefas.push(tarefa);
    this.storage.set('tarefa', this.tarefas);
  }
  async modal() {
    const modal: HTMLIonModalElement = await this.modalcontroller.create({
      component: TarefaModalPage
    });
    await modal.present();
    modal.onDidDismiss().then((tarefa) => {
      this.add(tarefa.data);
    });
  }
}
