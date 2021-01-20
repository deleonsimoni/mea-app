import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ElementRef
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  modalRef: BsModalRef;
  @ViewChild('template', { static: false }) templateRef: TemplateRef<any>;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    setTimeout(() => {
      this.modalRef = this.modalService.show(this.templateRef);
    }, 500);
    //this.isLoading = true;
    /*this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });*/
  }
}
