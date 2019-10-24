import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-acervo',
  templateUrl: './acervo.component.html',
  styleUrls: ['./acervo.component.scss']
})
export class AcervoComponent implements OnInit {
  constructor(private modalService: BsModalService) {}

  modalRef: BsModalRef;
  livroSelecionado: any;

  ngOnInit() {}

  openModal(template: TemplateRef<any>, livro: any) {
    this.livroSelecionado = livro;
    this.modalRef = this.modalService.show(template);
  }

  livros = [
    {
      titulo: 'Pesquisa Formação na Cibercultura',
      desc:
        'A partir das atividades de pesquisas conduzidas por Edméa Santos, coordenadora do grupo de pesquisa Docència e Cibercultura da Universidade do Estado do Rio de Janeiro, cujos resultados dos projetos recentes se apresentam agora reunidos em forma de livro, a autora procede à elaboração de um novo olhar crítico sobre as questões e os contextos de desenvolvimento da cibercultura na sociedade digital, com particular ènfase para as problemáticas da docència online.Deste modo, e através da convergència das narrativas dos estudos no âmbito da formação de e-formadores, a autora conduz-nos para a análise das dimensões da cibercultura, desde a interação à mediação social, enquanto processos de participação e coautoria na criação das redes de aprendizagem e conhecimento, passando, necessariamente, pela inovação e sustentabilidade das comunidades de prática, e pela valorização da ligação entre os contextos formais e informais de experiència individual e coletiva para a criação de conhecimento na sociedade digital.É uma obra que constitui um importante contributo para a mudança e inovação no pensamento educacional e que merece a nossa maior atenção.Paulo Maria Bastos da Silva DiasReitor da Universidade Aberta, Portugal',
      imagem: '../assets/pesquisa-formação-na-cibercultura.jpg',
      link:
        'https://www.amazon.com.br/Pesquisa-Forma%C3%A7%C3%A3o-Na-Cibercultura-Edmea-Santos/dp/1793247102/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=edmea+santos&qid=1571013778&sr=8-4'
    },
    {
      titulo: 'Pesquisa e mobilidade na cibercultura: itinerâncias docentes',
      desc:
        'O livro visa promover uma compreensão das relações existentes entre a educação, tecnologias digitais e mobilidade. O principal objetivo do projeto foi entender como as tecnologias digitais e a mobilidade podem contribuir para a pesquisa e a formação no atual contexto da cibercultura em espaços formais e não formais de aprendizagem.',
      imagem: '../assets/Pesquisa-e-mobilidade-capa.jpg',
      link:
        'http://www.edufba.ufba.br/2015/11/pesquisa-e-mobilidade-na-cibercultura-itinerancias-docentes/'
    },
    {
      titulo: 'Múltiplas Linguagens nos Currículos',
      desc:
        'O livro Múltiplas Linguagens nos Currículos é uma contribuição de vários pesquisadores à atualização da prática educativa e um convite à renovadas miragens pedagógicas, através de uma coletânea de artigos que estudam temas originais mas interativos entre as vivênciasdas cidades e da cibercultura, tais como: letramento digital, recursos educacionais abertos, e-acessibilidade, webquest, jogos eletrônicos, lousa digital, pedagogia das imagens, audiovisual fotografia, HQs e rádio. ',
      imagem: '../assets/multiplas-linguagens-nos-curriculos-763418.jpg',
      link:
        'https://www.abeu.org.br/farol/abeu/catalogo-unificado/item/editora-ufpb/multiplas-linguagens-nos-curriculos/289077/'
    },
    {
      titulo: 'App-learning: experiências de pesquisa e formação',
      desc:
        'O livro traz um conjunto de estudos e experiências de professores/pesquisadores que praticam o que Lucia Santaella (2016) nomeia, no prefácio, como App-Learning. Isto é, o uso de determinados aplicativos para celulares, tablets e computadores como estratégias pedagógicas que ajudam a desenvolver a autonomia de professores e alunos. Os relatos reunidos enfatizam os desafios e as dinâmicas que os aplicativos proporcionam em diversos processos de pesquisa, extensão, ensino e aprendizagem na era das conectividades.',
      imagem: '../assets/AppLearning_capa.jpg',
      link:
        'http://www.edufba.ufba.br/2016/12/app-learning-experiencias-de-pesquisa-e-formacao/'
    },
    {
      titulo: 'TECCOGS - Revista digital de tecnologias cognitivas',
      desc:
        'O livro traz um conjunto de estudos e experiências de professores/pesquisadores que praticam o que Lucia Santaella (2016) nomeia, no prefácio, como App-Learning. Isto é, o uso de determinados aplicativos para celulares, tablets e computadores como estratégias pedagógicas que ajudam a desenvolver a autonomia de professores e alunos. Os relatos reunidos enfatizam os desafios e as dinâmicas que os aplicativos proporcionam em diversos processos de pesquisa, extensão, ensino e aprendizagem na era das conectividades.',
      imagem: '../assets/teccogs.jpg',
      link:
        'http://www4.pucsp.br/pos/tidd/teccogs/edicao_completa/teccogs_cognicao_informacao-edicao_16-2017-completa.pdf'
    },
    {
      titulo: 'PAIDÉI@ - Revista Científica de educação a distância',
      desc:
        'O livro traz um conjunto de estudos e experiências de professores/pesquisadores que praticam o que Lucia Santaella (2016) nomeia, no prefácio, como App-Learning. Isto é, o uso de determinados aplicativos para celulares, tablets e computadores como estratégias pedagógicas que ajudam a desenvolver a autonomia de professores e alunos. Os relatos reunidos enfatizam os desafios e as dinâmicas que os aplicativos proporcionam em diversos processos de pesquisa, extensão, ensino e aprendizagem na era das conectividades.',
      imagem: '../assets/paideia.jpg',
      link:
        'http://periodicos.unimesvirtual.com.br/index.php/paideia/article/view/31/22'
    }
  ];
}
