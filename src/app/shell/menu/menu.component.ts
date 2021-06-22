import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export type MenuItem = {
  name: String;
  link: String;
  isCollapsed: boolean;
  external: boolean;
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isCollapsed = true;

  public listItemMenu: Array<MenuItem> = [];
  private menuList: Array<MenuItem> = [
    {
      isCollapsed: true,
      link: '/curriculo',
      name: 'Curriculo',
      external: false
    },
    {
      isCollapsed: true,
      link: '/gpdoc',
      name: 'GPDOC',
      external: false
    },
    {
      isCollapsed: true,
      link: '/projetos-pesquisa',
      name: 'Projetos de Pesquisa',
      external: false
    },
    {
      isCollapsed: true,
      link:
        'https://scholar.google.com.br/citations?hl=pt-PT&user=5KZzT7QAAAAJ&view_op=list_works&citft=1&citft=2&email_for_op=edmeabaiana%40gmail.com&sortby=pubdate',
      name: 'Artigos e Periódicos',
      external: true
    },
    {
      isCollapsed: true,
      link: '/orientacoes-concluidas',
      name: 'Orientações Concluídas',
      external: false
    },
    {
      isCollapsed: true,
      link: '/livros',
      name: 'Livros',
      external: false
    },
    {
      isCollapsed: true,
      link: '/midia',
      name: 'Midias',
      external: false
    },
    {
      isCollapsed: true,
      link: '/lives',
      name: 'Lives',
      external: false
    },
    {
      isCollapsed: true,
      link: 'https://www.e-publicacoes.uerj.br/index.php/re-doc',
      name: 'REDOC',
      external: true
    },
    {
      isCollapsed: true,
      link: 'http://www.docenciaonline.pro.br',
      name: 'AVA Moodle',
      external: true
    },
    {
      isCollapsed: true,
      link: '/agenda',
      name: 'Newsletters',
      external: false
    }
  ];

  constructor(private router: Router) {
    this.listRoute();
  }

  ngOnInit() {}

  private listRoute(): void {
    const url: string = this.router.routerState.snapshot.url;

    if (url.includes('admin')) {
      this.listItemMenu = [];

      this.menuList.forEach((el: MenuItem) => {
        if (
          el.external === false &&
          (el.name !== 'GPDOC' && el.name !== 'Newsletters')
        ) {
          el.link = `/admin${el.link}`;
          this.listItemMenu.push(el);
        }
      });
    } else {
      this.listItemMenu = this.menuList;
    }
  }

  openExternalLink(link: string) {
    window.open(link, '_blank');
  }
}
