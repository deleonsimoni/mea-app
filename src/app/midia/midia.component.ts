import {
  Component,
  OnInit,
  Sanitizer,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Media } from '@app/models';
import { MediaService } from '@app/service/media.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-midia',
  templateUrl: './midia.component.html',
  styleUrls: ['./midia.component.scss']
})
export class MidiaComponent implements OnInit {
  modalRef: BsModalRef;
  livroSelecionado: any;
  public media: Array<Media> = [];

  constructor(
    private modalService: BsModalService,
    private readonly mediaService: MediaService,
    private readonly sanitize: DomSanitizer
  ) {
    this.listAllMedia();
  }

  ngOnInit() {}

  listAllMedia() {
    this.mediaService.list().subscribe((media: Array<Media>) => {
      this.media = media;
      console.log(media);
    });
  }

  openModal(template: TemplateRef<any>, livro: any) {
    this.livroSelecionado = livro;
    this.modalRef = this.modalService.show(template);
  }

  safeLink(link: string) {
    return this.sanitize.bypassSecurityTrustResourceUrl(link);
  }

  // entrevistas = [
  //   {
  //     titulo: 'Entrevista com Edméa Oliveira dos Santos',
  //     descricao: '',
  //     autores: '',
  //     editora: '',
  //     comoCitar: '',
  //     imagem: '../assets/teccogs.jpg',
  //     arquivo: '',
  //     linkLoja: '',
  //     fontePdf: '',
  //     linkPdf:
  //       'http://www4.pucsp.br/pos/tidd/teccogs/edicao_completa/teccogs_cognicao_informacao-edicao_16-2017-completa.pdf',
  //     fonteIngles: '',
  //     linkIngles: ''
  //   },
  //   {
  //     titulo: 'Entrevista com os professores Marco Silva e Edméa Santos',
  //     descricao: '',
  //     autores: '',
  //     editora: '',
  //     comoCitar: '',
  //     imagem: '../assets/paideia.jpg',
  //     arquivo: '',
  //     linkLoja: '',
  //     fontePdf: '',
  //     linkPdf:
  //       'http://periodicos.unimesvirtual.com.br/index.php/paideia/article/view/31/22',
  //     fonteIngles: '',
  //     linkIngles: ''
  //   }
  // ];
}
