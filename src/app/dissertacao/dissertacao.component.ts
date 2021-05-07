import { Component, OnInit } from '@angular/core';
import { Dissertation } from '@app/models';
import { DissertationService } from '@app/service/dissertation.service';
import { GoogleAnalyticsService } from '@app/service/google-analytics.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-dissertacao',
  templateUrl: './dissertacao.component.html',
  styleUrls: ['./dissertacao.component.scss']
})
export class DissertacaoComponent implements OnInit {
  public dissertations: Array<Dissertation> = [];
  dissertacoesChoose: any = [];
  type: any = 2;

  constructor(
    private googleAnalytics: GoogleAnalyticsService,
    private readonly dissertationService: DissertationService
  ) {
    this.listAllDissertations();
  }

  ngOnInit() {}

  private listAllDissertations(): void {
    this.dissertationService
      .list()
      .pipe(
        switchMap((dissertations: Array<Dissertation>) => {
          return this.sortDissertationsByDate(dissertations);
        }),
        map((dissertations: Array<Dissertation>) => {
          this.dissertacoesChoose = dissertations.filter(
            (dissertation: Dissertation) => dissertation.category == 2
          );
          return dissertations;
        })
      )
      .subscribe((dissertations: Array<Dissertation>) => {
        this.dissertations = dissertations;
      });
  }

  private sortDissertationsByDate(
    dissertations: Array<Dissertation> = []
  ): Observable<Array<Dissertation>> {
    return new Observable(obs => {
      obs.next(
        dissertations.sort((x, y) => {
          return moment(x.date).unix() - moment(y.date).unix();
        })
      );
    });
  }

  selectType(type: any) {
    //1 - iniciacao cientifica
    //2 - mestrado
    //3 - doutorado
    //4 - pos doc
    this.type = type;

    switch (type) {
      case 1:
        this.googleAnalytics.eventEmitter(
          'Mea',
          'Dissertação',
          'Iniciação Cientifica',
          'Click',
          1
        );
        break;
      case 2:
        this.googleAnalytics.eventEmitter(
          'Mea',
          'Dissertação',
          'Mestrado',
          'Click',
          1
        );
        break;
      case 3:
        this.googleAnalytics.eventEmitter(
          'Mea',
          'Dissertação',
          'Doutorado',
          'Click',
          1
        );
        break;
      case 4:
        this.googleAnalytics.eventEmitter(
          'Mea',
          'Dissertação',
          'Pós Doc',
          'Click',
          1
        );
        break;
    }

    this.dissertacoesChoose = this.dissertations.filter(
      dissertation => dissertation.category == type
    );
  }

  public getLink(link: string): string {
    return `https://profedmeasantos.s3.us-east-2.amazonaws.com/${link}`;
  }

  getDissertationLink(dissertation: Dissertation) {
    if (dissertation.link) {
      return dissertation.link;
    }

    return this.getLink(dissertation.archive);
  }

