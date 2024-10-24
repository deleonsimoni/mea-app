import {
  Component,
  OnInit,
  SecurityContext,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LivesModalComponent } from '@app/modals/lives-modal/lives-modal.component';
import { Live } from '@app/models';
import { LiveService } from '@app/service/live.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-lives',
  templateUrl: './lives.component.html',
  styleUrls: ['./lives.component.scss']
})
export class LivesComponent implements OnInit {
  @ViewChild('template', { static: false }) templateRef: TemplateRef<any>;
  modalRef: BsModalRef;
  livroSelecionado: any;
  pageOfItems: Array<any>;
  livesSplit: any;
  title: any;
  dataModal: any;

  public lives: Array<Live> = [];

  constructor(
    private sanitizer: DomSanitizer,
    private modalService: BsModalService,
    private readonly liveService: LiveService
  ) {
    this.listAllLives();
  }

  ngOnInit() {
    // this.lives.forEach((live: any) => {
    //   if (live.link && live.link.includes('watch')) {
    //     live.link = live.link.replace('watch?v=', 'embed/');
    //   }
    //   live.linkSafe = this._sanitizer.bypassSecurityTrustResourceUrl(live.link);
    // });
  }

  public generateSafeLink(link: string): SafeResourceUrl {
    if (link.includes('watch')) {
      link = link.replace('watch?v=', 'embed/');
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  public listAllLives(): void {
    this.liveService.list().subscribe((lives: Array<Live>) => {
      this.lives = lives;
      this.pageOfItems = lives;
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  openModal(idModal: any) {
    switch (idModal) {
      case 1:
        // this.livesSplit = this.livesCovid;
        this.title = 'Lives COVID';

        break;

      default:
        break;
    }

    this.dataModal = { lives: this.livesSplit, title: this.title };
    this.modalRef = this.modalService.show(LivesModalComponent, {
      initialState: {
        lives: this.dataModal
      }
    });
  }

  public showVideo(link: string): boolean {
    if (
      link.includes('youtube') ||
      link.includes('facebook') ||
      link.includes('instagram')
    ) {
      return true;
    }

    return false;
  }
}
