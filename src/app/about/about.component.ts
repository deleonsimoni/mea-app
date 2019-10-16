import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {}

  ngOnInit() {}

  formacaoAcad=[
    {
      formacao:"Doutorado em Educação", 
      data:"2002 - 2005", 
      instituicao:"Universidade Federal da Bahia/UFBA - Brasil.", 
      titulo:"Educação online - Cibercultura e Pesquisa-Formação na Prática Docente.", 
      grade:"Grande área - Ciências Humanas.", 
      orientador:"Orientador - Roberto Sidney Macedo.",
      atividades:[
        {atividade:"Setores de atividade - Formação Permanente e Outras Atividades de Ensino, Inclusive Educação À Distância e Educação Especial."},
        {atividade:"Educação Superior - Educação Média de Formação Técnica Ou Profissional."}
      ]
    },
    {
      formacao:"Mestrado em Educação", 
      data:"1999 - 2002", 
      instituicao:"Universidade Federal da Bahia/UFBA - Brasil.", 
      titulo:"O Currículo e o Digital - Educação presencial e a distância.", 
      grade:"Grande área - Ciências Humanas.", 
      orientador:"Orientador - Roberto Sidney Macedo.",
      atividades:[
        {atividade:"Setores de atividade - Formação Permanente e Outras Atividades de Ensino, Inclusive Educação À Distância e Educação Especial."}
      ]
    },
    {
      formacao:"Aperfeiçoamento em Pós-Doutorado em e-Learning.", 
      data:"2013 - 2014", 
      instituicao:"Universidade Aberta de Lisboa/UAB-PT - Portugal.", 
      titulo:" A cibercultura na era das redes sociais e da mobilidade: novas potencialidades para a formação de professores e pesquisadores em programas de pós-graduação online.",  
      orientador:"Orientador - Lina Morgado.",
    },
    {
      formacao:"Pós-Doutorado", 
      data:"2013 - 2014", 
      instituicao:"Universidade Aberta de Lisboa/UAB-PT - Portugal.", 
      titulo:"O Currículo e o Digital - Educação presencial e a distância.", 
      grade:"Grande área - Ciências Humanas / Área: Educação / Subárea: Educação à Distância on-line.", 
    }
  ]
  atuProf=[
    {
      instituicao:"Universidade Federal Rural do Rio de Janeiro/UFRRJ - Brasil.",
      vinculos:[
        {data:"2018", funcao:"Professora PROPED/UERJ, Enquadramento Funcional - Professor permante no Proped/UERJ", obs:"Professora adjunto da Faculdade de Educação da UERJ, atua no PROPED - Programa de Pós-Graduação em Educação da UERJ , na Linha de Pesquisa: Contidiano , redes educativas e processos culturais. Atividades de Pesquisa Líder do GPDOC - Grupo de Pesquisa Docência e Cibercultura. Professora do curso de Pedagogia. Atividades de Ensino Ministra as disciplinas da graduação presencial de Pedagogia: Tecnologia na Educação Didática Cotidiano Escolar Informática na Educação Educação Online Processos de formação de leitores e escritóres Ministra disciplinas da Pós-Graduação no Proepd/UERJ : Cibercultura, redes educativas e processos culturais (eletiva para mestrado e doutorado) Multiplas linguagens e currículo (eletiva para mestrando e doutorado) Pesquisa com os cotidianos (obrigatória para mestrado e doutorado) Atua na Gestão de atividaddes acadêmicas: Comissão de bolsas (2014/2006) Coordenação da linha de pesquisa (2015 até a presente data) Comissão de seleção de mestrado (2008-2010) Coordena a área de Informática na Educação no curso de Pedagogia a distância do Consórcio CEDERJ/UERJ, no período de (2007 até a presente data) Coordenadora e docente no Curso de Especialização em Educação com Aplicação da Informática (EDAI) no período de (2008-2013)."},
        {data:"2007 - 2018", funcao:"Servidor Público, Enquadramento Funcional - Professor adjunto"}
      ],
      atividades:[
        {data:"06/2008", atividade:"Direção e administração, Faculdade de Educação", obs:"Cargo ou função - Coordenação do curso de especialização 'Educação com aplicação da Informática'."},
        {data:"04/2008", atividade:"Direção e administração, Faculdade de Educação", obs:"Cargo ou função - Coordenação de Tutoria do curso de Pedagogia a Distância da UERJ/CEDERJ."},
        {data:"04/2007", atividade:"Ensino, Pedagogia, Nível: Graduação", obs:"Disciplinas ministradas Informática na Educação Pesquisa e Prática Pedagógica"},
        {data:"12/2006", atividade:"Pesquisa e desenvolvimento , Faculdade de Educação", obs:"Linhas de pesquisa - Cotidianos, Redes Educativas e Processos Culturais"}
      ]
    },
    {
      instituicao:"Universidade Federal de Juiz de Fora/UFJF - Brasil.",
      vinculos:[
        {data:"2006 - 2007", funcao:"Professor Visitante, Enquadramento Funcional: Professora visitante e pesquisadora."}
      ],
      atividades:[
        {data:"04/2006 - 03/2007", atividade:"Pesquisa e desenvolvimento , Faculdade de Educação", obs:"Linhas de pesquisa Linguagem e formação de professores."},
        {data:"04/2006 - 03/2007", atividade:"Ensino, Educação, Nível: Pós-Graduação", obs:"Disciplinas ministradas Pesquisa-Formação e Cartografia Cognitiva, Informática na Educação Prensencial e a Distância"},
        {data:"04/2006 - 03/2007", atividade:"Serviços técnicos especializados , Faculdade de Educação", obs:"Serviço realizado - Consultoria para criação/atualização do site do programa e criação de páginas e AVA com alguns professores do programa."}
      ]
    }
  ]
  projPes=[
    {
      data:"2018", 
      titulo:"App-docência: experiências de pesquisa-formação na cibercultura", 
      alunos:"Alunos envolvidos - Graduação(1) / Mestrado acadêmico(1) / Doutorado(4)",
      desc:" Nesta pesquisa procuramos compreender como formam e se formam docentes, com os potenciais das tecnologias móveis e ubíquas, mais precisamente com os dispositivos móveis e aplicativos para celulares (App), em diferentes contextos de pesquisa-formação na cibercultura. Metodologicamente, daremos continuidade aos estudos das epistemologias das práticas (Freire, Nóvoa, Josso, D?villa), com ênfase na abordagem multirreferencial (Ardoino, Macedo, Morin, Babier, Beger) e as pesquisas com os cotidianos (Alves). Atualizaremos o método da pesquisa-formação na cibercultura (Santos e coletivo GPDOC), método por nós consolidado e atualizado a cada nova pesquisa. Pesquisamos em contextos de docência, desta forma não separamos a pesquisa acadêmica do cotidiano de nossas salas de aula, sejam elas presenciais e ou online. Atuamos em rede, com a formação de professores na graduação e pós-graduação em Educação da UERJ, bem como em diferentes redes educativas e espaços multireferenciais na relação cidade/ciberespaço. Para tanto, desenvolveremos dispositivos e atos de currículos, mediados pelo digital em rede, mais especificamente com aplicativos para celulares inteligentes (App). Os celulares são artefatos culturais que estão nas palmas das mãos de todos os praticantes de nossas pesquisas, dessa forma, vamos atuar com os cotidianos de formação ubíqua dos praticantes culturais (professores e pesquisadores em formação, docentes, educadores de museus, dentre outros). Nosso campo de pesquisa será forjado nas mais diferentes redes educativas e espaços multirreferenciais. Nestes campos de pesquisas, produziremos material de pesquisa que se materializará em narrativas, imagens e sons. Com este material de pesquisa (dados) ?conversaremos? no intuito de instituir uma ?análise?, pela compreensão da compreensão (Morin) dos praticantes da pesquisa que formam e nos formam em contexto. Faremos interpretação hermenêutica (Macedo). Como resultados prevemos a formação dos praticantes envolvidos na pesquisa, criação de currículos online, atualização do método da pesquisa-formação na cibercultura, mobilização de saberes e multiletramentos didáticos, científicos e urbanos. Esta é uma pesquisa institucional que de desdobrará em eixos e sub-projetos, onde teremos a coautoria de bolsistas de iniciação científica, mestrandos e doutorandos do GPDOC ? Grupo de pesquisa docência e cibercultura.", 
      integrantes:"Integrantes: Edméa Oliveira dos Santos - Coordenador / Vivian Martins Lopes de Souza - Integrante / Wallace Almeida - Integrante / Frieda Marti - Integrante / Michelle Trancoso - Integrante / Joelma Almeida - Integrante.",
      estatus:"Situação - Em andamento | Natureza - Pesquisa."
    },
    {
      data:"2017", 
      titulo:"88881.157953/2017-01- Promob - Fapitec/Capes. Desafios para a pesquisa, a formação docente e as aprendizagens ns educação básica na cibercultura em tempo de app-learning", 
      alunos:"Alunos envolvidos - Mestrado acadêmico(2) / Doutorado(3)",
      desc:"Descrição: 88881.157953/2017-01- Promob - Fapitec/Capes. Este projeto objetiva desenvolver estudos e trocar experiências, de professores e pesquisadores, sobre o uso de aplicativos e dispositivos digitais e também sobre a formação que acontece por meio deles, visando criar novos olhares, novas maneiras de estudar e propor sua integração à educação. Os desafios e as dinâmicas que os aplicativos proporcionam múltiplos processos de ensino e aprendizagem na era das conectividades serão multireferenciados para a criação de novas definições e práticas. Na Cibercultura, tem-se observado a presença cotidiana das tecnologias móveis e os mais diferentes aplicativos se tornaram populares. Estas auxiliam milhares de pessoas conectadas a organizarem, de forma variada o seu modo de viver, de pensar e de agir individualmente ou em sociedade. Observa-se o crescimento intenso do desenvolvimento e uso de aplicativos dentro e fora das salas de aula, assim como aumenta a demanda por uma formação docente realmente inovadora que proponha (e pesquise) novas pedagogias diante de uma educação ao alcance das mãos. Os alunos por meio do uso de seus tablets, computadores e smartphones, têm contato com inovações tecnológicas, estas colaboram para redimensionar as práticas pedagógicas antigas e criar novas práticas. O uso de aplicativos e dispositivos na educação faz com que a cultura adulta e juvenil se organize, buscando ampliar seu uso na educação formal e informal. Nesta perspectiva, este projeto reúne olhares educacionais com enfoques diversos para o tema aqui delineado.", 
      integrantes:"Integrantes: Edméa Oliveira dos Santos - Integrante / Cristiane Porto - Coordenador / Andréa Lapa - Integrante / Ronaldo Linhares - Integrante / Maria Luiza Oswald - Integrante / Maria da Conceição Soares - Integrante / José Gomes - Integrante / Dulce Cruz - Integrante / Mônica Fantim - Integrante. Financiador(es): Fundação de Apoio à Pesquisa e à Inovação Tecnológica do Estado de Sergipe - Auxílio financeiro.",
      estatus:"Situação - Em andamento | Natureza - Pesquisa."
    }
  ]
}
