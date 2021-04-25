import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnChanges {
  @Input() project: any;
  @Output() saveProject: EventEmitter<any> = new EventEmitter();
  @Output() cancelCreation: EventEmitter<boolean> = new EventEmitter();
  @Output() removeProject: EventEmitter<{ id: string }> = new EventEmitter();

  public showSaveButton: boolean = true;
  public formProject: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formProject = this.formBuilder.group({
      title: [null],
      startDate: [null],
      endDate: [null],
      topics: [null],
      description: [null],
      searchGroup: [null],
      financing: [null],
      keywords: this.formBuilder.array([this.createField()]),
      generalObjectives: [null],
      specificObjectives: [null]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const project = changes.project;

    if (project && project.currentValue) {
      this.showSaveButton = false;

      this.formProject.patchValue({
        title: project.currentValue.title,
        startDate: project.currentValue.startDate,
        endDate: project.currentValue.endDate,
        topics: project.currentValue.topics,
        description: project.currentValue.description,
        searchGroup: project.currentValue.searchGroup,
        financing: project.currentValue.financing,
        generalObjectives: project.currentValue.generalObjectives,
        specificObjectives: project.currentValue.specificObjectives
      });

      project.currentValue.keywords.forEach((el: any, key: number) => {
        if (key == 0) {
          console.log(this.formProject.get('keywords')['controls']);
          this.formProject.get('keywords')['controls'][0].patchValue({
            word: el.word
          });
        } else {
          this.addWordControl(el.word);
        }
      });

      this.registerListenner();
    }
  }

  registerListenner() {
    this.formProject.valueChanges.subscribe(val => {
      if (val) {
        this.showSaveButton = true;
      }
    });
  }

  private createField(el: string = null): FormGroup {
    return this.formBuilder.group({
      word: [el]
    });
  }

  public addWordControl(word: string = null): void {
    const control = this.formProject.get('keywords') as FormArray;

    control.push(this.createField(word));
  }

  public removeWordControl(index: number): void {
    const control = this.formProject.get('keywords') as FormArray;

    control.removeAt(index);
  }

  public addProject(): void {
    if (this.project) {
      this.project = {
        ...this.project,
        ...this.formProject.getRawValue()
      };

      this.saveProject.emit({ exist: true, project: this.project });
    } else {
      this.saveProject.emit({
        exist: false,
        project: this.formProject.getRawValue()
      });
    }
  }

  public cancelProject(): void {
    this.cancelCreation.emit(true);
  }

  public deleteProject(): void {
    this.removeProject.emit(this.project._id);
  }
}
