import { Component, OnInit } from '@angular/core';
import { ResearchProjectService } from '@app/service/research-project.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {
  public projects: Array<any> = [];

  constructor(private readonly researchProjectService: ResearchProjectService) {
    this.listAllProjects();
  }

  ngOnInit() {}

  private listAllProjects(): void {
    this.researchProjectService
      .list()
      .subscribe((projects: Array<any>) => (this.projects = projects));
  }

  // projPes = [
  //   {
  //     titulo: 'APP-DOCÊNCIA: EXPERIÊNCIAS DE PESQUISA-FORMAÇÃO NA CIBERCULTURA',
  //     periodo: '2018 - 2020',
  //     linhaPesquisa: 'Cotidianos, Redes Educativas e Processos Culturais',
  //     grupoPesquisa: 'GPDOC - Grupo de Pesquisa Docência e Cibercultura',
  //     financiamento: 'Programa PROCIÊNCIA FAPERJ/UERJ',
  //     resumo:
  //       'Nesta pesquisa procuramos compreender como formam e se formam docentes, com os potenciais das tecnologias móveis e ubíquas, mais precisamente com os dispositivos móveis e aplicativos para celulares (App), em diferentes contextos de pesquisa-formação na cibercultura. Metodologicamente, daremos continuidade aos estudos das epistemologias das práticas (Freire, Nóvoa, Josso, D’villa), com ênfase na abordagem multirreferencial (Ardoino, Macedo, Morin, Babier, Beger) e as pesquisas com os cotidianos (Alves). Atualizaremos o método da pesquisa-formação na cibercultura (Santos e coletivo GPDOC), método por nós consolidado e atualizado a cada nova pesquisa. Pesquisamos em contextos de docência, desta forma não separamos a pesquisa acadêmica do cotidiano de nossas salas de aula, sejam elas presenciais e ou online. Atuamos em rede, com a formação de professores na graduação e pós-graduação em Educação da UERJ, bem como em diferentes redes educativas e espaços multireferenciais na relação cidade/ciberespaço. Para tanto, desenvolveremos dispositivos e atos de currículos, mediados pelo digital em rede, mais especificamente com aplicativos para celulares inteligentes (App). Os celulares são artefatos culturais que estão nas palmas das mãos de todos os praticantes de nossas pesquisas, dessa forma, vamos atuar com os cotidianos de formação ubíqua dos praticantes culturais (professores e pesquisadores em formação, docentes, educadores de museus, dentre outros). Nosso campo de pesquisa será forjado nas mais diferentes redes educativas e espaços multirreferenciais. Nestes campos de pesquisas, produziremos material de pesquisa que se materializará em narrativas, imagens e sons. Com este material de pesquisa (dados) “conversaremos” no intuito de instituir uma “análise”, pela compreensão da compreensão (Morin) dos praticantes da pesquisa que formam e nos formam em contexto. Faremos interpretação hermenêutica (Macedo). Como resultados prevemos a formação dos praticantes envolvidos na pesquisa, criação de currículos online, atualização do método da pesquisa-formação na cibercultura, mobilização de saberes e multiletramentos didáticos, científicos e urbanos. Esta é uma pesquisa institucional que de desdobrará em eixos e sub-projetos, onde teremos a coautoria de bolsistas de iniciação científica, mestrandos e doutorandos do GPDOC – Grupo de pesquisa docência e cibercultura.',
  //     palavraChave: [
  //       { palavra: 'app-docência' },
  //       { palavra: 'pesquisa-formação na cibercultura' },
  //       { palavra: 'educação online' },
  //       { palavra: 'formação de professores' },
  //       { palavra: 'multirreferencialidade' },
  //       { palavra: 'cotidianos' }
  //     ],
  //     objGeral: [
  //       {
  //         obj:
  //           'Compreender como formam e se formam docentes, com os potenciais das tecnologias móveis e ubíquas, mais precisamente com os dispositivos móveis e aplicativos para celulares (App), em diferentes contextos de pesquisa-formação na cibercultura.'
  //       }
  //     ],
  //     objEspecifico: [
  //       {
  //         obj:
  //           'Investigar como aplicativos estão instituindo práticas disruptivas de pesquisa-formação na cibercultura em diferentes redes educativas e espaços multirreferenciais de aprendizagem;'
  //       },
  //       {
  //         obj:
  //           'Compreender como estudantes de graduação e pós-graduação utilizam os app em suas atividades de aprendizagem e processos formativos, uma vez que entendemos a docência sempre implicada com a discência;'
  //       },
  //       {
  //         obj:
  //           'Mapear app (aplicações para celulares) e analisar suas potencialidades comunicacionais e pedagógicas para o exercício da pesquisa-formação na cibercultura;'
  //       },
  //       {
  //         obj:
  //           'Desenvolver atos de currículos com App em situações de pesquisa-formação nas diferentes redes educativas e espaços multirreferenciais de aprendizagem, a exemplo: dos museus, escolas e currículos online na graduação e pós-graduação (mestrados online);'
  //       },
  //       {
  //         obj:
  //           'Analisar como práticas de pesquisa-formação em mobilidade podem instituir outros modos de ensinar e pesquisa na cibercultura;'
  //       },
  //       {
  //         obj:
  //           'Atualizar o método de pesquisa-formação na cibercultura, por nós desenvolvido junto ao Gpdoc – grupo de pesquisa docência e cibercultura, em contextos de mobilidade ubíqua.'
  //       }
  //     ]
  //   },
  //   {
  //     titulo: 'Análise de dados em pesquisa-formação na cibercultura',
  //     periodo: '2015 - 2018',
  //     linhaPesquisa: 'Cotidianos, Redes Educativas e Processos Culturais',
  //     grupoPesquisa: 'GPDOC - Grupo de Pesquisa Docência e Cibercultura',
  //     financiamento:
  //       'Programa Prociência UERJ/FAPERJ 2015, Iniciação científica Cnpq.',
  //     resumo:
  //       'O projeto de pesquisa “Análise de dados em pesquisa-formação na cibercultura”, pretende investigar teorias, práticas e dispositivos que potencializem a produção, análise e interpretação de dados produzidos em contextos de pesquisa-formação mediados por tecnologias digitais em rede. Nos últimos 10 anos, atualizamos o método da pesquisa-formação em contextos da cibercultura, especificamente em práticas de educação online mediados por ambientes virtuais e redes sociais na interface cidade/ciberespaço. Neste contexto desenvolvemos dispositivos de pesquisa, junto ao GPDOC – grupo de pesquisa docência e cibercultura, onde procuramos criar ambiências de pesquisa e formação, produzindo dados com professores e pesquisadores praticantes em diversas redes educativas. Os dados produzidos em coautoria se materializam em narrativas e imagens digitais. Sendo assim, procuraremos com este projeto, compreender melhor como dialogar com estes dados e rastros, produzindo sentidos que não só estruturem a comunicação, circulação e divulgação científica, mas também e sobretudo, possa se constituir como mais um espaço multirreferencial de pesquisa e formação. Para tanto, organizamos a pesquisa em dois eixos fundantes. No eixo 1, nosso objetivo é produzir quadro teórico específico para a interpretação de dados em contextos digitais. Lançaremos mão da abordagem multirreferencial, bricolando inspirações da hermenêutica crítica com teorias pós-estruturalistas. No eixo 2, nosso objetivo é mapear e utilizar softwares para produção e interpretação de dados em contextos digitais. Pretendemos com este estudo, contribuir no desenvolvimento e campo das pesquisas qualitativas em educação, atualizar o método da pesquisa-formação na cibercultura com foco na interpretação de dados, contribuir com a formação dos praticantes culturais envolvidos no projeto.',
  //     palavraChave: [
  //       { palavra: 'pesquisa-formação' },
  //       { palavra: 'cibercultura' },
  //       { palavra: 'cotidianos' },
  //       { palavra: 'multirreferencialidade' },
  //       { palavra: 'análise e interpretação de dados' },
  //       { palavra: 'pesquisa qualitativa' }
  //     ],
  //     objGeral: [],
  //     objEspecifico: []
  //   },
  //   {
  //     titulo:
  //       'A cibercultura na era das redes sociais e da mobilidade: novas potencialidades para a formação de professores',
  //     periodo: '2012 - 2014',
  //     linhaPesquisa: 'Cotidianos, Redes Educativas e Processos Culturais',
  //     grupoPesquisa: 'GPDOC - Grupo de Pesquisa Docência e Cibercultura',
  //     financiamento: 'PROCIÊNCIA 2012',
  //     resumo:
  //       'O projeto pretende investigar como as redes sociais, estruturadas pelos softwares sociais da Web 2.0, e a mobilidade dos computadores e dispositivos móveis podem contribuir para a formação de professores-formadores na atual fase da cibercultura. A cibercultura é a cultura contemporânea estruturada pelo uso das tecnologias digitais nas esferas do ciberespaço e das cidades. Em sua fase atual vem se caracterizando pela convergência dos dispositivos e redes móveis, como os laptops, celulares, mídias locativas, e pela emergência dos softwares sociais que vêm estruturando redes sociais no ciberespaço e nas cidades. Nesse contexto, interessa-nos compreender como esses potenciais comunicacionais podem contribuir para a autoria e formação de professores na Educação Superior. O projeto de pesquisa foi estruturado em dois eixos complementares. O eixo 1, “Uso dos softwares sociais pelos professores uma abordagem não formal”, pretende investigar como professores-formadores utilizam as interfaces da Web 2.0 e os dispositivos móveis em seus cotidianos. O eixo 2, “Projeto de pesquisa-formação: articulando interfaces da Web 2.0 com ambiente virtual de aprendizagem e dispositivos móveis”, pretende desenvolver um projeto de formação continuada que articule os potenciais da Web 2.0 com um ambiente virtual de aprendizagem, dispositivos móveis e criação e divulgação de REAs (recursos educacionais abertos), na Faculdade de Educação da UERJ. Optamos pela metodologia da pesquisa-formação multirreferencial, por contemplar como campo de pesquisa os espaços de atuação profissional do professor-pesquisador e de seus colaboradores. A pesquisa prevê como resultados não só contribuir com a formação dos sujeitos envolvidos, mas, também, com a produção científica nos campos da formação de professores na cibercultura, fazendo interfaces com as áreas da Educação, Comunicação e Tecnologia Educacional.',
  //     palavraChave: [
  //       { palavra: 'Cibercultura' },
  //       { palavra: 'Mobilidade' },
  //       { palavra: 'Web 2.0' },
  //       { palavra: 'Redes sociais' },
  //       { palavra: 'Educação online' },
  //       { palavra: 'Pesquisa-formação' }
  //     ],
  //     objGeral: [],
  //     objEspecifico: []
  //   }
  // ];
}
