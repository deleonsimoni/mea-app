import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { translate } from '@app/enums/translate.enum';
import { Dissertation } from '@app/models/dissertation';
import { ToastService } from '@app/service/toast.service';

@Component({
  selector: 'app-dissertation',
  templateUrl: './dissertation.component.html',
  styleUrls: ['./dissertation.component.scss']
})
export class DissertationComponent implements OnChanges {
  @Input() dissertation: Dissertation;
  @Output() saveDissertation: EventEmitter<{
    exist: boolean;
    dissertation: Dissertation;
    filePdf: any;
  }> = new EventEmitter();
  @Output() cancelCreation: EventEmitter<boolean> = new EventEmitter();
  @Output() removeDissertation: EventEmitter<string> = new EventEmitter();
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  private filePdf: File;
  public linkArchive: string;

  public uploadType: number = 1;
  public uploadOptions: Array<{ id: number; label: string }> = [
    { id: 1, label: 'Link' },
    { id: 2, label: 'PDF' },
    { id: 3, label: 'Currículo lattes' }
  ];
  public dissertationForm: FormGroup;
  public showSaveButton: boolean = true;
  public msgPdf = 'Selecione o arquivo';
  public dissertationlevels: Array<{ id: number; label: string }> = [
    { id: 1, label: 'Iniciação Científica' },
    { id: 2, label: 'Mestrado' },
    { id: 3, label: 'Doutorado' },
    { id: 4, label: 'Pós Doc' }
  ];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly toastService: ToastService
  ) {
    this.dissertationForm = this.formBuilder.group({
      date: [null],
      title: [null],
      author: [null, [Validators.required]],
      category: [null, [Validators.required]],
      description: [null],
      link: [null]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const dissertation = changes.dissertation;

    if (dissertation && dissertation.currentValue) {
      this.showSaveButton = false;

      if (dissertation.currentValue.archive) {
        this.uploadType = 2;
        this.linkArchive = dissertation.currentValue.archive;
      }

      this.dissertationForm.patchValue({
        date: dissertation.currentValue.date,
        title: dissertation.currentValue.title,
        author: dissertation.currentValue.author,
        category: dissertation.currentValue.category,
        description: dissertation.currentValue.description,
        link: dissertation.currentValue.link
      });

      this.getFileName();
      this.registerListenner();
    }
  }

  public registerListenner(): void {
    this.dissertationForm.valueChanges.subscribe((val: any) => {
      if (val) {
        this.showSaveButton = true;
      }
    });
  }

  public addDissertation(): void {
    if (this.dissertationForm.valid) {
      if (this.dissertation) {
        this.dissertation = {
          ...this.dissertation,
          ...this.dissertationForm.getRawValue()
        };

        this.saveDissertation.emit({
          exist: true,
          dissertation: this.dissertation,
          filePdf: this.filePdf ? this.filePdf : null
        });
      } else {
        this.saveDissertation.emit({
          exist: false,
          dissertation: this.dissertationForm.getRawValue(),
          filePdf: this.filePdf ? this.filePdf : null
        });
      }

      this.dissertationForm.reset();
    } else {
      const controls = this.dissertationForm.controls;
      let field: string;

      for (const key in controls) {
        if (controls[key].errors) {
          field = key;
          this.toastService.error(`Preencha o campo ${translate[field]}`);
          return;
        }
      }
    }
  }

  public cancelDissertation(): void {
    this.cancelCreation.emit(true);
  }

  public deleteDissertation(): void {
    this.removeDissertation.emit(this.dissertation._id);
  }

  private getFileName() {
    if (this.filePdf && this.filePdf.name) {
      this.msgPdf = this.filePdf.name;
    } else {
      this.msgPdf = this.getNameFromFile();
    }
  }

  private getNameFromFile(): string {
    if (this.linkArchive) {
      return this.linkArchive.replace(/\w+[/]|[.]\w+/gi, '');
    }

    return 'Selecione o arquivo';
  }

  public setFileName(file: File): void {
    this.showSaveButton = true;
    this.filePdf = file[0];

    this.getFileName();
  }

  public getLink(): string {
    return `https://profedmeasantos.s3.us-east-2.amazonaws.com/${this.linkArchive}`;
  }

  get typeField(): string {
    if (this.uploadType === 1) {
      return 'Link do trabalho';
    }

    return 'Link do currículo lattes';
  }
}
