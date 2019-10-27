import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.scss']
})
export class ArtigosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  objArtigo = [
    {
      tipoArtigo: '',
      Título: '',
      Descrição: '',
      dataPublicação: '',
      Autores: '',
      Editora: '',
      comoCitar: '',
      Imagem: '',
      Arquivo: '',
      linkArtigo: ''
    }
  ];
}