  // dissertacoes = [
  //   {
  //     type: 2,
  //     titulo: 'ATOS DE CURRÍCULO NA PERSPECTIVA DE APP-LEARNING',
  //     autor: 'WALLACE CARRIÇO DE ALMEIDA',
  //     resumo:
  //       'Discutimos nesse trabalho o conceito de App-Learning, que SANTAELLA define como o processo de aprendizagem que ocorre apoiado pelo uso de aplicativos de dispositivos móveis, tendo como característica fundamental a multiplicidade de funções, as necessidades dos sujeitos, a portabilidade dos dispositivos e a mobilidade dos sujeitos, que mesmo que estejam fisicamente distantes do contexto educacional conectam-se mutuamente, com o ciberespaço e a cidade. Nossa opção metodológica foi a pesquisa-formação na cibercultura (SANTOS), a multirreferencialidade (ARDOINO) e as pesquisas nos/dos/com os cotidianos (CERTEAU, ALVES). Buscamos compreender como mobilizar Atos de Currículo (MACEDO) no âmbito da disciplina Informática na Educação, do curso de Pedagogia a distância da UERJ, oferecida em parceria com a Fundação Centro de Ciências e Educação Superior a Distância do Estado do Rio de Janeiro (Cecierj) / Consórcio CEDERJ. No exercício de aprender por e com aplicativos, busquei compreender como criar atos de currículo em educação online com práticas de App-Learning. Descobrir quais os usos que os praticantes culturais fazem de seus dispositivos móveis e como são instituídas as práticas de App-Learning em seu cotidiano para formar docentes na Cibercultura. Como achados da pesquisa apresento as narrativas e imagens, as noções de autoria, fundamentação e acessibilidade além da minha própria experiência, transformação e aprendizado com os praticantes na sugestão de aplicativos e práticas para estender um convite a novas caminhadas e caminhantes futuros. Palavras-chave: Pesquisa-formação na cibercultura. Docência Online. Cotidianos. Formação de Professores. Ensino Superior, App-Learning, Atos de Currículo.',
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '27/08/2018',
  //     linkPdf:
  //       'http://www.proped.pro.br/teses/teses_pdf/1509072016_1-1553-ME.pdf'
  //   },
  //   {
  //     type: 3,
  //     titulo: 'VISUALIDADES SURDAS NA CIBERCULTURA: APRENDIZAGENS EM REDE',
  //     autor: 'RACHEL CAPUCHO COLACIQUE',
  //     resumo:
  //       'A presente Tese procura investigar o papel preponderante das visualidades para a aprendizagem das pessoas surdas, nos diferentes espaçostempos educativos, na imbricação cibercultura/cidade, a partir de parâmetros que norteiam os estudos da visualidade e da pedagogia surda (Strobel, 2006, 2008, 2009, 2013; Perlin, 2003, 2006, 2008; Skliar, 1997, 1998). Ancorados nas pesquisas com os cotidianos (Alves, 2007, 2008, 2012; Certeau, 2009), e compreendendo a bricolagem metodológica como um caminho aberto à prática epistemológica multirreferencial (Macedo, 2008, 2010, 2012), dialogamos com a etnografia, mais especificamente a etnografia virtual, junto com nossos dispositivos de pesquisa e formação, que legitimam a experiência e o acontecimento como elementos estruturantes desse processo (Macedo, 2016). Como objetivo central nesse trabalho, procuramos responder a questão disparadora de estudo: De que forma a aprendizagem é materializada na cibercultura, especialmente nas redes sociais, a partir das conversas e narrativas visuais produzidas e veiculadas pela comunidade surda? Buscando um diálogo permanente com as noções subsunçoras que emergiram do campo, trazendo diversas produções culturais surdas que circulam pela Internet, problematizamos os modos pelos quais as visualidades presentes nesse ambiente têm contribuído para a formação cultural e identitária das pessoas surdas, e discutimos o papel relevante das imagens nesse contexto. Conversas e narrativas dos praticantes culturais nos forneceram indícios de aprendizagens, a partir das imagens visuais, que foram agrupados em cinco dimensões: a dimensão linguístico-cognitiva e cultural, representada pelo uso de um conjunto de saberes e sua aplicação a situações da vida prática, incluindo o pleno domínio da língua de sinais e valorização da cultura surda; dimensão formativa, evidenciada na relação com o outro, na vivência de experiências como a interatividade, a colaboração, a dialogicidade; a dimensão comunicacional-integrativa, que deixa em evidência a capacidade de o indivíduo se comunicar utilizando códigos linguísticos diversos; a dimensão comportamental, que reflete atitudes e valores socialmente desejáveis que caracterizam e diferenciam os indivíduos; e finalmente, a dimensão tecnológica, que leva em conta o crescimento do digital em rede, que altera modos de pensar, ser e agir no mundo. Palavras-chave: Cibercultura. Educação de Surdos. Visualidades Indicadores de Aprendizagem.',
  //     orientador: 'Edméa Oliveira dos Santos',
  //     dataPublicacao: '15/08/2018',
  //     linkPdf:
  //       'http://www.proped.pro.br/teses/teses_pdf/1739142009_1-560-DO.pdf'
  //   },
  //   {
  //     type: 2,
  //     titulo: 'DOCÊNCIA ONLINE: UMA PESQUISA-FORMAÇÃO NA CIBERCULTURA',
  //     autor: 'Alexsandra Barbosa da Silva',
  //     resumo:
  //       'No contexto da cultura contemporânea mediada pelo digital em rede e em mobilidade, destacamos a emergência da educação online nas redes de aprendizagem. É nessa ambiência que emerge a questão central desta pesquisa: Como a educação online (EOL) pode contribuir na/com a formação de professores, em geral, e de estudantes de Pedagogia, em particular, com vistas à produção de conteúdos digitais autorais, nos ambientes virtuais de aprendizagem? Inspirados no paradigma da complexidade (MORIN, 1996), sua base epistemometodológica está ancorada em três pilares: nas abordagens da pesquisa com os cotidianos (ALVES, 2008; 2012; CERTEAU, 2014), nos princípios da multirreferencialidade (ARDOINO, 1998; MACEDO, 2010; 2012), e na pesquisa-formação no contexto da Cibercultura (SANTOS, 2014). Contamos com a participação de 34 estudantes do curso de pedagogia da Universidade do Estado do Rio de Janeiro (UERJ), no ano de 2016, e foi desenvolvida no âmbito da disciplina Tecnologias e Educação. Objetivou compreender os limites e possiblidades da EOL no contexto de formação de professores para a docência online. Para tanto, criamos atos de currículo apoiados em dispositivos materiais e intelectuais diversos, e articulamos o software Moodle, e suas interfaces, o aplicativo WhatsApp e a rede social Facebook; o que possibilitou a emersão de narrativas em múltiplas linguagens e mídias, que acentuaram o caráter, interativo, colaborativo, dialógico e autoral das produções apresentadas nos diferentes desenhos didáticos criados pelos estudantes no Ambiente Virtual de Aprendizagem. Essas contribuições da Educação Online nos leva à conclusão de que a formação do professor em geral, e do pedagogo, em particular, deve considerar as potencialidades das tecnologias digitais, particularmente no que se refere aos meios de comunicação e às formas de obtenção e disseminação de informação para que o processo aprendizagemensino se faça, de forma coletiva, colaborativa e significativa. Palavras-chave: Pesquisa-formação na Cibercultura. Educação Online. Pedagogia. Docência Online. Multirreferencialidade. Atos de Currículo.',
  //     orientador: 'Edméa Oliveira dos Santos',
  //     dataPublicacao: '05/03/2018',
  //     linkPdf:
  //       'http://www.proped.pro.br/teses/teses_pdf/1827202011_2-942-ME.pdf'
  //   },
  //   {
  //     type: 3,
  //     titulo:
  //       'DIGITAL STORYTELLING: UMA EXPERIÊNCIA DE PESQUISA-FORMAÇÃO NA CIBERCULTURA',
  //     autor: 'TANIA LUCÍA MADDALENA',
  //     resumo:
  //       'O presente texto de tese aborda a Digital Storytelling (narração digital de histórias) como ato de currículo na formação de professores, tendo como principal objetivo compreender como a contação de histórias digitais pode potencializar as narrativas de si dos professores em formação. Partimos do pressuposto que na cibercultura as práticas do aprenderensinar se manifestam numa multiplicidade de linguagens e espaçostempos, propiciando, nesse contexto, o surgimento de novas formas de narrar e contar histórias. E, em campo, buscamos o potencial dessas práticas. As abordagens teórico-metodológicas da pesquisa inspiram-se na perspectiva epistemológica da multirreferencialidade (MACEDO, 2010; ARDOINO, 1998; SANTOS 2005; 2014), com as pesquisas com os cotidianos (CERTEAU, 2012; ALVES, 2014; SPINK, 2017) tendo como o método e opção política a pesquisa-formação na cibercultura (SANTOS, 2005, 2014), prática de pesquisa que promove uma imersão e ação de co-autoria no campo, formando e se formando no intercâmbio com os praticantes culturais. O campo de pesquisa foi realizado na turma da disciplina Tecnologias e Educação do curso de Pedagogia na Universidade do Estado do Rio de Janeiro - UERJ, no segundo semestre de 2015 e no primeiro semestre de 2017 nos quais foram trabalhados diversos gêneros híbridos da Digital Storytelling: Visual Storytelling no Instagram, Digital Storytelling em formato de vídeo, Blog como memorial hipertextual de formação entendidos como dispositivos da pesquisa-formação. Após a experiência do campo e do processo pedagógico obtivemos diversas autorias dos estudantes nas quais surgiram invenções digitais de si. A tessitura entre memória, experiência e ficção na criação de narrativas digitais, públicas e compartilhadas em rede deixaram três noções que consideramos achados da pesquisa: as hiperescritas de si na formação de professores; a potência da experiência formativa narrada em rede e as micro-ficções de formação para (re)pensar a educação. Palavras-chave: Digital Storytelling. Formação de professores. Cibercultura. Tecnologia Educacional. Hiperescritas.',
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '05/02/2018',
  //     linkPdf:
  //       'http://www.proped.pro.br/teses/teses_pdf/1721342013_1-1125-DO.pdf'
  //   },
  //   {
  //     type: 2,
  //     titulo:
  //       'OS CIBERVÍDEOS NA EDUCAÇÃO ONLINE: UMA PESQUISA-FORMAÇÃO NA CIBERCULTURA',
  //     autor: 'VIVIAN MARTINS LOPES DE SOUZA',
  //     resumo:
  //       "Os vídeos ganharam destaque com a potência do digital em rede, principalmente a partir da convergência de aplicativos nos dispositivos móveis, possibilitando gravar, editar e publicar mídias em poucos minutos. Suas potencialidades para a educação na cibercultura demandam novas práticas pedagógicas que possam reforçar a interatividade entre os sujeitos, proporcionando aprendizagens significativas. A presente dissertação apresenta como objetivo geral compreender como os vídeos vêm se materializando e circulando no ciberespaço e, mais especificamente, na educação online, desenvolvendo, em contexto de pesquisa-formação na cibercultura, práticas de produção de gêneros de cibervídeos. E busca responder a questões como: Quais são as singularidades do audiovisual na internet, tendo em vista as alterações tecnológicas e a criação de vídeos em contextos diversos do cotidiano? Quais as potencialidades dos vídeos na educação e mais especificamente na educação em tempos de cibercultura? E quais atividades podem ser desenvolvidas utilizando as interfaces digitais para potencializar a autoria de vídeos pelos docentes, tendo em vista a crescente atualização dos softwares, aplicativos e práticas audiovisuais na educação online? Nela é utilizada como método a pesquisa-formação na cibercultura (SANTOS, 2014), articulada com os pressupostos das pesquisas nos/dos/com os cotidianos (ALVES, 2008). O contexto foi o da disciplina Tecnologias e Educação, da Licenciatura em Pedagogia da Universidade do Estado do Rio de Janeiro, onde acionamos o dispositivo de pesquisa denominado 'Oficina de Produção de Cibervídeos', possibilitando a produção de sentidos e de narrativas audiovisuais, imagéticas e textuais, contribuindo para a compreensão dos questionamentos que ampararam a pesquisa. Como resultado, há três noções subsunçoras: Formação para a videodocência na cibercultura, Táticas audiovisuais: bricolagem e mixagem com vídeos, e Produção interativa de vídeos. Dessa forma, dialoga-se com os vídeos contemporâneos buscando estimular a noção de autoria docente e compartilhamento em rede, mobilizando saberes para a produção de vídeos com usos na educação online.",
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '05/09/2017',
  //     linkPdf: 'http://www.proped.pro.br/teses/teses_pdf/2016_1-1576-ME.pdf'
  //   },
  //   {
  //     type: 2,
  //     titulo:
  //       'GERAÇÃO TOMBAMENTO E SEUS OLHARES UMA PESQUISA-FORMAÇÃO COM FOTOGRAFIA DIGITAL NA CIBERCULTURA',
  //     autor: 'CARINA NASCIMENTO D AVILA',
  //     resumo:
  //       "Esta pesquisa procurou compreender como a mediação de usos da fotografia digital pode potencializar a autoria de jovens na cibercultura. Este objetivo de pesquisa tem origem nos dilemas docentes da pesquisadora que atua na mediação da disciplina Olhar a qual faz parte do currículo dos cursos de Fotografia e Tratamento de Imagem na Escola de Arte e Tecnologia Spectaculu. Essa escola disponibiliza cursos de formação artística e cultural para jovens entre 16 e 21 anos, moradores de periferias do estado do Rio de Janeiro. Neste contexto desenvolvemos uma pesquisa-formação, a qual não separa o campo da docência da investigação científica. A pesquisa, para tanto, forjou o dispositivo formativo o projeto 'Autorretrato Musical'. A experiência docente com esse projeto permitiu a emergência de imagens e narrativas que compõe os dados dessa pesquisa. Uma vez que esse processo foi colaborativo entre docente e jovens estudantes, esses dados foram produzidos e não coletados. Os achados da pesquisa revelam que a prática pedagógica mediada por imagens digitais nos permitiu conhecer uma geração contemporânea, a geração tombamento, nascida e criada nas periferias e que demarca os seus usos das tecnologias digitais em rede como uns dos principais propulsores do processo de empoderamento. A geração que se empodera a cada dia busca discutir sobre as questões sociais emergentes como racismo, machismo e homofobia que geram, por sua vez, uma chacina sanguinária e psicológica de jovens negros por todo estado do Rio de Janeiro. O tombamento recompõe não só a reflexão e autonomia, mas cria uma nova estética. Uma estética que exala aquilo que essa juventude escondia durante anos. Essa estética acontece num processo de reconhecimento e também de enfrentamento, já que o fato de estar escondido é consequência da imposição de uma estética padronizada, branca e heteronormativa. O corpo dessa juventude é, por presença, resistência. Nesse próprio corpo, os jovens potencializam sua autoria, vivendo uma experiência estética e 'tombando' - como eles dizem. Como resultado da pesquisa, compreendemos que a proposição de um mergulho no campo sensível, processo primeiro da interpretação, possibilita a experiência estética, a qual é reconhecida também na geração tombamento que, por sua vez, imersa e produtora ativa do contexto que cibercultura, vem 'lacrando epistemologicamente' evocando efeitos de presença nos espaços cartesianos.",
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '30/08/2016',
  //     linkPdf: 'http://www.proped.pro.br/teses/teses_pdf/2014_1-1259-ME.pdf'
  //   },
  //   {
  //     type: 2,
  //     titulo: 'ATOS DE CURRÍCULO NA EDUCAÇÃO ONLINE',
  //     autor: 'FELIPE DA SILVA PONTE DE CARVALHO',
  //     resumo:
  //       "Com o crescimento exponencial das tecnologias digitais em rede e sua apropriação na vida cotidiana, novas práticas culturais e comunicacionais emergiram, dando sentido à cibercultura Esta, por sua vez, vem afetando diversos espaçostempos dos processos educativos, possibilitando novas formas de interação e de aprenderensinar em rede. Neste contexto, esta dissertação, alinhada à pesquisa institucional 'Análise de dados em pesquisa-formação na cibercultura' que vem sendo desenvolvida no nosso Grupo de Pesquisa Docência e Cibercultura (GPDOC), buscou: 'Compreender de que forma os atos de currículo (Macedo) online podem colaborar na tessitura do conhecimento em rede na disciplina Informática na Educação num curso de Pedagogia a distância?' Para responder à questão, essa pesquisa objetivou a criação de um design didático em atos de currículo, tendo como campo de pesquisa a educação online, no contexto formativo da disciplina 'Informática na Educação' do curso de Pedagogia à distância da UERJ/CEDERJ, em 2014.02. Amparados no princípio da complexidade (Morin), dialogamos com os pressupostos das pesquisas nos/dos/com os cotidianos (Certeau; Alves), com o paradigma emergente (Boaventura Santos) e com a pesquisa-formação multirreferencial (Roberto Macedo, Edméa Santos, Jacques Ardoino), apoiados no uso intensivo de dispositivos online mediados (plataforma Moodle e interfaces digitais). Com base na análise das narrativas e imagens que emergiram no processo, chegamos aos seguintes achados: a) a mediação docente online para colaboração possibilitou o diálogo, a interatividade e a participação ativa entre os praticantes culturais (Certeau); b) As práticas distribuídas multirreferenciais valorizam não apenas os saberes científicos, mas, também os saberes da cultura, materializados nas interações cotidianas online dos atos de currículo; e c) as ambiências ubíquas formativas, favorecidas pelo hibridismo tecnológico digital, possibilitam o desenvolvimento de processos formativos horizontais entre estudantes e docentes. Desse modo, concluímos que a criação de um design didático em atos de currículo deve ser pautada em ações que levem em conta a mediação docente para a partilha e promoção da aprendizagem colaborativa em rede, a docência criativa e as ambiências híbridas.",
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '16/12/2015',
  //     linkPdf: 'http://www.proped.pro.br/teses/teses_pdf/2013_2-1195-ME.pdf'
  //   },
  //   {
  //     type: 3,
  //     titulo:
  //       'PESQUISA-DESIGN FORMAÇÃO: UMA PROPOSTA METODOLÓGICA PARA PRODUÇÃO DE RECURSOS EDUCACIONAIS ABERTOS NA CIBERCULTURA',
  //     autor: 'TATIANA STOFELLA SODRÉ ROSSINI',
  //     resumo:
  //       'Essa pesquisa inspirou-se nos movimentos sociais recentes relacionados à abertura de materiais didáticos para compartilhamento, (re) uso e remixagem no ciberespaço. Assim, partimos da seguinte problemática: como desenvolver atos de currículo capazes de contribuir para a produção de Recursos Educacionais Abertos (REA) para a docência e aprendizagem na cibercultura? O objetivo foi desenvolver um dispositivo-metodológico como ato de currículo que atualiza a pesquisa-formação para o design de situações de ensino-aprendizagem e de artefatos pedagógicos que contemplem a autoria dos praticantes culturais. Para atingir o proposto, foi desenvolvido um dispositivo que atualiza o método da pesquisa-formação para a docência e aprendizagem na cibercultura (SANTOS, 2005; 2014) com alguns princípios da pesquisa-design (GRAVEMEIJER; COBB, 2006; van den AKKER, 1999; BROWN, 1992; COLLINS, 1992; NEWMAN, 1990; KELLY, 2003; RAMOS; STRUCHINER, 2008) para propiciar a produção de artefatos digitais utilizando os recursos oferecidos pelas plataformas da Web 2.0. A pesquisa-design formação, como método e o design interativo aberto como dispositivo, foram criados com o objetivo de sistematizar o processo de construção e implementação de atos de currículos e arquitetar percursos abertos em plataformas da Web 2.0. A metodologia proposta parte da bricolagem da pesquisa-formação multirreferencial na cibercultura com a pesquisa-design. A pesquisa está estruturada em quatro conceitos-tema importantes: a) educar na cibercultura: mídias em destaque; b) Design na Web 2.0: faça você mesmo e de preferência acompanhado; c) Professor-autor e a sua construção epistemológica e metodológica, e; d) Professor-autor em formação: enunciação, negociação e autoria. Essa pesquisa revelou alguns achados nas dimensões referente ao design como produto e processo, método e atos de currículo, que têm a intenção de contribuir para: a) a sistematização de processos de aprendizagemensino, promovendo a produção de artefatos digitais abertos por professores e alunos; b) o design estrutural e proposicional das atividades pedagógicas; c) a formação de sujeitos-autores na cibercultura. Portanto, esta pesquisa contribuiu para a autorização e autonomização dos praticantes culturais através da metodologia pesquisa-design formação bem como a disponibilização de materiais digitais abertos na cibercultura.',
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '06/11/2015',
  //     linkPdf: 'http://www.proped.pro.br/teses/teses_pdf/2012_1-969-DO.pdf'
  //   },
  //   {
  //     type: 3,
  //     titulo:
  //       'A SALA DE AULA NO CONTEXTO DA CIBERCULTURA: FORMAÇÃO DOCENTE E DISCENTE EM ATOS DE CURRÍCULO',
  //     autor: 'MAYRA RODRIGUES FERNANDES RIBEIRO',
  //     resumo:
  //       'Este trabalho de tese tem como temática a formação docente situada no contexto da cibercultura. Parte do pressuposto de que professores formadores e em formação precisam dialogar com saberes/fazeres que potencializem suas aprendizagens em um novo espaço/tempo da sala de aula e que a pesquisa no ensino superior se tece no exercício da reflexão sobre/na prática em um processo plural de auto-hetero-ecoformação. Tem como objetivo construir atos de currículo, utilizando as potencialidades dos ambientes virtuais, das redes sociais e da internet para ressignificar o aprender/ensinar situado nas vivências dos praticantes culturais dentro/fora da universidade. Como problemáticas central e secundária da pesquisa-formação na cibercultura, temos, respectivamente: como a criação de atos de currículo com o uso das tecnologias digitais em espaços multirreferencias de aprendizagem podem potencializar as práticas formativas docente e discente no Curso de Pedagogia da UERN no contexto da cibercultura? Quais dispositivos engendram práticas formativas autorais, no presencial e no online, com o uso das tecnologias digitais em rede? Como construir uma relação pedagógica de interação colaborativa, docente e discente, mediada pelo uso das tecnologias digitais? A criação de atos de currículo utilizando as tecnologias digitais contribui com novos letramentos digitais dos praticantes na cibercultura? Tomamos como inspirações teórico-metodológicas a pesquisa-formação (SANTOS; MACEDO; NÓVOA) multirreferencial (ARDOINO, BARBOSA, MACEDO) com os cotidianos (CERTEAU, ALVES, FERRAÇO, OLIVEIRA), situada no contexto da cibercultura (SANTOS, SILVA, LEMOS, SANTAELLA, LEVY), entrelaçadas aos sentidos dos autores da pesquisa deste trabalho de tese. A pesquisa foi desenvolvida no cenário formativo do Curso de Pedagogia da Universidade do Estado do Rio Grande do Norte - UERN nas disciplinas de Didática e Estágio Supervisionado I. Como resultado, apresentamos que as ambiências formativas criadas nos atos de currículo no ensino presencial e online, apontam perspectivas que vão ao encontro de uma formação docente e discente do ciberautorcidadão, uma postura em processo, em devir, que se constrói na relação cidade/ciberespaço, em espaços/tempos de aprendizagens plurais, referenciadas nas experiências tecidas nesses contextos.',
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '03/11/2015',
  //     linkPdf: 'http://www.proped.pro.br/teses/teses_pdf/2013_1-1113-DO.pdf'
  //   },
  //   {
  //     type: 3,
  //     titulo:
  //       'FORMAÇÃO DE FORMADORES E EDUCAÇÃO SUPERIOR NA CIBERCULTURA: ITINERÂNCIAS DE GRUPOS DE PESQUISA NO FACEBOOK',
  //     autor: 'ROSEMARY DOS SANTOS',
  //     resumo:
  //       "Esta tese origina-se da pesquisa de doutoramento na Universidade do Estado do Rio de Janeiro - UERJ - Proped e tem como objetivo compreender a formação do formador no contexto da cibercultura e como este vem estruturando sua atuação na docência universitária. Este trabalho faz parte do eixo 2 da Pesquisa Institucional 'A cibercultura na era das redes sociais e da mobilidade: novas potencialidades para a formação de professores'. O campo da pesquisa foi a rede social Facebook. Constituíram-se praticantes da pesquisa seis professores-formadores do ProPEd e seus orientandos. A pertinência desta pesquisa inscreveu-se num amplo movimento da perspectiva epistemológica da multirreferencialidade com os cotidianos e pelo método atualizado da pesquisa-formação. A intenção primeira deste trabalho consistiu em mapear as experiências e itinerâncias do formador em suas práticas cotidianas nos espaçostempos da cibercultura. Tencionamos que a sistematização de ambiências formativas articulando o espaço da universidade e das redes sociais criou redes de docência e aprendizagem. Como dispositivos de pesquisa, lançamos mão de oficinas, interações nas redes sociais, conversas, participação nos grupos de pesquisa. A tese revela que a formação do formador na cibercultura forja outros espaçostempos de pesquisa acadêmica e de criação de dispositivos online. Revela também que os usos do digital em rede pelos praticantes da pesquisa fizeram emergir processos de orientação coletiva, de experiências formadoras e de articulação da interface cidade-universidade, estabelecendo outros sentidos para a prática pedagógica e para a pesquisa acadêmica.",
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '23/09/2015',
  //     linkPdf: 'http://www.proped.pro.br/teses/teses_pdf/2010_1-505-DO.pdf'
  //   },
  //   {
  //     type: 2,
  //     titulo:
  //       'A INFORMÁTICA NA EDUCAÇÃO NO ENSINO SUPERIOR: DO CURRÍCULO EM EAD PARA O CURRÍCULO EM EDUCAÇÃO ON LINE.',
  //     autor: 'CRISTIANE MARCELINO SANT´ANNA',
  //     resumo:
  //       'Inserida em um curso semipresencial de licenciatura em pedagogia da Uerj, no qual as práticas pedagógicas em seu ambiente virtual ainda utilizam metodologias que privilegiam a transmissão de conteúdos, característica fundante da cultura massiva, a disciplina informática na educação vem construindo sua identidade buscando romper com os paradigmas relacionados a essas metodologias. Pautada nos pressupostos metodológicos da educação online (SANTOS, 2010), tutores, alunos e coordenação de forma descentralizada discutem temas e tecem colaborativamente o currículo da disciplina, composto por atos de currículo (MACEDO, 2011) que emergem dos rastros das narrativas dos praticantes culturais. Nesse contexto, esta pesquisa buscou responder às seguintes questões: Que mudanças aconteceram e vêm acontecendo na passagem das práticas educativas a distância para práticas educativas em educação online na disciplina informática na educação do curso semipresencial de licenciatura em pedagogia da Uerj? Como o desenho didático e a mediação docente online podem contribuir para práticas mais autorais na educação online? Que dispositivos podem ser acionados para uma pesquisa multirreferencial com os cotidianos na educação online? Sob a perspectiva da pesquisaformação (ARDOINO), multirreferencial (MACEDO, SANTOS, JOSSO), nos/dos/com os cotidianos (ALVES, OLIVEIRA), a pesquisa buscou verificar como se podem instituir autorias colaborativas, em que todos os praticantes envolvidos possam efetivamente tecer conhecimento em rede e como a autoria e coautoria podem colaborar no processo de construção do currículo de uma disciplina online. Como resultados, apresenta-se a transição do currículo em EaD para um currículo online através da construção colaborativa do desenho didático, bem como os dispositivos utilizados dentrofora do ambiente virtual de aprendizagem e as produções ali realizáveis; além de sugestões para elaboração de possíveis novas rotas. Palavras-chave: Cibercultura, Formação de professores, Educação online, Informática na educação',
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '26/08/2014',
  //     linkPdf: 'http://www.proped.pro.br/teses/teses_pdf/2010_1-670-ME.pdf'
  //   },
  //   {
  //     type: 2,
  //     titulo:
  //       'ACESSIBILIDADE PARA SURDOS, NA CIBERCULTURA: OS COTIDIANOS NAS REDES E NA EDUCAÇÃO SUPERIOR ONLINE',
  //     autor: 'RACHEL COLACIQUE GOMES',
  //     resumo:
  //       'No atual cenário sóciotécnico, com a expansão das tecnologias digitais em rede, novos espaçostempos culturais estão se formando. A cibercultura tem possibilitado, e potencializado, lógicas outras de valorização e participação dos indivíduos que, agora podem, sobretudo, produzir conteúdos e informações. Neste contexto, os surdos estão se apropriando e habitando os diferentes ambientes da internet. Mesmo nos espaços que não tenham sido pensados e preparados para o acesso dos internautas surdos, eles estão lançando mão de suas táticas de praticantes e estão se autorizando nas redes. Isso tem favorecido a inclusão de pessoas com deficiência nas mais diversas áreas, dentre elas, a educação superior. Em consonância com os princípios da educação inclusiva, a legislação brasileira assegura o direito dos estudantes surdos de receber instrução em sua primeira língua, e prevê que sejam garantidas as condições adequadas de ensino, inclusive no ensino superior, presencial ou à distância. Considerando a diversidade dentrofora da escola, e tendo em vista que o acesso à educação, informação e comunicação é um direito inerente a todos; abordamos em nossa pesquisa os aspectos legais, tecnológicos e pedagógicos envolvidos em nossa busca por garantir acessibilidade à educação superior online para um estudante surdo. Tendo como pressupostos a abordagem multirreferencial (Ardoino), da pesquisa-formação (Macedo, Santos, Josso) e as pesquisas nos/dos/com os cotidianos (Certeau, Alves, Oliveira), nossa pesquisa aborda os princípios de acessibilidade e usabilidade na web (Ferreira e Nunes), bem como nos ambientes virtuais de aprendizagem. Acompanhamos, ao longo de dois semestres letivos, um estudante surdo, e com baixa visão, matriculado no curso de Pedagogia à Distância da Faculdade de Educação da Universidade do Estado do Rio de Janeiro (UERJ), em parceria com o Consórcio Cederj. Nossa pesquisa procurou responder, dentre outras questões: Como tornar acessível, para os surdos, um curso de graduação à distância? Quais são as adaptações que o Cederj já garante aos estudantes surdos? Quais são as adaptações necessárias para se promover a inclusão efetiva das pessoas surdas nos ambientes virtuais de aprendizagem, ultrapassando a mera tradução de materiais didáticos e promovendo Educação online? Como resultados, apresentamos os principais obstáculos à efetiva inclusão desse estudante; suas táticas e usos para transpor as barreiras encontradas; além de sugestões de interfaces online, conteúdos e situações de aprendizagem para desenho didático acessíveis nos ambientes virtuais de aprendizagem. Palavras-chave: e-Acessibilidade. Inclusão de Surdos. Educação Superior Online. Cibercultura.',
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '29/04/2013',
  //     linkPdf: 'http://www.proped.pro.br/teses/teses_pdf/2009_1-560-ME.pdf'
  //   },
  //   {
  //     type: 3,
  //     titulo: 'EDUCAÇÃO E CIBERCULTURA: NARRATIVAS DE MOBILIDADE UBÍQUA',
  //     autor: 'ALINE ANDRADE WEBER NUNES DA ROCHA',
  //     resumo:
  //       'A cibercultura, cultura contemporânea mediada pelo digital em rede, potencializada pelos usos dos dispositivos móveis, delineia novas formas de relações: econômicas, sociais, profissionais, políticas, educacionais, trazendo novos contornos à sociedade. Neste contexto, esta dissertação buscou compreender em que medida, a mobilidade dada pelas redes telemáticas sem fio podem ser utilizadas dentro de um contexto educativo, entendendo que esse contexto se dá dentrofora da universidade, nos diversos espaçostempos da cidade. Buscamos, para tanto, articular à pesquisa-formação (Macedo, Santos e Josso) com abordagem multirreferencial (Ardoino), os pressupostos das pesquisas nos dos com os cotidianos (Alves) e criamos, no contexto formativo da disciplina de Didática, da Licenciatura de Pedagogia da Universidade do Estado do Rio de Janeiro, atos de currículo com os usos dos dispositivos móveis e do digital em rede, em diálogo com os estudos da cibercultura (Lévy, Lemos, Santaella, Santos). Analisando os usos do digital em rede e dos dispositivos móveis no contexto formativo dos estudantes de Didática e suas narrativas, chegamos aos seguintes achados: a) as interfaces sociais definem a percepção do espaço em que estamos assim como as possibilidades de interação comunicacional com os outros; b) a mobilidade dada pelo digital em rede e pelos usos dos dispositivos móveis imprime outras dinâmicas ao como e quando aprenderensinar; c) expandir as estratégias de aprendizagemensino disponíveis por meio do digital em rede aumenta a possibilidade de acesso a conteúdos, informações, reconfigurando o papel da universidade; d) no que tange ao acesso livre à rede, tanto dentro da universidade quanto na cidade, há necessidade de políticas públicas efetivas para a inclusão digital; e) no âmbito da pesquisa-formação, nossa pesquisa contribuiu para a formação de docentes, criando as ambiências pedagógicas necessárias para o desenvolvimento de habilidades e competências para uma gestão mais flexível do conhecimento e dos processos de aprendizagemensino dentrofora da universidade. Palavras-chaves: Mobilidade. Ubiquidade. Multirreferencialidade. Pesquisa-formação. Formação docente.',
  //     orientador: 'Edméa Oliveira dos Santos',
  //     dataPublicacao: '10/12/2012',
  //     linkPdf: 'http://www.proped.pro.br/teses/teses_pdf/2011_1-763-ME.pdf'
  //   },
  //   {
  //     type: 3,
  //     titulo:
  //       'A TESSITURA DO CONHECIMENTO VIA MÍDIAS DIGITAIS E REDES SOCIAIS: ITINERÂNCIAS DE UMA PESQUISA-FORMAÇÃO MULTIRREFERENCIAL',
  //     autor: 'ROSEMARY DOS SANTOS',
  //     resumo:
  //       'A cibercultura é a cultura contemporânea estruturada pelos usos sociotécnicos e culturais das mídias digitais em rede. Suas dimensões vêm afetando diretamente os cotidianos no ciberespaço e nas cidades. Neste contexto, esta dissertação buscou compreender como os professores vêm utilizando as mídias digitais em rede. Constamos a emergência e a interconexão de práticas, narrativas e aprendizagens mediadas na e pela cibercultura. Para tanto, dialogamos com as abordagens da pesquisa-formação multirreferencial (Ardoino, Macedo e Santos) e com as pesquisas nos/dos e com os cotidianos (Certeau, Alves, Oliveira). Utilizamos uma bricolagem de dispositivos baseada em conversas presenciais e online (ambiente Moodle, via metodologia WebQuest interativa) no contexto formativo da disciplina "Informática na Educação" do EDAI - Curso de Especialização em Educação com Aplicação da Informática - da Faculdade de Educação da UERJ. Além do ambiente Moodle dialogamos com os praticantes via imersão nas mídias e redes sociais da internet (Orkut, Twitter, YouTube, Blogger). Para enunciar tais práticas recorremos, além dos estudos das abordagens multirreferencial e dos cotidianos, aos estudos da cibercultura (Levy, Castells, Lemos , Santaella, Santos, Silva) e da educação online (Santos, Silva). Analisando os rastros das itinerâncias e narrativas dos praticantes, chegamos aos seguintes achados: a) o digital em rede potencializa e faz emergir outros espaçostempos de aprendizagem e formação, proporcionando fazeressaberesfazeres autorais e colaborativos; b) as redes educativas são tecidas dentrofora do ciberespaço, das escolas e de outros espaços multirreferenciais; c) precisamos repensar os currículos em tempo de cibercultura, articulando propostas de formação na escola, na universidade e no ciberespaço.',
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '25/11/2011',
  //     linkPdf: 'http://www.proped.pro.br/teses/teses_pdf/2010_1-505-ME.pdf'
  //   },
  //   {
  //     type: 2,
  //     titulo:
  //       "O JORNAL ELETRÔNICO EDUCAÇÃO & IMAGEM - ''ESPAÇOTEMPO'' DE TESSITURA DE CONHECIMENTOS ATRAVÉS DE PRÁTICAS DE PROFESSORES COM IMAGEM E NARRATIVAS DE PROFESSORES COM IMAGEM E ESCRITA ",
  //     autor: 'ROSANGELA LANNES COUTO CORDEIRO',
  //     resumo:
  //       'Este trabalho tem como intuito pesquisar os usos do jornal eletrônico Educação & Imagem, feito para e por professores da rede pública. As práticas narradas pelos docentes, que são usuários jornal, nos possibilitam refletir sobre os currículos e os conhecimentos que têm sido tecidos cotidianamente. Para analisar as narrativas presentes nos artigos escritos pelos professores foquei este trabalho nos editoriais redigidos por cada grupo de pesquisa, que faz parte da elaboração do periódico, e na seção Voz do leitor. Este estudo tem suas relações teórico-epistemológicas e teórico- metodológicas com as pesquisas nos/dos/com os cotidianos (Lefebvre, Certeau) que têm permitido compreender as redes de conhecimentos e significações que se dão nos múltiplos cotidianos em que vivemos, entendendo-os como contextos educativos. Nesse sentido, trabalhamos com a idéia de que os conhecimentos são tecidos, também, através dos usos e práticas que os seres humanos criam em seus cotidianos de uma forma diferente do que nos foi ensinado, na Modernidade, pelas ciências. Desta forma, entendo ser necessário – e possível - pesquisar as relações dos praticantes (Certeau) com os inúmeros artefatos culturais existentes. Essas relações serão pesquisadas através dos usos que estes docentes desenvolvem em contato com o jornal, com as imagens e as narrativas nele existentes.',
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '20/05/2010',
  //     linkPdf: 'http://www.proped.pro.br/teses/teses_pdf/2008_1-435-ME.pdf'
  //   },
  //   {
  //     type: 2,
  //     titulo:
  //       'EVENTOS CIENTÍFICOS ONLINE: UM FENÔMENO DA EDUCAÇAO NA CIBERCULTURA',
  //     autor: 'ALICE MARIA FIGUEIRA REIS DA COSTA',
  //     resumo: '',
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '19/03/2018',
  //     linkPdf: 'http://www.proped.pro.br/'
  //   },
  //   {
  //     type: 2,
  //     titulo:
  //       'E-ACESSIBILIDADE E FORMAÇÃO DOCENTE: INCLUSÃO DE ESTUDANTES COM DEFICIÊNCIA VISUAL TOTAL EM CURSOS SUPERIORES ONLINE E NA CIBERCULTURA',
  //     autor: 'VALERIA DE OLIVEIRA SILVA',
  //     resumo: '',
  //     orientador: 'Edméa Oliveira dos Santos ',
  //     dataPublicacao: '09/08/2013',
  //     linkPdf: 'http://www.proped.pro.br/'
  //   },
  //   {
  //     type: 4,
  //     autor: 'Cristiane Porto',
  //     linkPdf:
  //       'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4700096J0'
  //   },
  //   {
  //     type: 4,
  //     autor: 'Miriam Maia do Amaral',
  //     linkPdf:
  //       'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4233076T8'
  //   },
  //   {
  //     type: 4,
  //     autor: 'Simone de Lucena',
  //     linkPdf:
  //       'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4700714D1'
  //   },
  //   {
  //     type: 4,
  //     autor: 'Terezinha Fernandes',
  //     linkPdf:
  //       'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4121288J7'
  //   }
  //   /* {
  //     titulo:"",
  //     autor:"",
  //     resumo:"",
  //     orientador:"",
  //     dataPublicacao:"",
  //     linkPdf:""
  //   } */
  // ];
}
