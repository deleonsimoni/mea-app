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
    { id: 3, label: 'Filmes de pesquisa' },
    { id: 4, label: 'Podcast' },
    { id: 5, label: 'Série salto para o futuro' },
    { id: 6, label: 'Vídeo aulas e Palestras' }
  ];
  private fileCover: File;
  private msgCover = 'Selecione o arquivo';

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
    this.saveTransmition.emit({
      media: this.transmitionForm.getRawValue(),
      image: this.fileCover
    });
    this.transmitionForm.reset();
    this.fileCover = {} as File;
    this.getFileNameCover();
  }

  public getPlaceholder(field: string) {
    return `${translate[field]} da ${this.type}`;
  }

  public setCover(files: FileList): void {
    this.fileCover = files[0];

    this.getFileNameCover();
  }

  private getFileNameCover() {
    if (this.fileCover && this.fileCover.name) {
      this.msgCover = this.fileCover.name;
    } else {
      this.msgCover = this.getNameFromFile('image');
    }
  }

  private getNameFromFile(field: string): string {
    const fieldControl = this.transmitionForm.get(field);

    if (fieldControl && fieldControl.value !== null) {
      return fieldControl.value.replace(/\w+[/]|[.]\w+/gi, '');
    }

    return 'Selecione o arquivo';
  }
}
