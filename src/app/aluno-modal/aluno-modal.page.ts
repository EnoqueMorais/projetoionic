import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; //importando o modal 
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-aluno-modal',
  templateUrl: './aluno-modal.page.html',
  styleUrls: ['./aluno-modal.page.scss'],
})
export class AlunoModalPage implements OnInit {

  constructor(public modalController: ModalController, private camera: Camera) { }

  ngOnInit() {

  }
  //Criando a lista com as variaveis
  novo_aluno = {
    "nome": "",
    "imagem": "",
  }
  add(){
    this.modalController.dismiss(this.novo_aluno)
  }
  take_picture(){
    
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
    this.novo_aluno.imagem='data:image/jpeg;base64,' + imageData;
    }, (err) => {
     alert(err);
    });

  }
}
