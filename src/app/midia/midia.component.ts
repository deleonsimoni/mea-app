import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-midia',
  templateUrl: './midia.component.html',
  styleUrls: ['./midia.component.scss']
})
export class MidiaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  entrevistas = [
    {
      titulo: 'Entrevista com Edméa Oliveira dos Santos',
      descricao: '',
      autores: '',
      editora: '',
      comoCitar: '',
      imagem: '../assets/teccogs.jpg',
      arquivo: '',
      linkLoja: '',
      fontePdf: '',
      linkPdf:
        'http://www4.pucsp.br/pos/tidd/teccogs/edicao_completa/teccogs_cognicao_informacao-edicao_16-2017-completa.pdf',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo: 'Entrevista com os professores Marco Silva e Edméa Santos',
      descricao: '',
      autores: '',
      editora: '',
      comoCitar: '',
      imagem: '../assets/paideia.jpg',
      arquivo: '',
      linkLoja: '',
      fontePdf: '',
      linkPdf:
        'http://periodicos.unimesvirtual.com.br/index.php/paideia/article/view/31/22',
      fonteIngles: '',
      linkIngles: ''
    }
  ];

  objMidia = [
    {
      titulo: '',
      descricao: '',
      dataPublicacao: '',
      autores: '',
      programa: '',
      comoCitar: '',
      arquivo: '',
      linkVideo: ''
    }
  ];
}
