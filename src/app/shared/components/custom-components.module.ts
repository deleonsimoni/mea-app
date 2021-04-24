import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormationComponent } from './formation/formation.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { PersonalApresentationComponent } from './personal-apresentation/personal-apresentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfessionalPerformanceComponent } from './professional-performance/professional-performance.component';

@NgModule({
  declarations: [
    FormationComponent,
    AddFormationComponent,
    PersonalApresentationComponent,
    ProfessionalPerformanceComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    FormationComponent,
    AddFormationComponent,
    PersonalApresentationComponent,
    ProfessionalPerformanceComponent
  ]
})
export class CustomComponentsModule {}
