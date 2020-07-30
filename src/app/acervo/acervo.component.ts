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
  // tslint:disable-next-line: member-ordering
  autorais = [
    {
      titulo: 'Pesquisa Formação na Cibercultura',
      descricao: '',
      autores: 'Edméa Santos',
      editora: 'edufpi',
      comoCitar: '',
      imagem: '../assets/Pesquisa-formação na cibercultura.jpg',
      arquivo: '',
      linkLoja: '',
      fontePdf: '',
      linkPdf: '',
      download:
        '../assets/livros/Livro PESQUISA-FORMAÇÃO NA CIBERCULTURA_E-BOOK.pdf',
      fonteIngles: '',
      linkIngles: ''
    },
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
      titulo: 'INVESTIGACIÓN Y FORMACIÓN EN LA CIBERCULTURA',
      descricao:
        // tslint:disable-next-line: max-line-length
        '',
      autores: 'Edméa Santos',
      editora: 'EDUFPI',
      comoCitar: '',
      imagem: '../assets/investigacion y formacion en la cibercultura.jpg',
      download:
        '../assets/livros/Livro INVESTIGACIÃ_N y FORMACIÃ_N EN LA CIBERCULTURA_E-BOOK.pdf',

      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo:
        'O Caminhar na Educação: Narrativas de Aprendizagens, Pesquisa e Formação',
      descricao:
        // tslint:disable-next-line: max-line-length
        '',
      autores: 'Edméa Santos, Leonardo Rangel dos Reis',
      editora: 'Atena Editora',
      comoCitar: '',
      imagem: '../assets/caminharNaEducacao.jpg',
      fontePdf: '',
      linkPdf:
        'https://www.finersistemas.com/atenaeditora/index.php/admin/api/ebookPDF/3350',
      fonteIngles: '',
      linkIngles: ''
    }
  ];

  webLivroSocial = [
    {
      titulo: '',
      linkPdf: 'https://ieducacao.ceie-br.org'
    }
  ];

  organizados = [
    {
      titulo: 'APP-EDUCATION',
      descricao: `App-Education, ou “educação baseada em aplicativos”, seria uma nova roupagem para o software
        educacional, geralmente instrucionista, que se popularizou na década de 1990? Seria uma didática
        neotecnicista? A presente obra acaba com essas dúvidas e descontrói preconceitos.
        Na primeira parte do livro, sobre Fundamentos e Contextos, fi ca evidente que não se trata de
        uma nova roupagem para a educação bancária.Os aplicativos são estruturantes da cultura
        contemporânea, são artefatos técnico- culturais que instituem linguagens e espaços de convivência,
        instauram e potencializam redes educativas que nos formam a partir de práticas culturais e
        processos de subjetivação.
        Na segunda parte do livro, sobre Práticas Educativas em Mobilidade, conhecemos alguns exemplos
        de como professores e pesquisadores vêm praticando a App - Education em diversas áreas e níveis
        educacionais.Os relatos e refl exões ilustram como a cultura digital vem modifi cando os processos
        educacionais convencionais e nos convidam a repensar nossas próprias práticas pedagógicas.
        Com o diálogo entre teoria e prática, este livro nos ajuda a compreender e a conceber uma
        educação em tempos de Cibercultura.
        Profº Dr.Mariano Pimentel(UNIRIO)'`,
      autores: 'Cristiane Porto, Edméa Oliveira dos Santos',
      editora: 'EDUFBA',
      comoCitar: '',
      imagem: '../assets/app-education.jpg',
      arquivo: '',
      linkLoja:
        'https://www.amazon.com.br/Facebook-educa%C3%A7%C3%A3o-publicar-curtir-compartilhar-ebook/dp/B0187Q5LE8/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=edmea+santos&qid=1571014338&sr=8-3',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo: 'O LIVRO NA CIBER CULTURA',
      descricao:
        'Para que servem os encontros entre pares ? O que é supervisionar  um pós-doc ? Este livro é um dos produtos de um encontro muito fecundo entre Edméa Santos e Cristiane Porto no Proped/UERJ. Preocupadas com temos de conteúdo , forma , linguagens , metodologias , fundamentos , dilemas , práticas e dispositivos queríamos  saber “como o livro vem se apresentando na cibercultura ? “. Este livro coletivo , por nós idealizado, contou com a participação de gente muito importante . Gente que faz educação , comunicação e que vem pesquisando o tema . Muitos pesquisam, outros fazer , muitos outros fazem para saber ! E editora parceira já disponibilizou o pdf ! Isso mesmo, o conteúdo é obra aberta para a partilha . Que venham as práticas , mais pensamentos , autorias . Aproveitemos e partilhemos  para o mundo da língua portuguesa ! Bora , bora porque não viemos a este mundo para fazer mais do mesmo.',
      autores: 'Cristiane Porto, Edméa Santos',
      editora: 'Universitária Leopoldianum',
      comoCitar: '',
      imagem: '../assets/olivronacibercultura.jpg',
      arquivo: '',
      linkLoja: '',
      linkPdf:
        'https://www.unisantos.br/wp-content/uploads/2019/11/Cibercultura.pdf',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo: 'Pesquisa e mobilidade na cibercultura: itinerâncias docentes',
      descricao:
        'O livro visa promover uma compreensão das relações existentes entre a educação, tecnologias digitais e mobilidade. O principal objetivo do projeto foi entender como as tecnologias digitais e a mobilidade podem contribuir para a pesquisa e a formação no atual contexto da cibercultura em espaços formais e não formais de aprendizagem.',
      autores:
        'Cristiane Porto, Edméa Santos, Maria Luíza Oswald e Edvaldo Couto',
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
        'https://static.scielo.org/scielobooks/c3h5q/pdf/porto-9788578792831.pdf',
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
      autores: 'Edvaldo Couto, Cristiane Porto, Edméa Santos',
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
      titulo: 'Práticas pedagógicas e tecnologias digitais',
      descricao:
        'Os artigos deste livro trazem questões que discutem os fundamentos epistemológicos do uso de tecnologias na formação de professores, focando em suas implicações em relação à pesquisa-formação, currículo, didática e aprendizagem.',
      autores: 'Edméa Santos e Lynn Alves',
      editora: 'e-papers',
      comoCitar: '',
      imagem: '../assets/praticas pedagogicas.jpg',
      arquivo: '',
      linkLoja:
        'http://www.e-papers.com.br/produtos.asp?codigo_produto=861&promo=0',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo: 'Avaliação Da Aprendizagem Em Educação Online',
      descricao:
        'Educação online? Ah, então é moleza...! Este livro reúne a experiência de 65 representantes da área e derruba esse mito, mostrando que a avaliação online é uma questão complexa que só pode ser resolvida com conhecimento de causa. Mudam as formas de pensar e de aprender mudam também as formas de avaliar. A tradicional prova - temida por alguns, e nem sempre eficaz para verificar resultados - torna-se mais global e se renova em portfólios, participação em comunidades virtuais, blogs, videoconferências e outros dispositivos. A modalidade online revoluciona tempo e espaço e permite realizar avaliações ao longo do processo, voltadas para o desenvolvimento de competências.',
      autores: 'Marco Silva, Edméa Santos',
      editora: 'Loyola',
      comoCitar: '',
      imagem:
        '../assets/Avaliação-de-Aprendizage-em-Educação-Online-2-Edição.jpg',
      arquivo: '',
      linkLoja:
        'https://www.estantevirtual.com.br/livros/marco-silva-edmea-santos/avaliacao-da-aprendizagem-em-educacao-online/764118405',
      fontePdf: '',
      linkPdf: '',
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
  ];

  internacionais = [
    {
      titulo:
        'Experiences and perceptions of pedagogical practices with Game-Based Learning & Gamification',
      descricao: '',
      autores:
        'Edited by Bento Duarte da Silva, José Alberto Lencastre, Marco Bento, António J. Osório',
      editora: 'Research Centre on Education (CIEd)',
      comoCitar: '',
      imagem: './assets/pressStart.jpg',
      arquivo: '',
      linkLoja: '',
      fontePdf: '',
      download:
        '../assets/livros/Livro Book_Experiences_and_perceptions_of_pedagogical_practices_with_Games.pdf',
      linkPdf:
        'http://repositorium.sdum.uminho.pt/bitstream/1822/62047/1/2019_Book_Experiences_and_perceptions_of_pedagogical_practices_with_Games.pdf',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo: 'FACEBOOK AND EDUCATION post, like & share',
      descricao: '',
      autores: 'Alexandre Chagas, Cristiane Porto, Edméa Santos',
      editora: 'Editora da Universidade Estadual da Paraíba',
      comoCitar: '',
      imagem: './assets/facebook and education.jpg',
      arquivo: '',
      linkLoja: '',
      fontePdf: '',
      linkPdf:
        'http://www.uepb.edu.br/download/ebooks/Facebook-and-Education.pdf',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo:
        'New Literacies, New Agencies?: A Brazilian Perspective on Mindsets, Digital Practices and Tools for Social Action In and Out of School (New Literacies and Digital Epistemologies',
      descricao:
        'From students as teachers’ pets to teachers as Second Life avatars, or from being ridiculed for not knowing your syntax to ridiculing others through multimodal remixing, something has changed in the way people are acting and being acted upon through literacies. From parallel text processing «under a cloud» to text-as-process enhanced by cloud computing, or from one laptop per child to several laptops left behind by children in creative spoken interaction, learners and educators’ actions through and around texts and technologies provide quite a telling example of such changes. From writing as technology to blogging as a tool for fostering critical mindsets within complexity, or from automatized knowledge acquisition routines to new forms of relating to knowledge and new perspectives on autonomy, social ordering and Self constitutional processes defy binaries such as agent/structure, global/local, social/technical, virtual/real, or even human/non-human. In this volume a team of scholars from some of the most prestigious Brazilian universities address these issues, and illustrate them with findings from research on the interplay between new literacies, digital technologies and social action in and out-of-school. The chapters introduce, or revisit, an array of theoretical constructs from education, sociology, linguistics and media studies, while presenting a new inside perspective about how research on new literacies is being carried out in Brazil. Altogether, they provide a very useful set of ideas, tools and analytical frameworks for researchers, teachers, and students of Education, Language and Arts and Communication worldwide, especially those concerned with technology-enhanced education and social inclusion.',
      autores: 'Eduardo S. Junqueira, Marcelo E. K. Buzato',
      editora: 'Peter Lang Inc. - International Academic Publishers',
      comoCitar: '',
      imagem: './assets/New-Literacies-New-Agencies.jpg',
      arquivo: '',
      linkLoja:
        'https://www.amazon.com/-/pt/New-Literacies-Agencies-Perspective-Epistemologies-dp-1433121123/dp/1433121123/ref=mt_hardcover?_encoding=UTF8&me=&qid=',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo: 'Better e-Learning for innovation in education',
      descricao:
        '"Better e-Learning for All", acronym "Better-e", is a project funded by the Erasmus+ Programme, in the scope of its Key-Action 2, Strategic Partnerships of cooperation for innovation and the exchange of good practices. The project resulted from the needs assessment by some Institutions that had worked together in previous contexts and projects, and was successfully proposed for funding to the Turkish National Agency of the Erasmus+ Programme by Adana Vocational School of Higher Education, Çukurova University (funding contract 2015-1-TR01-KA204-021954)',
      autores:
        'Gülden İlin, Şükrü Çetin İlin, Bento Duarte da Silva, António J. Osório, José Alberto Lencastre',
      editora: 'Şükrü Çetin İlın (Çukurova University, Adana, Turkey)',
      comoCitar: '',
      imagem:
        './assets/Better_e-Learning_for_Innovation_in_Education_e-Book2017.jpg',
      arquivo: '',
      linkLoja: '',
      fontePdf: '',
      linkPdf:
        'http://repositorium.sdum.uminho.pt/bitstream/1822/48472/1/Better_e-Learning_for_Innovation_in_Education_e-Book2017.pdf',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo:
        'International Handbook of E-Learning Volume 2 : Implementation and Case Studies',
      descricao:
        "The International Handbook of e-Learning, Volume 2 provides a comprehensive compendium of implementation and practice in all aspects of e-learning, one of the most significant ongoing global developments in the entire field of education. Covering the integration, challenges, implications, and context-appropriate use of open education networks, blended learning, mobile technologies, social media, and other platforms in a variety of unique international settings, these thirty contributions illustrate the wide-ranging applications and solutions made possible by this rapidly growing new paradigm. Case studies are driven by empirical research and attention to cultural specificity, while future research needs are discussed in relation to both confirmed practice and recent changes in the field. The book will be of interest to anyone seeking to create and sustain meaningful, supportive learning environments within today's anytime, anywhere framework, from teachers, administrators, and policy makers to corporate and government trainers.",
      autores: 'Mohamed Ally , Edited by  Badrul H. Khan',
      editora: 'Taylor & Francis Ltd',
      comoCitar: '',
      imagem: './assets/International-Handbook-of-E-Learning-Volume-2.jpg',
      arquivo: '',
      linkLoja:
        'https://www.bookdepository.com/International-Handbook-E-Learning-2-Mohamed-Ally/9781138793729',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo:
        'The Assessment of Interactive Learning: The Contributions Made by Online Portfolios and Cognitive Mapping',
      descricao:
        'This chapter proposes the use of a communicational approach to rethink conceptual and methodological aspects of learning assessment in the context of interactive online information and communication technologies. The approach makes use of the digital online portfolio interface together with cognitive mapping techniques (mind maps and concept maps) as devices for assessing learning in online education. The examples described in the text are the result of pedagogical practice and research undertaken by the authors.',
      autores: 'Edméa Santos, Marco Silva',
      editora: 'SCOPUS',
      comoCitar: '',
      imagem:
        './assets/Handbook-of-Research-on-Collaborative-Learning-Using-Concept-Mapping.jpg',
      arquivo: '',
      linkLoja:
        'https://www.igi-global.com/chapter/assessment-interactive-learning/36289',
      fontePdf: '',
      linkPdf: '',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo:
        'Tecnología, innovación e investigación en los procesos de enseñanza-aprendizaje',
      descricao:
        'Este libro pretende mostrar un compendio de aportaciones en torno a la tecnología, innovación e investigación en los procesos de enseñanza-aprendizaje, de ahí su título. Desde diversos contextos educativos, los autores respectivos de cada capítulo dan a conocer las posibilidades que ofrecen las Tecnologías de la Información y la Comunicación [TIC] con respecto al diseño y desarrollo de nuevos escenarios de enseñanza-aprendizaje. Cabe considerar que las TIC deben asentarse en fundamentos pedagógicos cuando se trate de perfilar las características de dichos escenarios educativos. Así, se podrán mostrar reflexiones, innovaciones e investigaciones que añadan nuevos significados al conocimiento. En este sentido, las aportaciones de este libro se estructuran en cuatro grandes bloques temáticos: Innovación Educativa, Investigación Científica en Tecnología Educativa, Políticas Educativas y de Investigación, y Escenarios de aprendizaje basados en TIC. Se trata de cuatro pilares en los cuales consideramos debe fundamentarse el aporte de investigación, desarrollo e innovación que este libro contiene a fin de responder a las exigencias educativas del siglo XXI.',
      autores: 'Roig-Vila, Rosabel(ed.)',
      editora: 'Octaedro',
      comoCitar: '',
      imagem:
        './assets/Tecnología-innovación-e-investigación-en-los-procesos-de-enseñanza-aprendizaje.jpg',
      arquivo: '',
      linkLoja: '',
      fontePdf: '',
      linkPdf: 'https://rua.ua.es/dspace/handle/10045/61787',
      fonteIngles: '',
      linkIngles: ''
    },
    {
      titulo:
        'Open Educational Resources and Social Networks - Recursos Educacionais Abertos e Redes Sociais',
      descricao:
        'The Open Educational Resources (OER) movement, arguably one of the most significant early twenty-first century developments, has already celebrated 10 years of its mission towards opening up access to knowledge for all. During this next decade, we believe that the focus of the OER movement will move beyond the provision of ‘open content’ to include ‘open construction’. Knowledge is created in a constructive process, so our understanding of OER should include, not only teaching and learning materials shared under open licenses, but also open technologies, open methodologies for transparent building and sharing of OER as knowledge.',
      autores: '',
      editora: '',
      comoCitar: '',
      imagem: './assets/Recursos-Educacionais-Abertos-e-Redes-Sociais.jpg',
      arquivo: '',
      linkLoja: '',
      fontePdf: '',
      linkPdf: 'https://oer.kmi.open.ac.uk/',
      fonteIngles: '',
      linkIngles: ''
    }
  ];
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
}
