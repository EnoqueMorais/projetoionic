import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AlunoModalPage } from '../aluno-modal/aluno-modal.page';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alunos = []

  constructor(private modalcontroller: ModalController, private storage: Storage) {
    this.storage.get('aluno').then((alunos) => {
      if (alunos) {
        this.alunos = alunos
      }
    })
  }
  add(retorno) {
    this.alunos.push(retorno)
    this.storage.set('aluno', this.alunos)
  }
  async exibir_modal() {
    const modal: HTMLIonModalElement =
      await this.modalcontroller.create({
        component: AlunoModalPage
      });

    await modal.present();
    modal.onDidDismiss().then((retorno) => {
      this.add(retorno.data)
    })
  }
}

