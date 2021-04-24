import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-transmition',
  templateUrl: './add-transmition.component.html',
  styleUrls: ['./add-transmition.component.scss']
})
export class AddTransmitionComponent {
  @Input() type: string;
  @Output() saveTransmition: EventEmitter<any> = new EventEmitter();

  transmitionForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.transmitionForm = this.formBuilder.group({
      title: [null],
      link: [null],
      date: [null],
      institution: [null]
    });
  }

  public addTransmition() {
    this.saveTransmition.emit(this.transmitionForm.getRawValue());
  }
}
