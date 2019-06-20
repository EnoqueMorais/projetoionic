import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tarefa-detail',
  templateUrl: './tarefa-detail.page.html',
  styleUrls: ['./tarefa-detail.page.scss'],
})
export class TarefaDetailPage implements OnInit {
  nome;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.nome = this.route.snapshot.paramMap.get('nome');
  }

}
