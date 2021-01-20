import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lives-modal',
  templateUrl: './lives-modal.component.html',
  styleUrls: ['./lives-modal.component.scss']
})
export class LivesModalComponent implements OnInit {
  lives: any;
  title: any;
  public products: any[];

  constructor(
    protected _sanitizer: DomSanitizer,
    private modalService: BsModalRef
  ) {}

  close() {
    this.modalService.hide();
  }

  ngOnInit() {
    this.title = this.lives.title;
    this.lives = this.lives.lives;

    this.lives.forEach((live: any) => {
      if (live.link && live.link.includes('watch')) {
        live.link = live.link.replace('watch?v=', 'embed/');
      }
      live.linkSafe = this._sanitizer.bypassSecurityTrustResourceUrl(live.link);
    });
  }
}
