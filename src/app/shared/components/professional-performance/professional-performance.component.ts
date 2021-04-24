import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activity, Job, ProfessionalPerformance } from '@app/models';

@Component({
  selector: 'app-professional-performance',
  templateUrl: './professional-performance.component.html',
  styleUrls: ['./professional-performance.component.scss']
})
export class ProfessionalPerformanceComponent implements OnChanges {
  @Input() createPerformance: boolean;
  @Input() professionalPerformance: ProfessionalPerformance;
  @Output() deleteProfessionalPerformance: EventEmitter<
    any
  > = new EventEmitter();
  @Output() updateProfessionalPerformance: EventEmitter<
    any
  > = new EventEmitter();

  public performancesForm: FormGroup;
  public institution: string;
  public showSaveButton: boolean;

  constructor(private readonly formBuilder: FormBuilder) {
    this.performancesForm = this.formBuilder.group({
      jobs: this.formBuilder.array([]),
      activities: this.formBuilder.array([])
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.professionalPerformance) {
      const currentValue = changes.professionalPerformance.currentValue;
      this.institution = currentValue.institution;

      currentValue.jobs.forEach((el: any) => {
        this.addJobControl(el);
      });

      currentValue.activities.forEach((el: any) => {
        this.addActivityControl(el);
      });
    }

    if (changes.createPerformance) {
      this.addJobControl();
      this.addActivityControl();
    }

    this.performancesForm.valueChanges.subscribe(val => {
      if (val) {
        this.showSaveButton = true;
      }
    });
  }

  private createFormJobs(el?: Job): FormGroup {
    return this.formBuilder.group({
      initialDate: el
        ? [el.initialDate, Validators.required]
        : [null, Validators.required],
      finalDate: el ? el.finalDate : [null],
      occupation: el
        ? [el.occupation, Validators.required]
        : [null, Validators.required],
      description: el ? el.description : [null]
    });
  }

  private createFormActivity(el?: Activity): FormGroup {
    return this.formBuilder.group({
      initialDate: el
        ? [el.initialDate, Validators.required]
        : [null, Validators.required],
      finalDate: el ? [el.finalDate] : [null],
      role: el ? [el.role, Validators.required] : [null, Validators.required],
      description: el ? [el.description] : [null]
    });
  }

  public addJobControl(element: Job = null) {
    const jobsForm = this.performancesForm.get('jobs') as FormArray;

    jobsForm.push(this.createFormJobs(element));
  }

  public addActivityControl(element: Activity = null) {
    const activitiesForm = this.performancesForm.get('activities') as FormArray;

    activitiesForm.push(this.createFormActivity(element));
  }

  public deleteActivity(index: number) {
    const activitiesForm = this.performancesForm.get('activities') as FormArray;

    activitiesForm.removeAt(index);
  }

  public deleteJob(index: number) {
    const jobsForm = this.performancesForm.get('jobs') as FormArray;

    jobsForm.removeAt(index);
  }

  public deletePerformance() {
    if (this.professionalPerformance && this.professionalPerformance._id) {
      this.deleteProfessionalPerformance.emit({
        id: this.professionalPerformance._id,
        exist: true
      });
    } else {
      this.deleteProfessionalPerformance.emit({ exist: false });
    }
  }

  public savePerformance() {
    const { jobs, activities } = this.performancesForm.getRawValue();

    if (
      this.performancesForm.get('jobs').status === 'VALID' &&
      this.performancesForm.get('activities').status === 'VALID' &&
      this.institution !== ''
    ) {
      this.professionalPerformance.institution = this.institution;
      this.professionalPerformance.jobs = jobs;
      this.professionalPerformance.activities = activities;

      this.updateProfessionalPerformance.emit(this.professionalPerformance);
    }
  }

  public getError(index: number, control: string): boolean {
    const status = this.performancesForm.get(control)['controls'][index].status;
    const touched = this.performancesForm.get(control)['controls'][index]
      .touched;

    if (status == 'INVALID' && touched) {
      return true;
    }

    return false;
  }
}
