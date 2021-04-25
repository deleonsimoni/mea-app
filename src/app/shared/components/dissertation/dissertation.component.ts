import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dissertation } from '@app/models/dissertation';

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
  }> = new EventEmitter();
  @Output() cancelCreation: EventEmitter<boolean> = new EventEmitter();
  @Output() removeDissertation: EventEmitter<string> = new EventEmitter();

  public dissertationForm: FormGroup;
  public showSaveButton: boolean = true;
  public dissertationlevels: Array<{ id: number; label: string }> = [
    { id: 1, label: 'Iniciação Científica' },
    { id: 2, label: 'Mestrado' },
    { id: 3, label: 'Doutorado' },
    { id: 4, label: 'Pós Doc' }
  ];

  constructor(private readonly formBuilder: FormBuilder) {
    this.dissertationForm = this.formBuilder.group({
      date: [null],
      title: [null],
      author: [null],
      type: [null],
      description: [null],
      link: [null]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const dissertation = changes.dissertation;

    if (dissertation && dissertation.currentValue) {
      this.showSaveButton = false;

      this.dissertationForm.patchValue({
        date: dissertation.currentValue.date,
        title: dissertation.currentValue.title,
        author: dissertation.currentValue.author,
        type: dissertation.currentValue.type,
        description: dissertation.currentValue.description,
        link: dissertation.currentValue.link
      });

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
    if (this.dissertation) {
      this.dissertation = {
        ...this.dissertation,
        ...this.dissertationForm.getRawValue()
      };

      this.saveDissertation.emit({
        exist: true,
        dissertation: this.dissertation
      });
    } else {
      this.saveDissertation.emit({
        exist: false,
        dissertation: this.dissertationForm.getRawValue()
      });
    }

    this.dissertationForm.reset();
  }

  public cancelDissertation(): void {
    this.cancelCreation.emit(true);
  }

  public deleteDissertation(): void {
    this.removeDissertation.emit(this.dissertation._id);
  }
}
