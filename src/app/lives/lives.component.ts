import {
  Component,
  OnInit,
  SecurityContext,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { LivesModalComponent } from '@app/modals/lives-modal/lives-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-lives',
  templateUrl: './lives.component.html',
  styleUrls: ['./lives.component.scss']
})
export class LivesComponent implements OnInit {
  constructor(
    protected _sanitizer: DomSanitizer,
    public matDialog: MatDialog
  ) {}

  modalRef: BsModalRef;
  livroSelecionado: any;
  pageOfItems: Array<any>;
  livesSplit: any;

  ngOnInit() {
    this.lives.forEach((live: any) => {
      if (live.link && live.link.includes('watch')) {
        live.link = live.link.replace('watch?v=', 'embed/');
      }
      live.linkSafe = this._sanitizer.bypassSecurityTrustResourceUrl(live.link);
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  openModal(idModal: any) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';

    switch (idModal) {
      case 1:
        this.livesSplit = this.livesCovid;
        // https://material.angular.io/components/dialog/overview
        const modalDialog = this.matDialog.open(
          LivesModalComponent,
          dialogConfig
        );

        break;

      default:
        break;
    }
  }

  livesCovid: any = [
    {
      nome: 'Interatividade na Docência Online ',
      link: 'https://www.youtube.com/watch?v=ALrxcaaYgMk',
      data: '2020-08-18',
      instituicao: 'UFRRJ',
      showVideo: true
    },
    {
      nome: 'Comunicação Síncrona, Potenciais dos Bate-Papos (Chat) ',
      link: 'https://www.youtube.com/watch?v=dZ5kHRhFXZE',
      data: '2020-08-24',
      instituicao: 'UNIRIO',
      showVideo: true
    },
    {
      nome: 'Cibervídeos na Educação Online ',
      link: 'https://www.youtube.com/watch?v=qxLIaYm6_tI',
      data: '2020-08-03',
      instituicao: 'IFRJ',
      showVideo: true
    },
    {
      nome: 'Conteúdos em Hipertexto: Potenciais para Educação Online',
      link: 'https://www.youtube.com/watch?v=fJ6t1nFa5Lg',
      data: '2020-09-14',
      instituicao: 'UERJ',
      showVideo: true
    },
    {
      nome: 'e-Acessibilidade em Ambientes Virtuais de Aprendizagem ',
      link: 'https://www.youtube.com/watch?v=T3ujp35-OJo',
      data: '2020-09-21',
      instituicao: 'UERJ',
      showVideo: true
    },
    {
      nome: 'Escrita Colaborativa e Interface Wiki',
      link: 'https://www.youtube.com/watch?v=Yk5u3EZoECM',
      data: '2020-09-28',
      instituicao: 'UERJ',
      showVideo: true
    },
    {
      nome: 'Avaliação da Aprendizagem Online na Área de Exatas',
      link: 'https://www.youtube.com/watch?v=lIJas60P_M4',
      data: '2020-10-19',
      instituicao: 'UFRRJ',
      showVideo: true
    },
    {
      nome: 'Ensino de Engenharia Online ',
      link: 'https://www.youtube.com/watch?v=GrOB-uLAjPo',
      data: '2020-10-26',
      instituicao: 'FURB',
      showVideo: true
    },
    {
      nome: 'Docência Colaborativa',
      link: 'https://www.youtube.com/watch?v=vrpsVLAa7b4',
      data: '2020-11-09',
      instituicao: 'UERJ',
      showVideo: true
    },
    {
      nome: 'Educação Museal On-line',
      link: 'https://www.youtube.com/watch?v=7MZA1tf-MD4',
      data: '2020-11-16',
      instituicao: 'UERJ',
      showVideo: true
    },
    {
      nome: 'Coreografias Didáticas na Educação On-Line',
      link: 'https://www.youtube.com/watch?v=kZJ1F1f51J4',
      data: '2020-11-23',
      instituicao: 'UFPE',
      showVideo: true
    },
    {
      nome: 'Didática Universitária: desafio da formação docente',
      link: 'https://www.youtube.com/watch?v=mTht7kegOI0',
      data: '2020-11-30',
      instituicao: 'UFBA',
      showVideo: true
    }
  ];

  lives: any = [
    {
      nome: 'Lives e conversas na pandemia COVID 19',
      link: null,
      data: '2020-01-19',
      instituicao: '',
      showVideo: false,
      openModal: true
    },
    {
      nome:
        'Educação em roda de conversas: fazeres e reconfigurações no contexto atual',
      link:
        'https://www.youtube.com/playlist?list=PLiXEBKuR7MNbVqIiIuAtl4Uy2LDSYurym',
      data: '2020-05-06',
      instituicao: 'UERJ',
      showVideo: false
    },
    {
      nome:
        'Cibercultura e Educação” : Conversa com a professora mestra Sara York',
      link: 'https://www.youtube.com/watch?v=y5YhUW5CQdI',
      data: '08-05-2020',
      instituicao: '',
      showVideo: true
    },
    {
      nome: 'Encontros formativos do grupo de pesquisa',
      link:
        'https://www.youtube.com/playlist?list=PLiXEBKuR7MNbVqIiIuAtl4Uy2LDSYurym',
      data: '12-05-2020',
      instituicao: 'DIFEBA/UNEB',
      showVideo: false
    },
    {
      nome:
        'Mesa redonda: Utilização de tecnologias digitais para a educação superior: os desafios da inclusão e das metodologias de aprendizagem.',
      link: 'http://www.youtube.com/watch?v=ZL8h7hH_FAo',
      data: '19-05-2020',
      instituicao: 'ForGRAD',
      showVideo: true
    },
    {
      nome:
        'Mesa redonda: Formação de professores, educação online e inclusão digital. ',
      link: 'https://www.youtube.com/watch?v=UD0KrPkHBiY',
      data: '21-05-2020',
      instituicao: 'UFBA',
      showVideo: true
    },
    {
      nome:
        'Lives do Centro Acadêmico do Curso de Pedagogia da Universidade Federal Rural do Rio de Janeiro (UFRRJ) sobre Educação a Distância e Pandemia.',
      link: 'https://www.instagram.com/p/CAgdP-Bj_X0/embed',
      data: '22-05-2020',
      instituicao: 'UFRRJ',
      showVideo: true
    },
    {
      nome: 'Educação online: um caminho possível? ',
      link: 'https://www.youtube.com/watch?v=8qwsCz2Ikos',
      data: '26-05-2020',
      instituicao: 'UEFS',
      showVideo: true
    },
    {
      nome: 'Debate: Educação em tempos de pandemia: diálogos e conexões.',
      link: 'https://www.youtube.com/watch?v=J_iQAmRQVm4',
      data: '27-05-2020',
      instituicao: 'Rede Unida',
      showVideo: true
    },
    {
      nome:
        'Lançamento do livro “O livro na cibercultura”, com palestra proferida pelo professor doutor Eugênio Trivinho (PUC-SP) sob o título “O livro e seus demônios: cultura digital, capitalismo cognitivo e neofascismo”',
      link: 'https://meet.google.com/dtg-abau-gqk?pli=1&authuser=1',
      data: '28-05-2020',
      instituicao: 'UERJ',
      showVideo: false
    },
    {
      nome:
        'Lives aprendizagens: Conversa com os educadores Edméa Santos (UFRRJ) e Marco Silva (UERJ). ',
      link: 'https://www.youtube.com/watch?v=ZLbBFrZ8cvM',
      data: '28-05-2020',
      instituicao: 'UFPE',
      showVideo: true
    },
    {
      nome:
        'Live: “Dispositivos e interfaces para avaliação formativa da educação online”. Webinário: “O que esperar do Ensino e da Aprendizagem pós-Covid-19?” ',
      link: 'https://www.youtube.com/watch?v=aJgQiMKEeX8',
      data: '04-06-2020',
      instituicao: 'Universidade de Coimbra e PUC-PR',
      showVideo: true
    },
    {
      nome:
        'Mesa redonda: “Tecnologias Digitais, Games e Multiletramentos". Tema da fala: “Avaliação formativa em educação online”.',
      link: 'https://www.youtube.com/watch?v=GlW1smxEgDQ',
      data: '04-06-2020',
      instituicao: 'UNEB',
      showVideo: true
    },
    {
      nome:
        'Roda de conversa sobre “Educação Online e Docência Colaborativa!”. ',
      link: 'https://www.youtube.com/watch?v=jcMxiN_9Bkg',
      data: '10-06-2020',
      instituicao: 'UFAL',
      showVideo: true
    },
    {
      nome: 'Live do Curso de extensão “Práticas pedagógicas na cibercultura”.',
      link:
        'https://www.facebook.com/watch/live/?v=374006113576610&ref=watch_permalink',
      data: '17-06-2020',
      instituicao: 'UFS',
      showVideo: false
    },
    {
      nome:
        '“Educação a Distância e Ensino Remoto: conhecendo suas diferenças e potencialidades”',
      link: 'https://www.youtube.com/watch?v=akXqJde1Dnw',
      data: '01-07-2020',
      instituicao: 'UFRPE',
      showVideo: true
    },
    {
      nome: 'Lançamento do Blog do GT 16 – Educação e Comunicação ',
      link: 'https://www.youtube.com/watch?v=0fZaf6xr3JE',
      data: '01-07-2020',
      instituicao: 'ANPED',
      showVideo: true
    },
    {
      nome:
        '“Educação à distância e ensino remoto: diferenças e potencialidades” ',
      link: 'https://www.youtube.com/watch?v=9W_zjLmR2XM',
      data: '13-07-2020',
      instituicao: 'UFRRJ',
      showVideo: true
    },
    {
      nome:
        'ESPPE Debate Virtual – “Educação Online e processos formativos para trabalhadores do SUS durante e pós-pandemia: desafios ético, técnicos e políticos”',
      link: 'https://www.youtube.com/watch?v=n3vGrYBTHkc',
      data: '14-07-2020',
      instituicao: 'ESPPE',
      showVideo: true
    },
    {
      nome:
        'Encontro com o GEPLET – Grupo de Estudo e Pesquisa em Multiletramentos, Educação e Tecnologia – “Desenho didático e Multiletramentos críticos na Educação Online” ',
      link: 'https://www.facebook.com/115150276853227/videos/639659433311027/',
      data: '16-07-2020',
      instituicao: 'UNEB',
      showVideo: false
    },
    {
      nome: '“Quebrando tabu: EaD, palavra proibida” ',
      link: 'https://www.youtube.com/watch?v=oX3ziwrqNbo ',
      data: '20-07-2020',
      instituicao: 'UFRRJ',
      showVideo: true
    },
    {
      nome:
        'GPDOC Rural - “Fact-Checking + Educação: com o dispositivo de pesquisa Reglus”',
      link: 'https://www.youtube.com/watch?v=yeeVxJM2PCc ',
      data: '22-07-2020',
      instituicao: 'UFRRJ',
      showVideo: true
    },
    {
      nome:
        'Encontro com o coletivo da FACED/UFU - “Currículos e didáticas online: experiências e proposições em defesa da universidade pública”',
      link: '',
      data: '23-07-2020',
      instituicao: 'UFU',
      showVideo: false
    },
    {
      nome: '“Educação interativa da pandemia e na pós-pandemia” ',
      link: 'https://www.youtube.com/watch?v=VNI4KPPfpK4 ',
      data: '24-07-2020',
      instituicao: 'UFRJ',
      showVideo: true
    },
    {
      nome:
        'Conferência Acompanhamento Pedagógico e Educação Online: “Desenho didático para curso online e mediação online interativa” ',
      link: 'https://www.youtube.com/watch?v=jTDs91HoFfY ',
      data: '24-07-2020',
      instituicao: 'FUNDAÇÃO CECIERJ',
      showVideo: true
    },
    {
      nome:
        'Webinar Educações em Rede – “Cibercultura e práticas educativas em rede” ',
      link: 'https://www.youtube.com/watch?v=7ueT828nyBc ',
      data: '28-07-2020',
      instituicao: 'Educações em Rede ',
      showVideo: true
    },
    {
      nome:
        'Webinário PROIAC/PROGRAD/UFF – “Desenho didático online: Desafios para a educação superior” ',
      link: 'https://www.youtube.com/watch?v=lOoNPFSUMV8 ',
      data: '29-07-2020',
      instituicao: 'PROGRAD/UFF',
      showVideo: true
    },
    {
      nome: 'Educação online: fenômeno da cibercultura',
      link: 'https://bityli.com/qkY3b',
      data: '04-08-2020',
      instituicao:
        'IV Encuentro Internacional Perspectivas sobre educación virtual y educación presencial: Dilemas compartidos, dentro del III Ciclo de conversatorios internacionales Horizontes Humanos de Kalkan Horizontes Humanos de Kalkan(Colombia), Universidad de Manizales(Colombia) e Centro Universitário Jorge Amado(Brasil) ',
      showVideo: false
    },
    {
      nome:
        'EAD, palavra proibida. O que estamos fazendo e o que faremos pós-pandemia ',
      link: 'https://www.youtube.com/watch?v=vAQaBbS2pkk',
      data: '05-08-2020',
      instituicao: 'Unesp',
      showVideo: true
    },
    {
      nome:
        'Temas emergentes da Sala de Aula Online: Avaliação da aprendizagem ',
      link: 'https://www.youtube.com/watch?v=pvQ4U_VILGU',
      data: '07-08-2020',
      instituicao: 'UFBA',
      showVideo: true
    },
    {
      nome: '[Mesa4]: Avaliação da aprendizagem on-line',
      link: 'https://www.youtube.com/watch?v=kX5dlplTzDs',
      data: '12-08-2020',
      instituicao: 'UESB',
      showVideo: true
    },
    {
      nome:
        '[Proposição PROGEAC] Mediação pedagógica e avaliação na educação mediada por tecnologias.',
      link: 'https://www.youtube.com/watch?v=yQIqaz33llw',
      data: '13-08-2020',
      instituicao: 'UFSB',
      showVideo: true
    },
    {
      nome:
        'Aula aberta parte do curso de capacitação “Docência e Didática para ambientes virtuais de Aprendizagens” - Interatividade na docência online.',
      link: 'https://www.youtube.com/watch?v=ALrxcaaYgMk',
      data: '17-08-2020',
      instituicao: 'CODEP/UFRRJ',
      showVideo: true
    },
    {
      nome:
        'Live de Lançamento do livro - O caminhar na educação- Narrativas de aprendizagens, pesquisa e formação',
      link: 'https://www.youtube.com/watch?v=igoNSBDtk3k',
      data: '19-08-2020',
      instituicao: 'GPDOC/UFRRJ',
      showVideo: true
    },
    {
      nome: 'Aula inaugural - Educação online interdisciplinar ',
      link: '',
      data: '20-08-2020',
      instituicao: 'CPII ',
      showVideo: true
    },
    {
      nome: 'Comunicação Síncrona, Potenciais dos Bate-Papos',
      link: 'https://www.youtube.com/watch?v=dZ5kHRhFXZE',
      data: '24-08-2020',
      instituicao: 'CODEP/UFRRJ',
      showVideo: true
    },
    {
      nome: 'Lançamento do livro “APP-Education"',
      link: 'https://www.youtube.com/watch?v=XVXSwaTXFA4',
      data: '26-08-2020',
      instituicao: 'EDUFBA/UFBA ',
      showVideo: true
    },
    {
      nome: 'Práticas Educativas e Avaliação online em tempos pandêmicos.',
      link: 'https://www.youtube.com/watch?v=bTUhj1lf3SA',
      data: '26-08-2020',
      instituicao: 'IFBA',
      showVideo: true
    },
    {
      nome: 'Cibervídeos na Educação Online',
      link: 'https://www.youtube.com/watch?v=qxLIaYm6_tI',
      data: '26-08-2020',
      instituicao: 'CODEP/UFRRJ',
      showVideo: true
    },
    {
      nome: 'A pesquisa na cibercultura',
      link: '',
      data: '01-09-2020',
      instituicao: 'Grupo de pesquisa GELITIC',
      showVideo: true
    },
    {
      nome:
        '- Webnário formativo - Caminhos Ubíquos: pesquisa-formação na cibercultura',
      link: 'https://www.youtube.com/watch?v=AKmuwGmczaY',
      data: '01-09-2020',
      instituicao: 'UFRB',
      showVideo: true
    },
    {
      nome: 'Reconfigurações e desafios da educação no contexto atual',
      link: 'https://www.youtube.com/watch?v=h9oyiDZS70M ',
      data: '03-09-2020',
      instituicao: 'INU/UERJ',
      showVideo: true
    },
    {
      nome: 'Webconversa - Pesquisa-formação na cibercultura',
      link:
        'https://www.facebook.com/watch/?v=713107836216395&extid=RlGFFzNNTVStUspW',
      data: '03-09-2020',
      instituicao: 'EAL/UERJ',
      showVideo: false
    },
    {
      nome: 'Educação online para um ensino-aprendizagem (trans)formador SAMBA',
      link: 'https://www.youtube.com/watch?v=aALyBlfUTn4 ',
      data: '08-09-2020',
      instituicao: 'SAMBA/UERN ',
      showVideo: true
    },
    {
      nome: 'Conteúdos em hipertexto: Potencias para educação online',
      link: 'https://www.youtube.com/watch?v=fJ6t1nFa5Lg ',
      data: '14-09-2020',
      instituicao: 'CODEP/UFRRJ',
      showVideo: true
    },
    {
      nome: 'Desenho didático online',
      link: '',
      data: '21-09-2020',
      instituicao: 'CODEP/UFRRJ',
      showVideo: true
    },
    {
      nome: 'E-acessibilidade em ambientes virtuais de aprendizagem',
      link: 'https://www.youtube.com/watch?v=T3ujp35-OJo ',
      data: '21-09-2020',
      instituicao: 'CODEP/UFRRJ',
      showVideo: true
    },
    {
      nome: 'Escrita colaborativa e interface wiki',
      link: 'https://www.youtube.com/watch?v=Yk5u3EZoECM ',
      data: '28-09-2020',
      instituicao: 'CODEP/UFRRJ',
      showVideo: true
    },
    {
      nome: 'Webnário- Saberes da docência on-line',
      link: 'https://www.youtube.com/watch?v=AsYRuJIU200',
      data: '01-10-2020',
      instituicao: 'IFBA Eunápolis',
      showVideo: true
    },
    {
      nome:
        'III Encontro de licenciaturas em educação a distância/I Encontro internacional de educação online',
      link: 'https://www.youtube.com/watch?v=23eurZ5OAnA',
      data: '02-10-2020',
      instituicao: 'Unimes',
      showVideo: false
    },
    {
      nome: 'Avaliação da aprendizagem on-line',
      link:
        'https://www.youtube.com/watch?v=ZTZXHtv8tR8&ab_channel=CodepUfrrj ',
      data: '05-10-2020',
      instituicao: 'CODEP/UFRRJ',
      showVideo: false
    },
    {
      nome: 'Mesa- Pesquisa e Inovação Responsáveis na Educação',
      link:
        'https://www.youtube.com/watch?v=dk8lzMWN03w&feature=youtu.be&ab_channel=CanalPUCPR',
      data: '06-10-2020',
      instituicao: 'PUCPR',
      showVideo: false
    },
    {
      nome:
        'Palestra- Webinar: Competências Digitais para a Docência Estratégias e Interfaces na educação on-line/ ensino remoto.',
      link:
        'https://www.youtube.com/watch?v=ZfG7YGsM16I&feature=youtu.be&ab_channel=Coord.deForma%C3%A7%C3%A3oDocenteeEduca%C3%A7%C3%A3oaDist%C3%A2ncia',
      data: '07-10-2020',
      instituicao: 'CEDCEARA',
      showVideo: false
    },
    {
      nome: 'Live Ocupação com Elika Nakimoto',
      link: 'https://www.instagram.com/p/CGYd0KHpFvP/embed',
      data: '14-10-2020',
      instituicao: '',
      showVideo: true
    },
    {
      nome:
        'Ciclo de palestras-  Avaliação de Aprendizagem no Ensino Remoto: Teorias e Práticas',
      link:
        'https://www.youtube.com/watch?v=ZgpYVN3Nqps&ab_channel=CentrodeTecnologiaUFRJ',
      data: '23-10-2020',
      instituicao: '',
      showVideo: false
    },
    {
      nome: 'Ensino de engenharia on-line',
      link: 'https://www.youtube.com/watch?v=GrOB-uLAjPo',
      data: '26-10-2020',
      instituicao: 'CODEP/UFRRJ',
      showVideo: true
    },
    {
      nome:
        'Transmissão no instagram com Jilvania Bazzo- A Didática na Cibercultura',
      link: 'https://www.instagram.com/p/CG8EGuKJ3iM/embed',
      data: '29-10-2020',
      instituicao: '',
      showVideo: true
    },
    {
      nome:
        'SIMPÓSIO EIXO 5 – “Educação na, com a para a cibercultura” XX Endipe virtual Rio',
      link: 'https://www.youtube.com/watch?v=_YFGvBDZ83w ',
      data: '04-11-2020',
      instituicao: '',
      showVideo: true
    },
    {
      nome:
        'Ciclo de conversas com professores da Maré, Escola Municipal Nova Holanda',
      link: '',
      data: '05-11-2020',
      instituicao: '',
      showVideo: true
    },
    {
      nome: '“Docência Colaborativa” ',
      link: 'https://www.youtube.com/watch?v=vrpsVLAa7b4 ',
      data: '09-11-2020',
      instituicao: 'CODEP UFRRJ',
      showVideo: true
    },
    {
      nome: 'Webnário Cultural – “Saberes para a docência online ”',
      link: 'https://www.youtube.com/watch?v=jmMEXuUimjU ',
      data: '10-11-2020',
      instituicao: 'UNEB',
      showVideo: true
    },
    {
      nome:
        'Mesa Virtual – "Educação a distância, educação online ensino remoto: caminhos e descaminho”',
      link: '',
      data: '11-11-2020',
      instituicao: 'CODEP UFRRJ',
      showVideo: true
    },
    {
      nome: '“Educação museal online”',
      link: 'https://www.youtube.com/watch?v=7MZA1tf-MD4',
      data: '16-11-2020',
      instituicao: 'IFF',
      showVideo: true
    },
    {
      nome:
        '“ Tecnologias Digitais  em Rede e Educação: Práxis Pedagógicas na Docência on-line”',
      link: 'https://www.youtube.com/watch?v=AJXnEP8z_6w',
      data: '18-11-2020',
      instituicao: ' UNEB',
      showVideo: true
    },
    {
      nome:
        '“ Graduação interdisciplinar on-line: a experiência do curso de pedagogia da UESB”.',
      link: 'https://www.youtube.com/watch?v=BBwWc9m1RBM',
      data: '19-11-2020',
      instituicao: 'GPDOC/UFRRJ',
      showVideo: true
    },
    {
      nome: '“ Coreografias Didáticas Na Educação On-line”',
      link: 'https://www.youtube.com/watch?v=kZJ1F1f51J4 ',
      data: '23-11-2020',
      instituicao: 'CODEP/UFRRJ',
      showVideo: true
    },
    {
      nome: '“Pesquisas sobre Instagram e Youtube com jovens e professores”',
      link: 'https://www.youtube.com/watch?v=OU-iDMUoGFk ',
      data: '24-11-2020',
      instituicao: 'Unirio',
      showVideo: true
    },
    {
      nome: '“Didática Universitária: Desafio Formação Docente”',
      link: 'https://www.youtube.com/watch?v=mTht7kegOI0 ',
      data: '30-11-2020',
      instituicao: ' CODEP/UFRRJ ',
      showVideo: true
    },
    {
      nome:
        'Lançamento do livro: Reflexões e experiências didáticas com tecnologias digitais',
      link: 'https://www.youtube.com/watch?v=KhePhRhzHyQ&ab_channel=DidaTicUel',
      data: '02-12-2020',
      instituicao: '',
      showVideo: false
    },
    {
      nome: '“Diálogos e Reflexões sobre Didática nas Aulas online”',
      link: '',
      data: '04-12-2020',
      instituicao: 'Unioeste e Governo do Estado do Paraná',
      showVideo: true
    }
  ];
}
