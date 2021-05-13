import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.scss']
})
export class AddFormationComponent implements OnInit, OnChanges {
  @Input() formation: any;
  @Input() create: boolean = false;
  @Output() createFormation: EventEmitter<any> = new EventEmitter();
  @Output() deleteFormation: EventEmitter<string> = new EventEmitter();

  formationForm: FormGroup;
  showSaveButton: boolean;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formationForm = this.formBuilder.group({
      type: [null],
      institutionName: [null],
      title: [null],
      grade: [null],
      advisor: [null],
      activitySections: [null],
      levelOfEducation: [null]
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.formation) {
      const currentValue = changes.formation.currentValue;

      this.fillForm(currentValue);
    }

    this.registerListenner();
  }

  private fillForm(data: any) {
    this.formationForm.patchValue({
      type: data.type,
      institutionName: data.institutionName,
      title: data.title,
      grade: data.grade,
      advisor: data.advisor,
      activitySections: data.activitySections,
      levelOfEducation: data.levelOfEducation
    });
  }

  public regiterFormation(): void {
    if (this.formation) {
      this.formation = {
        ...this.formation,
        ...this.formationForm.value
      };
      this.createFormation.emit(this.formation);
    } else {
      this.createFormation.emit(this.formationForm.value);
    }
  }

  public removeFormation(): void {
    this.deleteFormation.emit(this.formation._id);
  }

  private registerListenner(): void {
    this.formationForm.valueChanges.subscribe(val => {
      if (val) {
        this.showSaveButton = true;
      }
    });
  }
}
