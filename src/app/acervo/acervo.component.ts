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
      descricao:
        'A partir das atividades de pesquisas conduzidas por Edméa Santos, coordenadora do grupo de pesquisa Docència e Cibercultura da Universidade do Estado do Rio de Janeiro, cujos resultados dos projetos recentes se apresentam agora reunidos em forma de livro, a autora procede à elaboração de um novo olhar crítico sobre as questões e os contextos de desenvolvimento da cibercultura na sociedade digital, com particular ènfase para as problemáticas da docència online.Deste modo, e através da convergència das narrativas dos estudos no âmbito da formação de e-formadores, a autora conduz-nos para a análise das dimensões da cibercultura, desde a interação à mediação social, enquanto processos de participação e coautoria na criação das redes de aprendizagem e conhecimento, passando, necessariamente, pela inovação e sustentabilidade das comunidades de prática, e pela valorização da ligação entre os contextos formais e informais de experiència individual e coletiva para a criação de conhecimento na sociedade digital.É uma obra que constitui um importante contributo para a mudança e inovação no pensamento educacional e que merece a nossa maior atenção.Paulo Maria Bastos da Silva DiasReitor da Universidade Aberta, Portugal',
      autores: 'Edméa Santos',
      editora: 'WHITEBOOKS',
      comoCitar: '',
      imagem: '../assets/pesquisa-formação-na-cibercultura.jpg',
      arquivo: '',
      linkLoja:
        'https://www.amazon.com.br/Pesquisa-Forma%C3%A7%C3%A3o-Na-Cibercultura-Edmea-Santos/dp/1793247102/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=edmea+santos&qid=1571013778&sr=8-4',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo: 'Pesquisa e mobilidade na cibercultura: itinerâncias docentes',
      descricao:
        'O livro visa promover uma compreensão das relações existentes entre a educação, tecnologias digitais e mobilidade. O principal objetivo do projeto foi entender como as tecnologias digitais e a mobilidade podem contribuir para a pesquisa e a formação no atual contexto da cibercultura em espaços formais e não formais de aprendizagem.',
      autores:
        'Cristiane Porto, Edméa Santos, Maria Luíza Oswald e Edvaldo Couto (Org.)',
      editora: 'Edufba',
      comoCitar: '',
      imagem: '../assets/Pesquisa-e-mobilidade-capa.jpg',
      arquivo: '',
      linkLoja:
        'http://www.edufba.ufba.br/2015/11/pesquisa-e-mobilidade-na-cibercultura-itinerancias-docentes/',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo: 'Múltiplas Linguagens nos Currículos',
      descricao:
        'O livro Múltiplas Linguagens nos Currículos é uma contribuição de vários pesquisadores à atualização da prática educativa e um convite à renovadas miragens pedagógicas, através de uma coletânea de artigos que estudam temas originais mas interativos entre as vivênciasdas cidades e da cibercultura, tais como: letramento digital, recursos educacionais abertos, e-acessibilidade, webquest, jogos eletrônicos, lousa digital, pedagogia das imagens, audiovisual fotografia, HQs e rádio.',
      autores: 'Edméa Santos',
      editora: 'EDITORA UFPB',
      comoCitar: '',
      imagem: '../assets/multiplas-linguagens-nos-curriculos-763418.jpg',
      arquivo: '',
      linkLoja:
        'https://www.abeu.org.br/farol/abeu/catalogo-unificado/item/editora-ufpb/multiplas-linguagens-nos-curriculos/289077/',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo: 'App-learning: experiências de pesquisa e formação',
      descricao:
        'O livro traz um conjunto de estudos e experiências de professores/pesquisadores que praticam o que Lucia Santaella (2016) nomeia, no prefácio, como App-Learning. Isto é, o uso de determinados aplicativos para celulares, tablets e computadores como estratégias pedagógicas que ajudam a desenvolver a autonomia de professores e alunos. Os relatos reunidos enfatizam os desafios e as dinâmicas que os aplicativos proporcionam em diversos processos de pesquisa, extensão, ensino e aprendizagem na era das conectividades.',
      autores: 'Edvaldo Couto, Cristiane Porto, Edméa Santos (Org.)',
      editora: 'Edufba',
      comoCitar: '',
      imagem: '../assets/AppLearning_capa.jpg',
      arquivo: '',
      linkLoja:
        'http://www.edufba.ufba.br/2016/12/app-learning-experiencias-de-pesquisa-e-formacao/',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo: 'TECCOGS - Revista digital de tecnologias cognitivas',
      descricao:
        'O livro traz um conjunto de estudos e experiências de professores/pesquisadores que praticam o que Lucia Santaella (2016) nomeia, no prefácio, como App-Learning. Isto é, o uso de determinados aplicativos para celulares, tablets e computadores como estratégias pedagógicas que ajudam a desenvolver a autonomia de professores e alunos. Os relatos reunidos enfatizam os desafios e as dinâmicas que os aplicativos proporcionam em diversos processos de pesquisa, extensão, ensino e aprendizagem na era das conectividades.',
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
      titulo: 'PAIDÉI@ - Revista Científica de educação a distância',
      descricao:
        'O livro traz um conjunto de estudos e experiências de professores/pesquisadores que praticam o que Lucia Santaella (2016) nomeia, no prefácio, como App-Learning. Isto é, o uso de determinados aplicativos para celulares, tablets e computadores como estratégias pedagógicas que ajudam a desenvolver a autonomia de professores e alunos. Os relatos reunidos enfatizam os desafios e as dinâmicas que os aplicativos proporcionam em diversos processos de pesquisa, extensão, ensino e aprendizagem na era das conectividades.',
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
    },
    {
      titulo: 'Mídias e Tecnologias na Educação Presencial e a Distância',
      descricao:
        'Ampliando o sentido de conceitos como tecnologia, educação e aprendizagem, Mídias e Tecnologias na Educação Presencial e a Distância busca tirar proveito do dinamismo e da diversidade das novas tecnologias e mídias disponíveis e cada vez mais acessíveis para recriar na sala de aula (física e virtual) a complexidade das relações educativas e, acima de tudo, fazer com que os objetos de estudo sejam realmente elementos que componham a “vida do lado de fora”. Elaborada a partir de pesquisas e práticas pedagógicas, esta obra é dirigida a estudantes e docentes de licenciatura que buscam uma nova perspectiva e uma verdadeira mudança de paradigmas na educação.',
      autores: 'Edméa Santos',
      editora: 'LTC',
      comoCitar: '',
      imagem: '../assets/midias-e-tecnologias.jpg',
      arquivo: '',
      linkLoja:
        'https://www.amazon.com.br/Mídias-Tecnologias-Educação-Presencial-Distância/dp/8521626568/ref=sr_1_2?__mk_pt_BR=ÅMÅŽÕÑ&keywords=edmea+santos&qid=1571014252&sr=8-2',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo: 'Facebook e educação: publicar, curtir, compartilhar',
      descricao:
        'A obra apresenta elementos capazes de instigar a reflexão sobre a mídia social Facebook nos mais diversos contextos e situações, envolvendo os usos que as pessoas fazem dessa mídia; os temas que surgem e como esses se configuram enquanto objeto de estudo num ambiente de diálogo; os potenciais sociotécni­cos e educacionais da rede, enquanto espaços de subjetivação, sociabilidade e diferença; bem como os usos do Facebook no ensino superior e na formação continuada de professores.',
      autores: 'Cristiane Porto, Edméa Oliveira dos Santos',
      editora: 'SciELO - EDUEPB',
      comoCitar: '',
      imagem: '../assets/facebook.jpg',
      arquivo: '',
      linkLoja:
        'https://www.amazon.com.br/Facebook-educa%C3%A7%C3%A3o-publicar-curtir-compartilhar-ebook/dp/B0187Q5LE8/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=edmea+santos&qid=1571014338&sr=8-3',
      fontePdf: '',
      linkPdf:
        'http://www.uepb.edu.br/download/ebooks/Facebook-and-Education.pdf',
      fonteIngles: '',
      linkIngles:
        'http://www.uepb.edu.br/download/ebooks/Facebook-and-Education.pdf'
    },
    {
      titulo:
        'Diário Online: Dispositivo multirreferencial de pesquisa-formação na cibercultura',
      descricao:
        'Nesta obra, coordenada pela Professora Edméa Santos, são apresentados três trabalhos desenvolvidos em Programas de Pós-Graduação em Educação da Região Sudeste (UERJ) e da Região Nordeste do Brasil (UFBA e UERN). Trata-se de uma investigação que promove uma reflexão aprofundada no campo da pesquisa-formação multirreferencial, via diários online, e que constitui um importante contributo no movimento de criar recursos e dispositivos para gerar estratégias de pesquisa-formação mais eficazes e com mais qualidade. O livro desdobra-se em três capítulos, muito bem documentados e de interessante leitura, que nos apresentam, simultaneamente, sínteses informativas e interpeladoras sobre a temática em questão.',
      autores:
        'Edméa Santos, J. António Moreira, António Gomes Ferreira, Daniela Melaré Barros, Angélica Monteiro',
      editora: 'WHITEBOOKS',
      comoCitar: '',
      imagem: '../assets/diario-online.jpg',
      arquivo: '',
      linkLoja:
        'https://www.amazon.com.br/Di%C3%A1rio-Online-multirreferencial-pesquisa-forma%C3%A7%C3%A3o-Contempor%C3%A2neas-ebook/dp/B00O6F78KA/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=edmea+santos&qid=1571013973&sr=8-1',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo: 'Currículos. Teorias E Práticas',
      descricao:
        'Mais um importante lançamento da Série Educação Teorias e Práticas do Currículo pode ser considerada uma obra multirreferencial pela experiência reunida de seus vinte e três integrantes e pela abrangência dos conteúdos. Todos os colaboradores são experientes docentes e pesquisadores da área de Educação que reúnem em um só livro os fundamentos e os dados de pesquisas acadêmicas com narrativas dos cotidianos das artes e redes educativas. Por encontrar-se inserida na contemporaneidade das discussões sobre currículos esta obra é voltada a estudantes de graduação em educação comunicação e áreas relacionadas além de docentes dos cursos de licenciaturas e interessados no tema.',
      autores: 'Edméa Santos',
      editora: 'LTC',
      comoCitar: '',
      imagem: './assets/curriculos-teoria-e-praticas.jpg',
      arquivo: '',
      linkLoja:
        'https://www.amazon.com.br/Curr%C3%ADculos-Teorias-Pr%C3%A1ticas-S%C3%A9rie-Educa%C3%A7%C3%A3o/dp/8521621086/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=edmea+santos&qid=1571014419&sr=8-6',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    }
    /* {
      titulo: '',
      descricao: '',
      autores: '',
      editora:'',
      comoCitar: '',
      imagem: '',
      arquivo: '',
      linkLoja: '',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    } */
  ];
}
