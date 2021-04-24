import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-list-transmitions',
  templateUrl: './list-transmitions.component.html',
  styleUrls: ['./list-transmitions.component.scss']
})
export class ListTransmitionsComponent implements OnChanges {
  @Input() type: string;
  @Input() title: string;
  @Input() transmitions: any[];
  @Output() deleteTransmition: EventEmitter<string> = new EventEmitter();

  pageOfItems: any[] = [];
  pageSize = 6;
  currentPage = 1;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.transmitions.currentValue) {
      this.pageOfItems = changes.transmitions.currentValue;
    }
  }

  public onChangePage(ev: any): void {
    this.currentPage = ev.page;
    const start = (ev.page - 1) * ev.itemsPerPage;
    const end = ev.page * ev.itemsPerPage;
    this.pageOfItems = this.transmitions.slice(start, end);
  }

  public deleteLive(id: string): void {
    this.deleteTransmition.emit(id);
    this.currentPage = 1;
  }
}
