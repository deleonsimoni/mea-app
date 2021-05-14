import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { translate } from '@app/enums/translate.enum';

@Component({
  selector: 'app-add-transmition',
  templateUrl: './add-transmition.component.html',
  styleUrls: ['./add-transmition.component.scss']
})
export class AddTransmitionComponent implements OnChanges {
  @Input() type: string;
  @Output() saveTransmition: EventEmitter<any> = new EventEmitter();
  @Input() formFields: Array<string>;

  transmitionForm: FormGroup;
  selectTypes: Array<{ id: number; label: string }> = [
    { id: 1, label: 'Entrevista' },
    { id: 2, label: 'Apresentação' },
    { id: 3, label: 'Mídia' },
    { id: 4, label: 'Podcast' }
  ];

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.formFields.currentValue) {
      this.createFormDynamic();
    }
  }

  createFormDynamic() {
    this.transmitionForm = this.formBuilder.group({});

    this.formFields.forEach((field: string) => {
      this.transmitionForm.setControl(field, new FormControl(null));
    });
  }

  public addTransmition() {
    this.saveTransmition.emit(this.transmitionForm.getRawValue());
    this.transmitionForm.reset();
  }

  public getPlaceholder(field: string) {
    return `${translate[field]} da ${this.type}`;
  }
}
