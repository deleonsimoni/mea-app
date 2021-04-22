import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  @Input() formation: any;
  @Output() deleteFormation: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public delete(id: string) {
    this.deleteFormation.emit(id);
  }
}
