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
  selector: 'app-personal-apresentation',
  templateUrl: './personal-apresentation.component.html',
  styleUrls: ['./personal-apresentation.component.scss']
})
export class PersonalApresentationComponent implements OnInit, OnChanges {
  @Input() curriculum: any;
  @Output() personalData: EventEmitter<{
    name: string;
    description: string;
  }> = new EventEmitter();

  name: string;
  description: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const curriculum = changes.curriculum;

    if (curriculum && curriculum.currentValue) {
      this.name = curriculum.currentValue.name;
      this.description = curriculum.currentValue.description;
    }
  }

  ngOnInit() {}

  save() {
    this.personalData.emit({ name: this.name, description: this.description });
  }
}
