import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.scss']
})
export class AddFormationComponent implements OnInit {
  @Output() createFormation: EventEmitter<any> = new EventEmitter();

  formationForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formationForm = this.formBuilder.group({
      type: [null],
      // initialData: [null],
      // finalDate: [null],
      institutionName: [null],
      title: [null],
      grade: [null],
      advisor: [null]
    });
  }

  public regiterFormation(): void {
    this.createFormation.emit(this.formationForm.value);
  }
}
